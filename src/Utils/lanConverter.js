function replaceArray(inputs, find, replace) {
  var replaceString = inputs;
  var regex;
  for (var i = 0; i < find.length; i++) {
    regex = new RegExp(find[i], "g");
    replaceString = replaceString.replace(regex, replace[i]);
  }
  return replaceString;
}

function convertNumberstoFarsi(matches) {
  const farsi_array = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const english_array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const arabic_array = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  matches = matches + "";

  matches = replaceArray(matches, english_array, farsi_array);
  matches = replaceArray(matches, arabic_array, farsi_array);

  return matches;
}

export default convertNumberstoFarsi;
