import {routeExists,
  getOnlyFilesMD,
  getLinks} from './api.js'
  import { validateLinks } from './validate.js'
import chalk from 'chalk'

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
                // reject('The md files have no links')
                reject(chalk.bold.bgRed(' ERROR: ') + chalk.bold.red(' The md files have no links'))
              }
            }else{
              // reject('The path entered has no MD files')
              reject(chalk.bold.bgRed(' ERROR: ') + chalk.bold.red(' The path entered has no MD files'))
            }
        }else{
          reject(chalk.bold.bgRed(' ERROR: ') + chalk.bold.red(' The path entered does not exist'))
        }
       })
    }




//  const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba'
// //  const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/carpetaPrueba/file6.md'
// const route = 'README.md'
//   // mdLinks(route, {validate:false}).then((res)=>{ console.log(res)}).catch((err) => console.log(err))
  // mdLinks(route, {validate:true}).then((res)=>{ console.log(res)}).catch((err) => console.log(err))
