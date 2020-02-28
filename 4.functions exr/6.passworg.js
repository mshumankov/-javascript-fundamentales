function password(pass) {
  let countDigits = 0;

  function digit(value) {
    return value >= 48 && value <= 57;
  }

  if (!lengthPass(pass)) {
    console.log("Password must be between 6 and 10 characters");
  }

  if (!lettersDigits(pass)) {
    console.log("Password must consist only of letters and digits");
  }

  if (!twoDigits(pass)) {
    console.log("Password must have at least 2 digits");
  }

  if (lengthPass(pass) && lettersDigits(pass) && twoDigits(pass)) {
    console.log("Password is valid");
  }

  function lengthPass(password) {
    return password.length >= 6 && password.length <= 10;
  }

  function lettersDigits(password) {
    function letter(value) {
      return (value >= 65 && value <= 90) || (value >= 97 && value <= 122);
    }

    for (let i = 0; i < password.length; i++) {
      let value = Number(password.charCodeAt(i));

      if (digit(value) || letter(value)) {
        continue;
      }

      return false;
    }

    return true;
  }

  function twoDigits(password) {
    for (let i = 0; i < password.length; i++) {
      let value = Number(password.charCodeAt(i));
      let isDigit = digit(value);

      if (isDigit) {
        countDigits++;
      }
    }

    if (countDigits >= 2) {
      return true;
    } else {
      return false;
    }
  }
}
password("MyPass123");
