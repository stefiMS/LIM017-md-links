import chalk from "chalk";

const printStats = (arrayObjLinks) => {
  const totalLinks = arrayObjLinks.length;
  const allLinks = arrayObjLinks.map((element) => element.href);
  const setUniqueLinks = new Set(allLinks);
  const stats = `
        ${chalk.rgb(252, 91, 96)('Total:')} ${totalLinks}
        ${chalk.rgb(252, 91, 96)('Unique:')} ${setUniqueLinks.size}
    `;
  return stats;
};

const printStatsandValidate = (arrayObjLinks) => {
  const brokenLinks = arrayObjLinks.filter((elem) => elem.status >= 404);
  const stats = `
        ${printStats(arrayObjLinks)}
        ${chalk.rgb(252, 91, 96).inverse('Broken:')} ${brokenLinks.length}`;
  return stats;
};

// //ejemplo de ruta
// const route = 'src'

//  const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba'
// const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/carpetaPrueba/file4.md'
// const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/file1.md'
const route = [
  {
    href: 'https://docs.npmjs.com/cli/install',
    text: 'docs oficiales de `npm install` acá',
    file: 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/file1.md',
    status: 200,
    message: "ok",
  },
  {
    href: 'https://github.com/Laboratoria/course-parser',
    text: '`course-parser`',
    file: 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/file1.md',
    status: 500,
    message: "FAIL",
  }
]

// console.log(printValidate(route))
// console.log(printStatsandValidate(route))
// console.log(printStats(route))
// console.log(printLinks(route))





export{
  printStats,
  printStatsandValidate
}
