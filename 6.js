function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // --------------- Contoh penggunaan ----------------//
  const emailToValidate = "contoh@example.com";
  if (validateEmail(emailToValidate)) {
    console.log("Email is valid!");
  } else {
    console.log("Email is not valid!");
  }

  function validateInteger(input) {
    return Number.isInteger(input);
  }
  
   // --------------- Contoh penggunaan ----------------//
  const numberToValidate = 41;
  if (validateInteger(numberToValidate)) {
    console.log("input is valid");
  } else {
    console.log("input is not valid!");
  }
  
