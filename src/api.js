import {routeExists,
  absolutePath,
  convertAbsolute,} from '../index.js'

 const mdLinks = (path, options) => {
    if(!path){
      console.log('No existe el Path')
    }
    else{
      absolutePath(path);
      console.log('existe la ruta)')
    }
  }
