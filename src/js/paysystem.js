const paySystems = {
  2: 'mir',
  30: 'diners_club',
  36: 'diners_club',
  38: 'diners_club',
  31: 'jcb',
  35: 'jcb',
  34: 'amex',
  37: 'amex',
  4: 'visa',
  50: 'maestro',
  56: 'maestro',
  57: 'maestro',
  58: 'maestro',
  51: 'master',
  52: 'master',
  53: 'master',
  54: 'master',
  55: 'master',
  60: 'discover',
  62: 'china_unionpay',
  63: 'maestro',
  67: 'maestro',
};
export default function checkPaySystem(inputValue) {
  const systemCode = inputValue.slice(0, 2);
  let name;
  if (systemCode[0] === '2' || systemCode[0] === '4') {
    name = paySystems[systemCode[0]];
  } else {
    name = paySystems[systemCode];
  }
  return name;
}
