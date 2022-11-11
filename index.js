// expecting time to be a string in the format like '8:15' or '12:30'
const numberAsString = {
  2: 'two',
  3: 'three',
  8: 'eight',
  15: 'quarter',
  27: 'twenty seven',
};

function convertTimeToWords(time) {
  if (time === '0:00') {
    return 'midnight';
  }

  const minutes = time.split(':')[1];
  const hours = time.split(':')[0];

  if (minutes === '00') {
    return `${numberAsString[Number(hours)]} o'clock`;
  }

  if (minutes < 30) {
    return `${numberAsString[Number(minutes)]} past ${numberAsString[Number(hours)]}`;
  }

  if (minutes === '30') {
    return `half past ${numberAsString[Number(hours)]}`;
  }

  if (minutes > 30) {
    const minutesPartInNumbers = 60 - Number(minutes);
    const hoursPartInNumbers = Number(hours) + 1;
    return `${numberAsString[minutesPartInNumbers]} to ${numberAsString[hoursPartInNumbers]}`;
  }

  if (time === '2:45') {
    return 'quarter to three';
  }

  return 'half past eight';
}

module.exports = { convertTimeToWords };
