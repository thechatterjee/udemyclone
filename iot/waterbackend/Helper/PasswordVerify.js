const bcrypt = require("bcrypt")

const PasswordHash = (plaintextPassword)=>{
    const hash =  bcrypt.hash(plaintextPassword, 10)
    return hash
}

const PasswordVerify = (plaintextPassword, hash)=>{
    const verify = bcrypt.compare(plaintextPassword, hash)
    
    return verify
}


module.exports = {
    PasswordHash,
    PasswordVerify
}