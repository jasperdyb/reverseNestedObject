const ans = require("./reverseNestedObject");
var assert = require("assert");

describe("Reverse Nested Objects", function () {
  test("should process inputValue to match outputValue", function () {
    let inputValue = {
      hired: {
        be: {
          to: {
            deserve: "I",
          },
        },
      },
    };

    let outputValue = {
      I: {
        deserve: {
          to: {
            be: "hired",
          },
        },
      },
    };

    expect(ans.reverseNestedObject(inputValue, null)).toStrictEqual(
      outputValue
    );
  });
});
