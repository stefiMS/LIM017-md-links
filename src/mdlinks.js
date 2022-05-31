import {routeExists,
  absolutePath,
  convertAbsolutePath,
  readFiles,
  determineFile,
  determineDirectory,
  readDirectory,
  fileExtension,
  getOnlyFilesMD,
  getLinks} from './api.js'
  import { validateLinks } from './validate.js'

  const mdLinks = (path, options) => {
    const allLinks = new Promise((resolve, reject) => {
      // if(routeExists(path)){
        routeExists(path)? resolve(getOnlyFilesMD(path)) :reject('La ruta ingresada no existe')
        // getOnlyFilesMD(path)? resolve(getLinks(path)):
          // if(getOnlyFilesMD(path)){
          //   resolve(getLinks(path))
          // }else{
          //     reject('La ruta no tiene archivos MD')
          // }
        // }else{
        //     reject('La ruta ingresada no existe')
        // }
      if(options.validate===true){
        validateLinks(getLinks(path)).then((res)=>{
            resolve(res)
        })
      }
    })
    return allLinks
  }
 const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/src'

  console.log(mdLinks(route, {validate:true}))
