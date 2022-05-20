
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
const determineDirectory = (routePath) => fs.statSync(routePath).isDirectory();
const readDirectory = (routePath) => fs.readdirSync(routePath);
const fileExtension = (routePath) => path.extname(routePath)

const getOnlyFilesMD = (routePath) => {
  let arrayRouteFile = [];
  const routeAbs = convertAbsolutePath(routePath);
  if (determineDirectory(routeAbs/*routePath*/)){
      const arrayDirectory = readDirectory(routeAbs/*routePath*/)
      arrayDirectory.forEach((el) => {
          const newRoute = path.join(routeAbs/*routePath*/, el)
          if(determineFile(newRoute)){
            fileExtension(newRoute) === '.md' ? arrayRouteFile.push(newRoute) : console.log('No es un archivo MD')
          } else {
            arrayRouteFile = arrayRouteFile.concat(getOnlyFilesMD(newRoute));
          }
       })
  }else{
    fileExtension(routeAbs/*routePath*/) === '.md' ? arrayRouteFile.push(routeAbs/*routePath*/) : console.log('No es un archivo MD')
  }
  return arrayRouteFile
}

// //ejemplo de ruta
// const route = 'prueba/file1.md'
const route='prueba'
//  const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/prueba.md'
// console.log(routeExists(route))
// console.log(absolutePath(route))
// console.log(convertAbsolute(route))
// console.log(readFiles(route))
// console.log(determineFile(route))
// console.log(determineDirectory(route))
// console.log(readDirectory(route))
// console.log(fileExtension(route))
console.log(getOnlyFilesMD(route))

export {routeExists,
        absolutePath,
        convertAbsolutePath,
        readFiles,
        determineFile,
        determineDirectory,
        readDirectory,
        fileExtension,
        getOnlyFilesMD }


      //   export const getRouteWithPath = (pathRoute) => {
      //     let arrayPaths = [];
      //     // pathRoute is directory
      //     if(isDirectory(pathRoute)) {
      //     const arrayPathsDirectory = readDirectory(pathRoute)
      //     arrayPathsDirectory.forEach((element) => {
      //         const arrayArchives = getRouteWithPath(element)
      //         // Uniendo array
      //         arrayPaths.push(...arrayArchives)
      //     });
      //     } else {
      //          console.log('Hola')
      //     }
      //     return arrayPaths
      // }


    //   export const getRouteFileAndDirectory = (pathRoute) => {
    //     let arrayPaths = [];
    //     // pathRoute is file
    //     if(isFile(pathRoute)){
    //         pullExtension(pathRoute) === '.md' ? arrayPaths.push(pathRoute) : console.log('No es un archivo MD')
    //     } else if (isDirectory(pathRoute)){
    //         //pathRoute is directory
    //         const arrayPathsDirectory = readDirectory(pathRoute)
    //         arrayPathsDirectory.forEach((element) => {
    //           pullExtension(element) === '.md' ? arrayPaths.push(pathRoute) : console.log('No es un archivo/directorio MD')
    //         })
    //     };
    //     return arrayPaths
    // }
    // export const getRouteDirectory = (pathRoute) => {
    //     let arrayPaths = [];
    //     if (isDirectory(pathRoute)){
    //         const arrayPathsDirectory = readDirectory(pathRoute)
    //         arrayPathsDirectory.forEach((element) => {
    //             const routes = path.join(pathRoute, element)
    //             if(isFile(routes)){
    //                 pullExtension(routes) === '.md' ? arrayPaths.push(routes) : console.log('No es un archivo MD')
    //             } else {
    //                 arrayPaths = arrayPaths.concat(getRouteFileAndDirectory(routes));
    //             }
    //          })
    //     };
    //     return arrayPaths
    // }

