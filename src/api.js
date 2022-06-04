import * as fs from "fs";
import * as path from "path";




const routeExists = (routePath) => fs.existsSync(routePath);
const absolutePath = (routePath) => path.isAbsolute(routePath);
const convertAbsolutePath = (routePath) => (absolutePath(routePath) ? routePath : path.resolve(routePath));
const readFiles = (routePath) =>  fs.readFileSync(routePath, 'utf-8');
const determineFile = (routePath) => fs.statSync(routePath).isFile();
const readDirectory = (routePath) => fs.readdirSync(routePath);
const fileExtension = (routePath) => path.extname(routePath)

//Obtención de array de files md
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

// Obtención de  array de objetos desde un array de archivos md.
const getLinks = (fileArr) =>{
    let arrayLinkObject =[];
    fileArr.forEach((file) => {
      const readFileLinks = readFiles(file);
      const regExpLinks = /\[([^\[]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/gm
      const matches = readFileLinks.match(regExpLinks);
      if(matches!==null){
        const rexExpSingle =/\[([^\[]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/
        matches.forEach((link) => {
          const match = rexExpSingle.exec(link)
          arrayLinkObject.push({
            href: match[2],
            text: match[1].substring(0, 50),
            file,
          })
        })
      }
  })
  return arrayLinkObject
}


// fetch('https://docs.npmjs.com/cli/install')
// // .then(promesafetch => promesafetch.json())
// .then(contenido => console.log(contenido))






// //ejemplo de ruta
// // const route = 'src'
// const route =[
//   'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/file1.md',
//   'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/carpetaPrueba/file4.md'
// ]
//  const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba'
// const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/carpetaPrueba/file4.md'
// const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/file1.md'
// const route = [
//   {
//     href: 'https://docs.npmjs.com/cli/install',
//     text: 'docs oficiales de `npm install` acá',
//     file: 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/file1.md'
//   },
//   {
//     href: 'https://github.com/Laboratoria/course-parser',
//     text: '`course-parser`',
//     file: 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/file1.md'
//   }
// ]
// const route = 'C:\Users\vladimir\Desktop\Stefani\LABORATORIA\LIM017-md-links\README.md'
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
// console.log(getOnlyFilesMD)
// console.log(validateLinks(route))
// console.log(process.argv)
// console.log(validateLinks(route))

// const route='C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/README.md'
// validateLinks(getLinks(route)).then((res)=>{
//   console.log(res)
// })


export {routeExists,
        absolutePath,
        convertAbsolutePath,
        readFiles,
        determineFile,
        readDirectory,
        fileExtension,
        getOnlyFilesMD,
        getLinks }
