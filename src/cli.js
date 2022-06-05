#!/usr/bin/env node
// import argv from 'node:process'
import chalk from "chalk";
import { mdLinks } from "./mdlinks.js";
import {  printStats,
  printStatsandValidate,
  printLinks,
  printValidate,} from "./cliOptions.js"
import { convertAbsolutePath } from "./api.js";
// capturo argumentos de la línea de comandos
const [,, ...args] = process.argv;
// const args = process.argv;

// console.log(`holiss ${args}`)
const pathCLI = args[0];
const input = [];
for (let i = 1; i < args.length; i ++) {
  input.push(args[i]);
}

const newInput = input.join(' ');

const help = `
${chalk.yellow.bold('================================================= HELP ===============================================')}
${chalk.magentaBright('You can enter the following options on the command line:')}

${chalk.bgYellowBright(' Option1 ')}: mdLinks <path-to-file>
${chalk.bgYellowBright(' Option2 ')}: mdLinks <path-to-file> --validate || --v
${chalk.bgYellowBright(' Option3 ')}: mdLinks <path-to-file> --stats || --s
${chalk.bgYellowBright(' Option4 ')}: mdLinks <path-to-file> --stats --validate || --validate --stats || --v --s || --s --v

${chalk.magentaBright.bold('where:')}
${chalk.yellowBright('--validate o --v')} : ${chalk.greenBright('shows if the links found in the file work or not')}
${chalk.yellowBright('--stats  o  --s')} : ${chalk.greenBright('shows the general statistics (total and Unique) about the links found')}
${chalk.yellowBright('--stats --validate || --validate --stats || --v --s || --s --v')} : ${chalk.greenBright('show the statistics (total, unique)\n about the status of the links found and the total number of broken links.')}

**When you enter ${chalk.redBright.bold('mdLinks <path-to-file>')} in the terminal, you will get information about the links\nfound from md files (href, text, file)**

${chalk.bgMagenta(' Note ')}:
     * If you need help enter the command in the terminal: ${chalk.redBright.bold('mdLinks')}
     * Sometimes windows does not recognize the direction of the path separators, so it is advisable\n     to try if it recognizes the following situations: "/", "\\", "//", "\\\\".
   `;


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
    .catch((e) => console.log(chalk.red.inverse('ERROR'), chalk.bold.red(e)));
}


    // if(options === '--help' || options === '--h'){
    //   return Promise.resolve(help);
    // }
