
/**
 *
 */
var ExifReader = {
    /**
     *
     */
    getExifData: function(filepath, success, fail) {
        return Cordova.exec(success, 
                            fail,
                            "ExifReader",
                            "getExifData",
                            [filepath,"{Exif}"]);
    },
    /**
     *
     */
    getTiffData: function(filepath, success, fail) {
        return Cordova.exec(success,
                            fail,
                            "ExifReader",
                            "getTiffData",
                            [filepath, "{Tiff}"]);
    },

    /**
     *
     */
    stripExifData: function(filepath, success, fail) {
        return Cordova.exec(success,
                            fail,
                            "ExifReader",
                            "stripTiffData",
                            [filepath]); 
    },

    /**
     *
     */
    stripGeoData: function(filepath, success, fail) {
        return Cordova.exec(success,
                            fail,
                            "ExifReader",
                            "stripGeoData",
                            [filepath]);
    }
    
};
