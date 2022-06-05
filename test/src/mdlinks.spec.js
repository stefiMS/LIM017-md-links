import {mdLinks} from '../../src/mdlinks.js'
import fetch from 'node-fetch';

jest.mock('node-fetch');
const arrayValidateTrue = [
  {
    href: 'https://docs.npmjs.com/cli/install',
    text: 'docs oficiales de `npm install` acá',
    file: 'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\prueba\\carpetaPrueba\\subCarpeta\\file.md',
    status: 200,
    message: 'OK'
  },
  {
    href: 'https://github.com/Laboratoria/course-parser',
    text: '`course-parser`',
    file: 'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\prueba\\carpetaPrueba\\subCarpeta\\file.md',
    status: 200,
    message: 'OK'
  }
]

const arrayValFalse = [
  {
    href: 'https://docs.npmjs.com/cli/install',
    text: 'docs oficiales de `npm install` acá',
    file: 'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\prueba\\carpetaPrueba\\subCarpeta\\file.md'
  },
  {
    href: 'https://github.com/Laboratoria/course-parser',
    text: '`course-parser`',
    file: 'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\prueba\\carpetaPrueba\\subCarpeta\\file.md'
  }
]

describe('mdLinks', () => {
  test('should return an object array (validate:true) with message:OK, status:200 ', () => {
    return mdLinks('prueba\\carpetaPrueba\\subCarpeta', {validate:true})
      .then((res) =>{
        expect(res).toEqual(arrayValidateTrue)
      })
  });
  test('should return an object array (validate:true) with status > 400 ', () => {
    const arrayValMessageFail = [
      {
        href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
        text: 'Funciones — bloques de código reutilizables - MDN',
        file: 'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\prueba\\carpetaPrueba\\file7.md',
        status: 404,
        message: 'FAIL'
      }]
    fetch.mockImplementation(() => Promise.resolve({ message:"fail",status: 404}))
    return mdLinks('prueba\\carpetaPrueba\\file7.md', {validate:true})
      .then((res) =>{
        expect(res).toEqual(arrayValMessageFail)
      })
  });
  test('should return an object array (validate:true) with status = 500 ', () => {
    const resultObjectError = [
      {
        href: "http://community.laboratoria.la/c/js",
        text: "foro de la comunidad",
        file: 'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\prueba\\carpetaPrueba\\file8.md',
        status: 500,
        message: "FAIL",
      },
    ];
    fetch.mockRejectedValue()
    return mdLinks('prueba\\carpetaPrueba\\file8.md', {validate:true})
      .catch((err) =>{
        expect(err).toEqual(resultObjectError)
      })
  });
  test('should return an object array validate:false', () => {
    return mdLinks('prueba\\carpetaPrueba\\subCarpeta', {validate:false})
      .then((res) =>{
        expect(res).toEqual(arrayValFalse)
      })
  })
  test('should return a message there are not links', () =>{
    return mdLinks('prueba\\carpetaPrueba\\file6.md', {validate:true})
      .catch((err) =>{
        expect(err).toBe('The md files have no links')
      })
  })
  test('should return a message there are not files md', () =>{
    return mdLinks('src', {validate:true})
      .catch((err) =>{
        expect(err).toBe('The path entered has no MD files')
      })
  })
  test('should return a message the path is not exist', () =>{
    return mdLinks('srci', {validate:true})
      .catch((err) =>{
        expect(err).toBe('The path entered does not exist')
      })
  })
});
