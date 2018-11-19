function checkValidatePhoneNumber(phoneNumber) {
  let regx = /^\([\d]{2}\)\-\(\d+\)$/;
  if (regx.test(phoneNumber)) {
    console.log(`Phone Number: ${phoneNumber} hợp lệ!`);
  } else {
    console.log(`Phone Number: ${phoneNumber} không hợp lệ!`);
  }
}

let phoneNumber = "(84)-(0978489648)";
checkValidatePhoneNumber(phoneNumber);
phoneNumber = "(84)-(22ss222222)";
checkValidatePhoneNumber(phoneNumber);
phoneNumber = "(82)-(22222222)";
checkValidatePhoneNumber(phoneNumber);
phoneNumber = "(a8)-(22222222)";
checkValidatePhoneNumber(phoneNumber);
