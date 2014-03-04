

describe("Exif Reader", function () {
    var cordova;

    beforeEach(function () {
       cordova = jasmine.createSpyObj('cordova', ['','']);
    });

    it("should exist", function() {
        expect(ExifReader).toBeDefined();
    });
  
    describe("getExifData function", function () {
        beforeEach(function () {
        
        });

        it("should exist", function() {
            expect(ExifReader.getExifData).toBeDefined();
        });

        it("should have been called with a path and pass/fail callbacks", function () {

        });

        it("should call success callback with a valid js object containing keyed data", function () {

        });

        it("should call error callback with an error message", function () {

        });

    });


    describe("getTiffData function", function () {
        beforeEach(function () {

        });

        it("should exist", function() {
            expect(ExifReader.getExifData).toBeDefined();
        });

        it("should have been called with a path and pass/fail callbacks", function () {

        });

        it("should return a valid js object", function () {

        });

    });


    describe("stripExifData function", function () {
        beforeEach(function () {

        });

        it("should exist", function() {
            expect(ExifReader.getExifData).toBeDefined();
        });

        it("should have been called with a path and pass/fail callbacks", function () {

        });

        it("should call success callback with path to modified image", function () {

        });

        it("should call error callback with error message", function () {

        });

    });


    describe("stripGeoData function", function () {
        beforeEach(function () {

        });

        it("should exist", function() {
            expect(ExifReader.getExifData).toBeDefined();
        });

        it("should have been called with a path and pass/fail callbacks", function () {

        });

        it("should call success callback with path to modified image ", function () {

        });

        it("should call error callback with error message", function () {

        });

    });

});
