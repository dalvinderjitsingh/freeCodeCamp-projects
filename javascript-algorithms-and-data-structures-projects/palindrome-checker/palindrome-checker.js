function palindrome(str) {
  let formatedStr = str.replace(/[\W_+]/g, "").toLowerCase();

  let reversedStr = formatedStr.split("").reverse().join("");

  return formatedStr == reversedStr ? true : false;
}

palindrome("eye");