const crypto=require('crypto')
const smsSid = process.env.SMS_SID;
const hashService=require('../services/hash-service.js')
const smsAuthToken = process.env.SMS_AUTH_TOKEN;
const twilio = require('twilio')(smsSid, smsAuthToken, {
    lazyLoading: true,
})
class OtpService{
   async generateOTP(){
        const otp=await crypto.randomInt(1000,9999);
        return otp
    }
    async sendBySms(phone,otp){
        return twilio.messages.create({
            to:phone,
            from: process.env.SMS_FROM_NUMBER,
            body:`Your weChat OTP is ${otp}`
        })
    }
    verifyOtp(hashedOtp, data) {
        let computedHash = hashService.hashOtp(data);
        return computedHash === hashedOtp;
    }

}
module.exports = new OtpService()