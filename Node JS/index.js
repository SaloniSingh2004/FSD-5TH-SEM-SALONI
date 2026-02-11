// const http=require('http');
// const myserver = http.createServer((req,res)=>{
//     // console.log('server1');
//     // res.end('Hi this is my first server');
//     if (req.url=='/'){
//         res.end("this is ABES Engineering College");
//     }
//     else if (req.url=='/about'){
//         res.end("WE are student of BTECH");
//     }
//     else if(req.url=='/contact'){
//         res.end("We are in ghaziabad")
//     }
//     else if(req.url=='/class'){
//         res.end("We are of IT A")
//     }
//     else{
//         res.end("404 page is not found");
//     }
// });

// myserver.listen(8000,()=>console.log('Server is run'));
// const fs=require('fs');
// fs.writeFileSync("./it-a.txt","We are student of IT A");
// fs.writeFileSync("./abes.txt","We are student of ABES");
// const result =fs.readFileSync("./it-a.txt","utf-8");
// console.log(result);
// const fs=require('fs');
// fs.writeFile("./ad.txt","code is very good time pass", () => { });
// fs.readFile("./ad.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error",err);
//     }
//     else{
//         console.log(result);
//     }
// });
// fs.appendFileSync("./ad.txt","and I am happy");
// fs.appendFile("./ad.txt","Node js is good",()=>{});
// fs.cpSync("./a1.txt","./b1.txt");
// fs.cp("./a1.txt","./b1.txt",()=>{});
// fs.cp("./a1.txt","./b1.txt",(err)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log("File copied successfully");
//     }
// });
// fs.unlinkSync("./ad.txt");
// const fs = require('fs').promises;

// async function readFileExample() {
//   try {
//     const data = await fs.readFile('./a1.txt', 'utf8');
//     console.log('File content:', data);
//   } catch (err) {
//     console.error('Error reading file:', err);
//   }
// }

// readFileExample();
// const fs = require("fs");

// const data = {
//   name: "Saloni",
//   age: 21,
//   course: "B.Tech",
//   skills: ["Java", "Python", "Node.js"]
// };

// const jsonData = JSON.stringify(data, null, 2); // pretty format

// fs.writeFile("data.json", jsonData, (err) => {
//   if (err) {
//     console.log("Error writing file", err);
//   } else {
//     console.log("JSON file written successfully");
//   }
// });
