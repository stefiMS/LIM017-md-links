import {printStats, printStatsandValidate} from '../../src/cliOptions'
// import chalk from 'chalk'

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
    // const printStatsOutput = `
    //     ${chalk.rgb(252, 91, 96)('Total:')} 3
    //     ${chalk.rgb(252, 91, 96)('Unique:')} 3
    // `;
    const printStatsOutput = `Total: 3\nUnique: 3`;
    expect(printStats(arrayObj)).toEqual(printStatsOutput)
  })
})

describe('printStatsandValidate',()=>{
  it('should show the links stats (total, unique, broken) in md file ',()=>{
    // const printStatsVal = `
    //     ${chalk.rgb(252, 91, 96)('Total:')} 3
    //     ${chalk.rgb(252, 91, 96)('Unique:')} 3
    //     ${chalk.rgb(252, 91, 96)('Broken:')} 2
    // `;
    const printStatsVal = `Total: 3\nUnique: 3\nBroken: 2`;
    expect(printStatsandValidate(arrayObj)).toEqual(printStatsVal)
  })
})
