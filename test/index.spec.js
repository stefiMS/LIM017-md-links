import { routeExists,
  absolutePath,
  convertAbsolutePath,
  readFiles,
determineFile,
directoryNavigator} from '../index.js';

const testRouteAbs = 'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\prueba\\prueba.md';
const routeRelative = 'prueba/prueba.md';
const fileRoute = 'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\prueba'
const arrayFile = ['carpetaPrueba', 'file1.md', 'file2.html', 'file3.js', 'prueba.md'];
// const routestest = 'C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\prueba\\file1.md'

describe('routeExists', () =>{
  it('should show existence the entered route',()=>{
    expect(typeof routeExists(testRouteAbs)).toBe('boolean');
  })
})

describe('absolutePath',() =>{
  it('should be an absolute path', ()=>{
    expect(typeof absolutePath(testRouteAbs)).toBe('boolean');
  })
})

describe('convertAbsolutePath',() =>{
  it('should be an absolute path', ()=>{
    expect(convertAbsolutePath(testRouteAbs)).toBe(testRouteAbs);
  })
  it('should convert a relative path to an absolute path', ()=>{
    expect(convertAbsolutePath(routeRelative)).toBe(testRouteAbs);
  })
})

describe('readFiles',() =>{
  it('should  read content of the file', ()=>{
    expect(readFiles(routeRelative)).toEqual('hola');
  })
})
describe('determineFile',() =>{
  it('should be a file', ()=>{
    expect(typeof determineFile(testRouteAbs)).toBe('boolean');
  })
})
describe('directoryNavigator',()=>{
  // it('should return an array',()=>{
  //   expect(typeof directoryNavigator(arrayFile)).toBe('array')
  // })
  it('should show the content of a directory',() =>{
    expect(directoryNavigator(fileRoute)).toEqual(arrayFile)
  })

})
