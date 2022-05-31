import fetch from 'node-fetch';
import {validateLinks} from '../../src/validate.js';

jest.mock('node-fetch');
// console.log(fetch);

//Test  de función validate
describe('validateLinks  is a function', () => {
  test("status: 200 - message: 'OK'", () => {
    const recieveObject = [
      {
        file: "C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\README.md",
        href: "https://developer.mozilla.org/es/docs/Web/HTTP/Overview",
        text: "Generalidades del protocolo HTTP - MDN",
      },
    ];
    const resultObject = [
      {
        file: "C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\README.md",
        href: "https://developer.mozilla.org/es/docs/Web/HTTP/Overview",
        text: "Generalidades del protocolo HTTP - MDN",
        status: 200,
        message: 'OK'
      },
    ];
    return  validateLinks(recieveObject)
    .then((result) => {
      expect(result).toEqual(resultObject);
    })
  });
  test("status: 404 - message: 'FAIL'", () => {
    const recieveObjectFail = [
      {
        href: "https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions",
        text: "Funciones — bloques de código reutilizables - MDN",
        file: "C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\README.md",
      },
    ];
    const resultObjectFail = [
      {
        href: "https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions",
        text: "Funciones — bloques de código reutilizables - MDN",
        file: "C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\README.md",
        status: 404,
        message: 'FAIL'
      },
    ];
    // fetch.mockImplementation(() => Promise.resolve({ message:"fail",status: 404}))
    fetch.mockImplementation(() =>{
    return  validateLinks(recieveObjectFail)
    .then((result) => {
      expect(result).toEqual(resultObjectFail);
      expect(result).toEqual(resultObject);
    })})
  });
  test("status: 500 - message: 'FAIL'", () => {
    const recieveObjectError = [
      {
        href: "http://community.laboratoria.la/c/js",
        text: "foro de la comunidad",
        file: "C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\README.md",
      },
    ];
    const resultObjectError = [
      {
        href: "http://community.laboratoria.la/c/js",
        text: "foro de la comunidad",
        file: "C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\README.md",
        status: 500,
        message: "FAIL",
      },
    ];
    fetch.mockRejectedValue("Mensaje de error")
    return  validateLinks(recieveObjectError)
    .catch((result) => {
      expect(result).toEqual(resultObjectError);
    })
  });
})

 // jest.fn().mockImplementation(() => Promise.reject(value));
    // mock.mockReturnValue(validateLinks(recieveObjectFail))
    // mock()
