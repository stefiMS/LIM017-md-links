#!/usr/bin/env node
// import argv from 'node:process'
import chalk from "chalk";
import { mdLinks } from "./mdlinks.js";
import {  printStats,
  printStatsandValidate,
  printLinks,
  printValidate,} from "./cliOptions.js"

// capturo argumentos de la línea de comandos
const [,, ...args] = process.argv;
// const args = process.argv;

const pathCLI = args[0];
const input = [];
for (let i = 1; i < args.length; i ++) {
  input.push(args[i]);
}

const newInput = input.join(' ');

const help = `
${chalk.bold.yellow('================================================= HELP ===============================================')}
${chalk.magentaBright('You can enter the following options on the command line:')}

${chalk.bgYellowBright(' Option1 ')}: mdLinks <path-to-file>
${chalk.bgYellowBright(' Option2 ')}: mdLinks <path-to-file> --validate || --v
${chalk.bgYellowBright(' Option3 ')}: mdLinks <path-to-file> --stats || --s
${chalk.bgYellowBright(' Option4 ')}: mdLinks <path-to-file> --stats --validate || --validate --stats || --v --s || --s --v

${chalk.bold.magentaBright('where:')}
${chalk.yellowBright('--validate o --v')} : ${chalk.greenBright('shows if the links found in the file work or not')}
${chalk.yellowBright('--stats  o  --s')} : ${chalk.greenBright('shows the general statistics (total and Unique) about the links found')}
${chalk.yellowBright('--stats --validate || --validate --stats || --v --s || --s --v')} : ${chalk.greenBright('show the statistics (total, unique)\n about the status of the links found and the total number of broken links.')}

**When you enter ${chalk.bold.redBright('mdLinks <path-to-file>')} in the terminal, you will get information about the links\nfound from md files (href, text, file)**

${chalk.bgMagenta(' Note ')}:
     * If you need help enter the command in the terminal: ${chalk.bold.redBright('mdLinks')}
     * Sometimes windows does not recognize the direction of the path separators, so it is advisable\n     to try if it recognizes the following situations: "/", "\\", "//", "\\\\".`;


const optionsCLI = (path, options) => {
  if (options.length > 0) {
    if (options === '--validate'|| options ==='--v') {
      return mdLinks(path, { validate: true })
        .then((links) => printValidate(links))
    }
    else if (options === '--stats'|| options === '--s') {
      return mdLinks(path, { validate: true })
        .then((links) => printStats(links))
    }
    else if (options === '--stats --validate' || options === '--validate --stats' || options === '--v --s' || options === '--s --v') {
      return mdLinks(path, { validate: true })
        .then((links) => printStatsandValidate(links))
    }
    return Promise.resolve(help);
  }
  return mdLinks(path, { validate: false })
    .then((links) => printLinks(links))
};

  if (pathCLI=== undefined) {
   console.log(help);
  } else {
     optionsCLI(pathCLI, newInput)
      .then((response) => console.log(response))
      // .catch((e) => console.log(chalk.bold.bgRed(' ERROR '), chalk.bold.red(e)))
      .catch((e) => console.log(e));
  }

export { optionsCLI}

    // // console.log(cliOptions('prueba\\carpetaPrueba\\file4.md','--v'))
    // optionsCLI('prueba/carpetaPrueba/file6.md','--validate')
    // .then((res)=>console.log(res))
    // .catch((err) => console.log(chalk.bold.bgRed(' ERROR ') + chalk.bold.red(err)))
