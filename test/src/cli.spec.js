import {optionsCLI} from '../../src/cli.js';
// import {mdLinks} from '../../src/mdlinks.js'

jest.mock('chalk', () => ({
  magentaBright: jest.fn(() => 'magentaBright'),
  bgYellowBright: jest.fn(() => 'bgYellowBright'),
  yellowBright: jest.fn(() => 'yellowBright'),
  greenBright: jest.fn(() => 'greenBright'),
  bgMagenta: jest.fn(() => 'bgMagenta'),
  bold:{
    yellow: jest.fn(() => 'yellow'),
    magentaBright: jest.fn(() => 'magentaBright'),
    redBright: jest.fn(() => 'redBright'),
    red: jest.fn(() => 'red'),
    bgRed: jest.fn(() => 'bgRed'),
    //colors clioptions
    green: jest.fn(()=> 'green'),
    grey: jest.fn(()=> 'grey'),
  },
  //colors cliOptions
  cyan: jest.fn(() => 'cyan'),
  green: jest.fn(() => 'green'),
  yellow: jest.fn(() => 'yellow'),
  bgRedBright: jest.fn(() => 'bgRedBright'),
}))

const resultErr = `bgRedred`

describe('optionsCLI', () =>{
  it('should show information (href, text, file, status, message) with--validate or --v', () =>{
    const resultValidate = `
            grey cyan
            grey magentaBright
            grey green
            grey yellow
            grey green\n`
    return optionsCLI('prueba/carpetaPrueba/file4.md','--validate')
    .then((res) =>{
      expect(res).toBe(resultValidate)
    })
  })
  it('should show information (href, text, file, status, message: fail-status:500) with--validate or --v', () =>{
    const resultValidate = `
            grey cyan
            grey magentaBright
            grey green
            grey yellow
            grey red\n`
    return optionsCLI('prueba/carpetaPrueba/file8.md','--validate')
    .catch((err) =>{
      expect(err).toBe(resultValidate)
    })
  })
  it('should show information (total, unique) with--stats or --s', ()=>{
    // const optionsS = '--s';
    const resultStats = `
      **********************
        yellow 1
        yellow 1`

      return optionsCLI('prueba/carpetaPrueba/file4.md','--stats')
        .then((res)=>{
          expect(res).toBe(resultStats)
      })
  })
  it('should show information (total, unique, broken) with --stats --validate', ()=>{
    const resultStatsVal = `\n        \n      **********************
       yellow 1
       yellow 1
       bgRedBright 1`

      return optionsCLI('prueba/carpetaPrueba/file8.md','--stats --validate')
        .catch((res)=>{
          expect(res).toBe(resultStatsVal)
      })
  }),
  it('should show information (href, text, file,) with mdLinks(path,{validate:false})', ()=>{
    const resultValFalse = `
          grey cyan
          grey magentaBright
          grey green\n`

      return optionsCLI('prueba/carpetaPrueba/file4.md','')
        .then((res)=>{
          expect(res).toBe(resultValFalse)
      })
  })
  it('should show information help with only mdLinks on the terminal', ()=>{
    const resultHelp = `
yellow
magentaBright

bgYellowBright: mdLinks <path-to-file>
bgYellowBright: mdLinks <path-to-file> --validate || --v
bgYellowBright: mdLinks <path-to-file> --stats || --s
bgYellowBright: mdLinks <path-to-file> --stats --validate || --validate --stats || --v --s || --s --v

magentaBright
yellowBright : greenBright
yellowBright : greenBright
yellowBright : greenBright

**When you enter redBright in the terminal, you will get information about the links
found from md files (href, text, file)**

bgMagenta:
     * If you need help enter the command in the terminal: redBright
     * Sometimes windows does not recognize the direction of the path separators, so it is advisable
     to try if it recognizes the following situations: "/", "\\", "//", "\\\\".`

      return optionsCLI(undefined,'mdLinks')
        .then((res)=>{
          expect(res).toBe(resultHelp)
      })
  })
  it('should show message: The md files have no links ', ()=>{
    //  const resultErr = `bgRed red`
    //  const resultErr =' ERROR  The md files have no links'
      return optionsCLI('prueba/carpetaPrueba/file6.md','--validate')
        .catch((err)=>{
          expect(err).toBe(resultErr)
          // expect(' ERROR ' + ' ' + err).toBe(resultErr)
      })
  })
  it('should show message: The path entered has no MD files ', ()=>{
    //  const resultErr = `bgRed red`
    //  const resultErr2 =' ERROR  The path entered has no MD files'
      return optionsCLI('src','--validate')
        .catch((err)=>{
          expect(err).toBe(resultErr)
          // expect(' ERROR ' + ' ' + err).toBe(resultErr2)
      })
  })
  it('should show message: The path entered does not exist ', ()=>{

    //  const resultErr2 =' ERROR  The path entered does not exist'
      return optionsCLI('prueba/carpetaPrueba/file3.md','--validate')
        .catch((err)=>{
          // expect(' ERROR ' + ' ' + err).toBe(resultErr2)
          expect( err).toBe(resultErr)
      })
  })

})

