function palindrome(args) {
  for (num of args) {
    let result = isPalindrome(num.toString());

    if (result) {
      console.log("true");
    } else {
      console.log("false");
    }
  }

  function isPalindrome(number) {
    let reverseNum = number
      .split("")
      .reverse()
      .join("");

    return number === reverseNum;
  }
}
palindrome([123, 323, 421, 121]);
