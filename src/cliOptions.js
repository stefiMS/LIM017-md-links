import chalk from "chalk";
// import { mdLinks } from "./mdlinks";

const printStats = (arrayObjLinks) => {
  const totalLinks = arrayObjLinks.length;
  const allLinks = arrayObjLinks.map((element) => element.href);
  const setUniqueLinks = new Set(allLinks);
  // const stats = `Total: ${totalLinks}\nUnique: ${setUniqueLinks.size}`;
  const stats = `
      **********************
        ${chalk.yellow('Total: ')} ${totalLinks}
        ${chalk.yellow('Unique:')} ${setUniqueLinks.size}`;
  return stats;
};

const printStatsandValidate = (arrayObjLinks) => {
  const brokenLinks = arrayObjLinks.filter((elem) => elem.status >= 404);
  // const stats = `${printStats(arrayObjLinks)}\nBroken: ${brokenLinks.length}`
  const stats = `
        ${printStats(arrayObjLinks)}
        ${chalk.bgRedBright('Broken:')} ${brokenLinks.length}`;
        // ${chalk.redBright.inverse('Broken:')} ${brokenLinks.length}
  return stats;
};

const printLinks = (arrayObjLinks) => {
    let objThreeProperty = '';
    if (arrayObjLinks.length > 0) {
      arrayObjLinks.forEach((element) => {
        objThreeProperty += `
          ${chalk.bold.grey('LINK:')} ${chalk.cyan(element.href)}
          ${chalk.bold.grey('TEXT:')} ${chalk.magentaBright(element.text.substring(0, 50))}
          ${chalk.bold.grey('PATH:')} ${chalk.green(element.file)}`;
      });
    } else{
      return 'Not found links on that path';
    }
    return objThreeProperty;
  };

  const printValidate = (arrayObjLinks) => {
    let objFiveProperty = '';
    if (arrayObjLinks.length === 0) {
      objFiveProperty = 'Not found links on that path';
    }
    if (arrayObjLinks.length > 0) {
      arrayObjLinks.forEach((element) => {
        const colors = (element.message === 'ok'||element.message === 'OK'||element.message === 'Ok'||element.message === 'oK') ? chalk.bold.green(element.message) : chalk.bold.red(element.message);
      //  console.log(colors)
        objFiveProperty += `
            ${chalk.bold.grey('LINK:')} ${chalk.cyan(element.href)}
            ${chalk.bold.grey('TEXT:')} ${chalk.magentaBright(element.text.substring(0, 50))}
            ${chalk.bold.grey('PATH:')} ${chalk.green(element.file)}
            ${chalk.bold.grey('STATUS:')} ${chalk.yellow(element.status)}
            ${chalk.bold.grey('STATUS_MESSAGE:')} ${colors}`;
      });
    }
    return objFiveProperty;
  };


  // const path = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/file1.md'
  // mdLinks(path, {validate: validate, stats: stats})
  //     .then(resp => console.log(resp))
  //     .catch(err => console.log(err))


// //ejemplo de ruta
// const route = 'src'

//  const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba'
// const route = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/carpetaPrueba/file4.md'
// const path = 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/file1.md'
// const route = [
//   {
//     href: 'https://docs.npmjs.com/cli/install',
//     text: 'docs oficiales de `npm install` acá',
//     file: 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/file1.md',
//     status: 200,
//     message: "OK",
//   },
//   {
//     href: 'https://github.com/Laboratoria/course-parser',
//     text: '`course-parser`',
//     file: 'C:/Users/vladimir/Desktop/Stefani/LABORATORIA/LIM017-md-links/prueba/file1.md',
//     status: 500,
//     message: "FAIL",
//   }
// ]

// // console.log(printValidate(route))
// console.log(printStatsandValidate(route))
// console.log(printStats(route))
// console.log(printLinks(route))



export {
  printStats,
  printStatsandValidate,
  printLinks,
  printValidate,
}
