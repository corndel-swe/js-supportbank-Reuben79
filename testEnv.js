import dotenv from 'dotenv'

dotenv.config() 

console.log(`The secret key is: ${process.env.SECRET_KEY}`)