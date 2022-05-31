import {routeExists,
  getOnlyFilesMD,
  getLinks} from './api.js'
  import { validateLinks } from './validate.js'

  // const mdLinks = (path, options) => {
  //   const allLinks = new Promise((resolve, reject) => {
  //     // if(routeExists(path)){
  //       routeExists(path)? resolve(getOnlyFilesMD(path)) :reject('La ruta ingresada no existe')
  //       // getOnlyFilesMD(path)? resolve(getLinks(path)):
  //         // if(getOnlyFilesMD(path)){
  //         //   resolve(getLinks(path))
  //         // }else{
  //         //     reject('La ruta no tiene archivos MD')
  //         // }
  //       // }else{
  //       //     reject('La ruta ingresada no existe')
  //       // }
  //     if(options.validate===true){
  //       validateLinks(getLinks(path)).then((res)=>{
  //           resolve(res)
  //       })
  //     }
  //   })
  //   return allLinks
  // }

  const mdLinks = (path, options) => {
      const allLinks = new Promise((resolve, reject) => {
        if(routeExists(path)){
          const arrayFile = getOnlyFilesMD(path);
          if(arrayFile.length){
              if(options.validate){
                resolve(validateLinks(getLinks(arrayFile)))
              }else{
                resolve(getLinks(arrayFile))
              }
            }else{
              reject(new Error('La ruta no tiene archivos MD'))
            }
        }else{
          reject(new Error('La ruta no existe'))
        }
      })
      return allLinks
  }


 const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba'

  mdLinks(route, {validate:true}).then((res)=>{ console.log(res)}).catch((err) => console.log(err))
