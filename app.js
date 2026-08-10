// // console.log("hi")
// // console.log("hi")
// // x=require('./data/mydatta.js')
// // console.log(x)

// // const chalk=require('chalk'):
// // console.log(chalk.blue('Hello,World'));

// // import chalk from 'chalk' ;
// // console.log(chalk.yellowBright('Hello,world'));

// // const os = require('os');
// // const userinfo = os.userInfo();
// // const platform = os.platform();
// // const architecture = os.arch();
// // const  uptime = os.uptime();
// // console.log(uptime);
// // console.log(platform);
// // console.log(architecture);
// // console.log(uptime);

// // const fs = require('fs');
// // fs.writeFileSync('data/data.txt',"Hello World");

// // const path = require('path')
// // const filePath = path.join(__dirname,"data","data.txt")
// // console.log(filePath)

// const process = require('process');
// console.log(process.argv); 
// console.log(process.argv[2])

//  require('dotenv').config()
//  console.log(process.env.PORT)|| 3000;

// start listening on port 3000
// server.listen(3000,() => {
//     console.log('Server running at http.//localhost3000');
// })


const http = require("http")
 const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Welcome to Node.js!!</h1>');
    res.write('<p>Your first HTTP server is running</p>');
    res.end();
 })

 server.listen(3000 , ()=>{
     console.log('Server is running at http://localhost:3000')
});

 const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/html'});
        <p>Built with pure Node.js http module.</p>
    };
} else {
    
}