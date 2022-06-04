import {routeExists,
  getOnlyFilesMD,
  getLinks} from './api.js'
  import { validateLinks } from './validate.js'

  export  const mdLinks = (path, options) => {
      return new Promise((resolve, reject) => {
        if(routeExists(path)){
          const arrayFile = getOnlyFilesMD(path);
          if(arrayFile.length>0){
              const arrayObj = getLinks(arrayFile)
              if(arrayObj.length>0){
                  if(options.validate){
                    resolve(validateLinks(arrayObj))
                  }else{
                    resolve(arrayObj)
                  }
              } else{
                reject('El archivo md no tiene links')
              }
            }else{
              reject('La ruta no tiene archivos MD')
            }
        }else{
          reject('La ruta ingresada no existe')
        }
       })
    }




//  const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba'
// //  const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/carpetaPrueba/file6.md'
// const route = 'README.md'
//   // mdLinks(route, {validate:false}).then((res)=>{ console.log(res)}).catch((err) => console.log(err))
  // mdLinks(route, {validate:true}).then((res)=>{ console.log(res)}).catch((err) => console.log(err))
