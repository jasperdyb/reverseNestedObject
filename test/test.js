const ans = require("../reverseNestedObject");
var assert = require("assert");

describe("Reverse Nested Objects", function () {
  it("should process inputValue to match outputValue", function () {
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
    assert.deepStrictEqual(
      ans.reverseNestedObject(inputValue, null),
      outputValue
    );
  });
});
