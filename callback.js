function functionTwo(var1, var2, callback1) {
  if (var1 > 2) {
    callback1(var1, false);
  } else {
    callback1(false, var2);
  }
}

functionTwo(1, 2, (num, num2) => {
  if (num) {
    console.log(num);
  } else {
    console.log(num2);
  }
});
