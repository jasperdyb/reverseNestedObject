function reverseNestedObject(input, processed) {
  let output = {};
  for (let key in input) {
    if (typeof input[key] === "object") {
      for (let innerKey in input[key]) {
        if (!processed) {
          //最一開始帶入processed為null，將最外層的鍵值轉為最內層的值，並傳入遞迴
          processed = {};
          processed[innerKey] = key; // process   {hired:{be:{...}}} to {be:hired}
        } else {
          //第二層開始，將內層鍵值賦予上一層的processed物件
          let newProcessed = {};
          newProcessed[innerKey] = processed; //process {be:{to:...}} to {to:{be:hired}}
          processed = newProcessed;
        }
      }
      //將內層物件與processed物件傳入遞迴
      //以第一次遞迴呼叫reverseNestedObject為例 input = {be:{to:{...}}} , processed = {be:hired}
      output = reverseNestedObject(input[key], processed);
    } else {
      //最內層將 deserve: "I" 轉為 {I :{ deserve :{...}}}
      output[input[key]] = processed;
    }
  }
  return output;
}

exports.reverseNestedObject = reverseNestedObject;
