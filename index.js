
// fs.writeFile("api.js", "holamundo", (error) => {
//   if (error) {
//     console.log(`error: ${error}`);
//   }
// });
// fs.writeFile("cli.js", "holamundo", (error) => {
//   if (error) {
//     console.log(`error: ${error}`);
//   }
// });
// fs.writeFile("mdlinks.js", "holamundo", (error) => {
//   if (error) {
//     console.log(`error: ${error}`);
//   }
// });
import * as fs from "fs";
import * as path from "path";

const routeExists = (rouExists) => fs.existsSync(rouExists);
// console.log('ruta');
const absolutePath = (routePath) => path.isAbsolute(routePath);
// console.log('prueba');
const convertAbsolute = (routePath) => (absolutePath(routePath) ? routePath : path.resolve(routePath));
// console.log('prueba');
const readFiles = (routePath) =>  fs.readFileSync(routePath, 'utf-8');
// const determFile = (routePath) => fs.statSync(routePath).isFile()



// //ejemplo de ruta
// const route = 'prueba/file1.md'
// //  const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/prueba.md'
// console.log(routeExists(route))
// console.log(absolutePath(route))
// console.log(convertAbsolute(route))
// console.log(readFiles(route))
// determFile(route)
export {routeExists,
        absolutePath,
        convertAbsolute,
        readFiles }
