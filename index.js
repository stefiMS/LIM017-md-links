// module.exports = () => {
//   // ...
// };

// import { writeFile } from "fs";
import * as writeFile from "fs/promises";
// fs.writeFile('prueba.js', 'holamundo', (error)=>{
// if(error){
//   console.log('error: ${error}')
// }
// })

// fs.writeFile('pruebas.md','textomd', (error)=>{
//   if(error){
//     console.log('error: ${error}')
//   }
// })

writeFile("index.md", (error) => {
  if (error) {
    console.log(`error: ${error}`);
  }
});

// console.log("hola mundo");
