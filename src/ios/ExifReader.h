

#import <Cordova/CDV.h>

@interface ExifReader : CDVPlugin

- (void) getExifData:(CDVInvokedUrlCommand*)command;
- (NSDictionary*) getMiscMetaDataFromInfoDict: (NSDictionary*) info;

@end