import * as fs from "fs";
import * as path from "path";
// import fetch from "node-fetch";


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

// //Obtención links
const getLinks = (file) =>{
    let arrayLinkObject =[]
    const readFileLinks = readFiles(file);
    // const regExpLinks = /\[([^\[]+)\](\(.*\))/gm;
    const regExpLinks = /\[([^\[]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/gm

    const matches = readFileLinks.match(regExpLinks);
    if(matches!==null){
      // const rexExpSingle =/\[([^\[]+)\](\(.*\))/;
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
  return arrayLinkObject
}

const validateLinks = (arrayOb) =>{
  // let arrayValidateLinks =[];
  // return arrayValidateLinks;
  const arrayValidateLinks = arrayOb.map( element => {
    // return Promise.all( arrayOb.map( (element) => {
    // console.log('hola1')
     fetch(element.href)
    .then((res)=>{
      if (res.status >= 200 && res.status <= 399) {
        // console.log('hola3')
        element.status = res.status,
        element.message = ' OK '
        return element
      }else if(400<res.status){
        // console.log('hola4')
        element.status = response.status,
        element.message = ' FAIL '
        return element
      }
    })
    // .catch((error)=>{
    //   console.log('no está validado')
    // })
    console.log('hola5')
  })
    // )
  // console.log(arrayValidateLinks)
  // return arrayValidateLinks
}

// const checkStatus = response => {
// 	if (response.ok) {
// 		// response.status >= 200 && response.status < 300
// 		return response;
// 	} else {
// 		throw new HTTPResponseError(response);
// 	}
// }

// fetch('https://docs.npmjs.com/cli/install')
// // .then(promesafetch => promesafetch.json())
// .then(contenido => console.log(contenido))






// //ejemplo de ruta
// const route = 'src'
// const route='C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/README.md'
//  const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba'
// const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/carpetaPrueba/file4.md'
// const route = 'C:\Users\vladimir\Desktop\Stefani\LABORATORIA\LIM017-md-links\prueba\file1.md'
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
// console.log(getOnlyFilesMD(getLinks(route)))
// console.log(validateLinks(route))
// console.log(process.argv)
// console.log(validateLinks(route))
export {routeExists,
        absolutePath,
        convertAbsolutePath,
        readFiles,
        determineFile,
        determineDirectory,
        readDirectory,
        fileExtension,
        getOnlyFilesMD,
        getLinks,
        validateLinks }
