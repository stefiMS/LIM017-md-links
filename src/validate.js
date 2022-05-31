import fetch from "node-fetch";
// import { getLinks } from "../index.js";


//método 2
const validateLinks = (arrayOb) =>{
  const arrayValidateLinks = arrayOb.map((element) =>
   fetch(element.href)
    .then((res)=>{
      if (res.status >= 200 && res.status <400) {
        element.status = res.status,
        element.message = 'OK'
        return element
      }else if(400<= res.status){
        element.status = res.status,
        element.message = 'FAIL'
        return element
      }
    })
    .catch(()=>{
        element.status = 500,
        element.message = 'FAIL'
        return element

    })
  )
  return Promise.all(arrayValidateLinks)
}

// const route='C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/README.md'
// validateLinks(getLinks((route))).then((res)=>{
//   console.log(res)
// })
export{
  validateLinks}
