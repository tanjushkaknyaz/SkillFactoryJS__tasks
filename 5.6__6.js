let arr = [1, 1, 1, 1, 1, 1];
let c = 0;
let x = arr[0];
for (i = 0; i < arr.length; i++) {
  if (arr[i] == x) {
    c++;
  }
}
if (c == arr.length) {
  console.log("All elements are equal");
} else {
  console.log("oops");
}
