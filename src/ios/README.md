# Cordova iOS Exif Reader Plugin

provides a simple api for jpeg Exif data access on iOS for Cordova/Phonegap

Designed for use with Cordova 2.2.0

## Adding ExifReader to your project
- add the ExifReader.h and ExifReader.m to the "/plugins" folder of your Cordova-iOS project
- add ExifReader.js to the "/www" folder of your Cordova-iOS project folder
- add the following entry to Plugins of the Cordova.plist file of your Cordova-iOS project folder
    <key>ExifReader</key>
    <string>ExifReader</string>
- Link Against the ImageIO.framework 
    - in Xcode, add the ImageIO.framework to the "Link Binary With Libraries" section of "Build Phases"
## Using ExifReader in your project
- for exif data
    ExifReader.getExifData (imageFileURI, success, fail);
- for the Tiff header data
    ExifReader.getTiffData (imageFileURI, success, fail);

Where imageFileURI is a valid path to an image on the device filesystem. If successful, ExifReader will return a json string filled with the appropriate metadata.
