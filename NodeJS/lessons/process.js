let pid = process.pid

console.log(pid)
console.log(process.env)
console.log(process.env.PORT)
console.log(process.env.NODE_ENV)

const dotenv = require('dotenv');
dotenv.config();

console.log(process.env)
console.log(process.env.PORT)
console.log(process.env.NODE_ENV)

console.log(process.argv)



if(Math.random()>0.5){
    // while(true){

    // }
} else{
    console.log('Complete')
    process.exit();
}