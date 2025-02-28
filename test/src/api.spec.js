import { routeExists,
  absolutePath,
  convertAbsolutePath,
  readFiles,
determineFile,
readDirectory,
fileExtension,
getOnlyFilesMD,
getLinks} from '../../src/api.js';


const routeAbsolute = 'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\prueba\\prueba.md';
const routeRelative = 'prueba/prueba.md';
const fileRoute = 'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\prueba'
const arrayFile = ['carpetaPrueba', 'file1.md', 'file2.html', 'file3.js', 'prueba.md'];
const arrayAbs = [
  'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\prueba\\carpetaPrueba\\file4.md',
  'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\prueba\\carpetaPrueba\\file6.md',
  'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\prueba\\carpetaPrueba\\file7.md',
  'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\prueba\\carpetaPrueba\\file8.md',
  'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\prueba\\carpetaPrueba\\subCarpeta\\file.md',
  'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\prueba\\file1.md',
  'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\prueba\\prueba.md'
]
// const isntFileMd = 'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\src\\api.js';

//test routeExists function
describe('routeExists', () =>{
  it('should show existence the entered route',()=>{
    expect(typeof routeExists(routeAbsolute)).toBe('boolean');
  })
})

//test absolutePath function
describe('absolutePath',() =>{
  it('should be an absolute path', ()=>{
    expect(typeof absolutePath(routeAbsolute)).toBe('boolean');
  })
})

//test convertAbsolutePath function
describe('convertAbsolutePath',() =>{
  it('should be an absolute path', ()=>{
    expect(convertAbsolutePath(routeAbsolute)).toBe(routeAbsolute);
  })
  it('should convert a relative path to an absolute path', ()=>{
    expect(convertAbsolutePath(routeRelative)).toBe(routeAbsolute);
  })
})

//test readfiles function
describe('readFiles',() =>{
  it('should  read content of the file', ()=>{
    expect(readFiles(routeRelative)).toBe('hola');
  })
})

//test determineFile function
describe('determineFile',() =>{
  it('should be a file', ()=>{
    expect(typeof determineFile(routeAbsolute)).toBe('boolean');
  })
})

//test readDirectory function
describe('readDirectory',()=>{
  it('should show the content of a directory',() =>{
    expect(readDirectory(fileRoute)).toEqual(arrayFile)
  })
})

describe('fileExtension',() =>{
  it('should show the extension file', ()=>{
    expect(fileExtension(routeAbsolute)).toBe('.md');
  })
})

//Función getOnlyFilesMD (obtener array de files MD)
describe('getOnlyFilesMD', ()=>{
  it('should return an empty array',()=>{
    const isntFileMd = 'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\src\\api.js';
    expect(getOnlyFilesMD(isntFileMd)).toEqual([]);
  })
  it('should return array with files md ',()=>{
    expect(getOnlyFilesMD(fileRoute)).toEqual(arrayAbs)
  })
})

//Función getLinks (Array de objetos)
describe('getLinks', ()=>{
  it('should return an empty array',()=>{
    const arrNotLinks = ['C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\prueba\\carpetaPrueba\\file6.md']
    expect(getLinks(arrNotLinks)).toEqual([]);
  })
  it('should return array with links http ',()=>{

    const routeFileMd = ['C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/file1.md',
    'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/carpetaPrueba/file4.md']
    const arrayObj = [
      {
        href: 'https://docs.npmjs.com/cli/install',
        text: 'docs oficiales de `npm install` acá',
        file: 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/file1.md'
      },
      {
        href: 'https://github.com/Laboratoria/course-parser',
        text: '`course-parser`',
        file: 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/file1.md'
      },
      {
        href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
        text: 'recurso',
        file: 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/carpetaPrueba/file4.md'
      }
    ]
    expect(getLinks(routeFileMd)).toEqual(arrayObj)
  })
})

