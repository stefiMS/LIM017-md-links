import { routeExists,
  absolutePath,
  convertAbsolute,} from '../index.js';

const testRoute = 'C:\Users\vladimir\Desktop\Stefani\LABORATORIA\LIM017-md-links\prueba\prueba.md';

describe('routeExists', () =>{
  it('should to show existence the entered route',()=>{
    expect(typeof routeExists(testRoute)).toBe('boolean');
  })
})

describe('absolutePath',() =>{
  it('should to be an absolute path', ()=>{
    expect(typeof absolutePath(testRoute)).toBe('boolean');
  })
})
