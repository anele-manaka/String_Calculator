const {add} = require("../src/string_calculator.js");


describe("The add function", function () {
    it("should return 0 if input is an empty string", function () {
      expect(add("")).toBe(0);
    });
  
    it("should handle up to two integers passed in as a string", function () {
      expect(add("1,1")).toBe(2);
    });
  
    it("should handle multiple integers", function () {
      expect(add("1,2,3,4")).toBe(10);
    });
  
    it("should handle new lines between integers", function () {
      expect(add("1\n2,3")).toBe(6);
    });
    it("should handle different delimeters", function () {
        expect(add("//;\n1;2")).toBe(3);
    });
    it("should handle different delimeters", function () {
      expect(add("//4\n142")).toBe(3);
    });
    it("should handle negative integers", function () {
      expect(add("-1,-2,-3,-4")).toThrow('ERROR: negatives not allowed');
    });
    it("should it ignores integers greater than or equal to 1000", function () {
      expect(add("//;n1000,1;2")).toBe(3);
    });
  
    it("should support delimiters of any length", function () {
      expect(add("//***\n1***2***3")).toBe(6);
    });
    it("should different delimiters of any length", function () {
      expect(add("//[abc][777][:(]\n1abc27773:(1")).toBe(7);
    });
    it("should handle invalid input", function () {
        expect(add("//;\n1000;1;2;")).toThrow(';ERROR: invalid input');
    });
  

})