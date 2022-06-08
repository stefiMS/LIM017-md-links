import {printStats, printStatsandValidate, printLinks,
  printValidate} from '../../src/cliOptions'
// import chalk from 'chalk'

jest.mock('chalk', () => ({
  //  grey: jest.fn(() => 'grey' ),
   cyan: jest.fn(() => 'cyan'),
   magentaBright: jest.fn(() => 'magentaBright'),
   green: jest.fn(() => 'green'),
   yellow: jest.fn(() => 'yellow'),
   bgRedBright: jest.fn(() => 'bgRedBright'),
  //  inverse: {
  //   redBright:jest.fn(() =>'redBright'),
  //  },
   bold:{
      green: jest.fn(()=> 'green'),
      red: jest.fn(()=> 'red'),
      grey: jest.fn(()=> 'grey'),
   }
  })
)


const arrayObj = [
  {
    href: "https://developer.mozilla.org/es/docs/Web/HTTP/Overview",
    text: "Generalidades del protocolo HTTP - MDN",
    file: "C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\README.md",
    status: 200,
    message: 'OK'
  },
  {
    href: "https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions",
    text: "Funciones — bloques de código reutilizables - MDN",
    file: "C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\README.md",
    status: 404,
    message: 'FAIL'
  },
  {
    href: "http://community.laboratoria.la/c/js",
    text: "foro de la comunidad",
    file: "C:\\Users\\vladimir\\Desktop\\Stefani\\LABORATORIA\\LIM017-md-links\\README.md",
    status: 500,
    message: "FAIL",
  },
];

describe('printStats',()=>{
  it('should show the links stats (total, unique) in md file',()=>{
    const printStatsOutput = `
      **********************
        yellow 3
        yellow 3`;
    // const printStatsOutput = `
    //     **********************
    //     ${chalk.yellow('Total: ')} 3
    //     ${chalk.yellow('Unique:')} 3`;
    // const printStatsOutput = `Total: 3\nUnique: 3`;
    expect(printStats(arrayObj)).toBe(printStatsOutput)
  })
})

describe('printStatsandValidate',()=>{
  it('should show the links stats (total, unique, broken) in md file ',()=>{
    const printStatsVal =`\n        \n      **********************
        yellow 3
        yellow 3
        bgRedBright 2`;

    // const printStatsVal = `
    //   **********************
//     //     yellow 3\n        yellow 3\n        bgRedBright 2`;

//     // const printStatsVal = `Total: 3\nUnique: 3\nBroken: 2`;
    expect(printStatsandValidate(arrayObj)).toBe(printStatsVal)
  })
})

describe('printLinks', () => {
  it('should print the information about links (href, text, file)', () =>{
    const resultPrintLinks = `
          grey cyan
          grey magentaBright
          grey green\n
          grey cyan
          grey magentaBright
          grey green\n
          grey cyan
          grey magentaBright
          grey green\n`
    expect(printLinks(arrayObj)).toBe(resultPrintLinks)
 })
  it('Should message when the array is empty ',() =>{
    expect(printLinks([])).toBe('Not found links on that path')
 })
})

describe('printValidate', ()=>{
  it('should print the information validated (href, text, file, status, message)', ()=>{
    const resultPrintValidate =`
            grey cyan
            grey magentaBright
            grey green
            grey yellow
            grey green\n
            grey cyan
            grey magentaBright
            grey green
            grey yellow
            grey red\n
            grey cyan
            grey magentaBright
            grey green
            grey yellow
            grey red\n`
    expect(printValidate(arrayObj)).toBe(resultPrintValidate)
  })
  it('Should message when the array is empty ',() =>{
    expect(printValidate([])).toBe('Not found links on that path')
  })
})
