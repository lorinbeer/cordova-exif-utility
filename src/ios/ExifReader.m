#import "ExifReader.h"
#import <ImageIO/ImageIO.h>

@implementation ExifReader

- (void) getExifData:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSURL * url = [NSURL URLWithString: [command.arguments objectAtIndex:0]];
    
    if (url && url.scheme && url.host) {
        
        // avoids loading the entire img
        CGImageSourceRef imgref         = CGImageSourceCreateWithURL((CFURLRef)url,NULL);
        
        // right now, we are only interested in the Exif data, so we pull it out of the meta data dict returned by the following mouthful
        CFDictionaryRef ref = CGImageSourceCopyPropertiesAtIndex(imgref, 0, NULL);
        CFDictionaryRef exif = CFDictionaryGetValue(ref,kCGImagePropertyExifDictionary);
        // NSDictionary * imgMeta = [(NSDictionary*)CGImageSourceCopyPropertiesAtIndex(imgref, 0, NULL) objectForKey:@"{Exif}"];
        NSDictionary * imgMeta = (NSDictionary*)exif;
        NSLog(@"%@", [(NSDictionary*)ref description]);
        if (imgMeta) {
            // just in case
            NSError * serialerror = nil;
            
            // attempt to serialize the meta data dict
            NSData * dat = [NSJSONSerialization dataWithJSONObject: imgMeta options: 0 error: &serialerror];
            
            if (serialerror == nil) {
                NSString * jsonstr = [[NSString alloc]initWithData:dat encoding:NSUTF8StringEncoding];
                pluginResult = [CDVPluginResult resultWithStatus: CDVCommandStatus_OK messageAsString: jsonstr];
            } else {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Arg was null"];
            }
        } else {
            NSString * invalidurlerror = [[NSString alloc] initWithFormat:@"ExifReader Could not find resource %@", [command.arguments objectAtIndex:0]];
            pluginResult = [CDVPluginResult resultWithStatus: CDVCommandStatus_ERROR
                                             messageAsString: invalidurlerror];
        }
    } else {
        NSString * invalidurlerror = [[NSString alloc] initWithFormat:@"ExifReader Says %@ is an invalid URL!", [command.arguments objectAtIndex:0]];
        pluginResult = [CDVPluginResult resultWithStatus: CDVCommandStatus_ERROR
                                         messageAsString: invalidurlerror];
    }
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end