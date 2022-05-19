
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

const routeExists = (routePath) => fs.existsSync(routePath);
// console.log('ruta');
const absolutePath = (routePath) => path.isAbsolute(routePath);
// console.log('prueba');
const convertAbsolutePath = (routePath) => (absolutePath(routePath) ? routePath : path.resolve(routePath));
// console.log('prueba');
const readFiles = (routePath) =>  fs.readFileSync(routePath, 'utf-8');
const determineFile = (routePath) => fs.statSync(routePath).isFile();
const directoryNavigator = (routePath) => fs.readdirSync(routePath)


// //ejemplo de ruta
// const route = 'prueba/file1.md'
//  const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba'
// console.log(routeExists(route))
// console.log(absolutePath(route))
// console.log(convertAbsolute(route))
// console.log(readFiles(route))
// console.log(determineFile(route))
// console.log(directoryNavigator(route))
export {routeExists,
        absolutePath,
        convertAbsolutePath,
        readFiles,
        determineFile,
        directoryNavigator }
