
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
import { error } from "console";
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
const determineDirectory = (routePath) => fs.statSync(routePath).isDirectory();
const readDirectory = (routePath) => fs.readdirSync(routePath);
const fileExtension = (routePath) => path.extname(routePath)

// const getOnlyFilesMD = (routePath) => {
//   let arrayRouteFile = [];
//   const routeAbs = convertAbsolutePath(routePath);
//   if (determineDirectory(routeAbs)){
//       const arrayDirectory = readDirectory(routeAbs)
//       arrayDirectory.forEach((el) => {
//           const newRoute = path.join(routeAbs, el)
//           if(determineFile(newRoute)){
//             fileExtension(newRoute) === '.md' ? arrayRouteFile.push(newRoute) : console.log('No es un archivo MD')
//           } else {
//             arrayRouteFile = arrayRouteFile.concat(getOnlyFilesMD(newRoute));
//           }
//        })
//   }else{
//     fileExtension(routeAbs) === '.md' ? arrayRouteFile.push(routeAbs) : console.log('No es un archivo MD')
//   }
//   return arrayRouteFile
// }
//new version
const getOnlyFilesMD = (routePath) => {
  let arrayRouteFile = [];
  const routeAbs = convertAbsolutePath(routePath);
  if(determineFile(routeAbs)){
    if(fileExtension(routeAbs) === '.md'){
       arrayRouteFile.push(routeAbs)
    }
  } else{
      const arrayDirectory = readDirectory(routeAbs)
      arrayDirectory.forEach((el) => {
          const newRoute = path.join(routeAbs, el)
            arrayRouteFile = arrayRouteFile.concat(getOnlyFilesMD(newRoute));
       })
  }
  return arrayRouteFile
}

// //Obtención links
const getLinks = (file) =>{
    let arrayLinkObject =[]
    const readFileLinks = readFiles(file);
    const regExpLinks = /\[([^\[]+)\](\(.*\))/gm;
    const matches = readFileLinks.match(regExpLinks);
    if(matches!==null){
      const rexExpSingle =/\[([^\[]+)\](\(.*\))/;
      matches.forEach((link) => {
        const match = rexExpSingle.exec(link)
        arrayLinkObject.push({
          href: match[2],
          text: match[1].substring(0, 50),
          file,
        })
      })
    }
  return arrayLinkObject
}







// //ejemplo de ruta
// const route = 'src'
// const route='C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/README.md'
//  const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba'
// console.log(routeExists(route))
// console.log(absolutePath(route))
// console.log(convertAbsolute(route))
// console.log(readFiles(route))
// console.log(determineFile(route))
// console.log(determineDirectory(route))
// console.log(readDirectory(route))
// console.log(fileExtension(route))
// console.log(getOnlyFilesMD(route))
// console.log(getLinks(route))
// console.log(process.argv)
export {routeExists,
        absolutePath,
        convertAbsolutePath,
        readFiles,
        determineFile,
        determineDirectory,
        readDirectory,
        fileExtension,
        getOnlyFilesMD,
        getLinks }
