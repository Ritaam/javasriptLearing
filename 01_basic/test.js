function generateOtp() {
    let otp = Math.floor(Math.random() * 90000);
    return otp;
}

console.log("your otp is " , generateOtp());