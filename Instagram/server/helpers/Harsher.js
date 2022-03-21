import sha256 from 'crypto-js/sha256.js'


export const Harsher = (password)=>{
    return sha256(password).toString()
}
export const Valid = (password,loginPass)=>{
    return password == sha256(loginPass).toString()
}