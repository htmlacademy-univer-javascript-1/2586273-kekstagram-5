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

export function extractNumber(value) {
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

  return parseInt (result, 10);
}

function isMeetingTimeCorrect(dayStartTime, dayEndTime, meetingStartTime, meetingLastMinutes) {
  const convertTimeToMinutes = (time) => {
    const [hours, minutes] = time.split(":");

    return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
  };

  const dayStartMinutes = convertTimeToMinutes(dayStartTime);
  const dayEndMinutes = convertTimeToMinutes(dayEndTime);
  const meetingStartMinutes = convertTimeToMinutes(meetingStartTime);

  if (Number.isNaN(dayEndMinutes) || Number.isNaN(dayStartMinutes) || Number.isNaN(meetingStartMinutes)) {
    return false;
  }

  return dayStartMinutes <= meetingStartMinutes && meetingStartMinutes + meetingLastMinutes <= dayEndMinutes;
}
