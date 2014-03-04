# Cordova Exif Utility
offers utility functions for interacting with jpeg exif metadata

## Status
currently supports retrieval of TIFF and EXIF data from jpeg images

### iOS

### Android
in progress

### BlackBerry10 
n/a

### Windows Phone 8
in progress

## Installation
to install the plugin using Cordova CLI

    $ cordova plugin add com.ensufire.exifutil

or the PhoneGap CLI

    $ phonegap plugin add com.ensufire.exifutl

## Use

## Methods
### getExifData(img)
returns a js object containing the keyed exif header data from a jpeg image
## getTiffData(img)
returns a js object containing the keyed Tiff header data from a jpeg image
### getGeoData(img)
returns a js object containing the keyed data of the Geolocation subifd of the exif header from a jpeg image
### stripExifData(img)
strips all exif data from a given jpeg image
### stripGeoData(img)
strips the geolocation subifd from the exif header of a jpeg image

## File Structure
    |-- LICENSE
    |-- README.md
    |-- plugin.xml
    |-- src/
    |   |-- ios/
    |   |   |-- ExifUtility.h
    |   |   |-- ExifUtility.m
    |   |   |-- README.md
    |   |-- android/
    |   |   |-- README.md
    |   |-- wp8/
    |   |   |-- README.md
    |   |-- bb10
    |   |   |-- README.md
    |-- www/
    |-- |-- exifutility.js
    |-- spec/
    |   |-- 

- src/ contains native implementations of the plugin
- src/ios contains the iOS native implementation and a README.md for iOS specific details
- www/ contains the js implementation
- spec/ contains unit tests
- spec/exifutility.js the js implementation of the plugin
