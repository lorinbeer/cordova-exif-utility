var ExifReader = {
    getExifData: function(filepath, success, fail) {
        return Cordova.exec(success, 
                            fail,
                            "ExifReader",
                            "getExifData",
                            [filepath]);
    }
};
