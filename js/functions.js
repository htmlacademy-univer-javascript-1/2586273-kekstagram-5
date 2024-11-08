function isLengthCorrect(string, maxLength) {
  if (typeof string !== "string") {
    return false;
  }

  return string.length <= maxLength;
}

function isPalindrome(string) {
  if (typeof string !== "string") {
    return false;
  }

  const normalizedString = string.trim().toLowerCase().replace(/\s/gm, "");

  for (let i = 0; i <= normalizedString.length / 2; i++) {
    if (normalizedString[i] !== normalizedString[normalizedString.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

function extractNumber(value) {
  if (typeof value !== "string") {
    value = value.toString();
  }

  let result = "";

  for (let i = 0; i < value.length; i++) {
    const maybeNumber = parseInt(value[i], 10);
    if (!Number.isNaN(maybeNumber)) {
      result += maybeNumber;
    }
  }

  return parseInt(result, 10);
}
