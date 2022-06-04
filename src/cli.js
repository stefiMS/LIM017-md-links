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
============================================ HELP ==========================================
You can enter the following options on the command line:

Option1: mdLinks <path-to-file>
Option2: mdLinks <path-to-file> --validate || --v
Option3: mdLinks <path-to-file> --stats || --s
Option4: mdLinks <path-to-file> (--stats --validate || --validate --stats)

where:
   --validate o --v : shows if the links found in the file work or not
   --stats  o  --s : shows the general statistics (total and Unique) about the links found
   --stats --validate || --validate --stats || --v --s || --s --v :

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
    .catch((e) => console.log(chalk.rgb(255, 56, 20).inverse('ERROR'), chalk.bold.red(e)));
}


    // if(options === '--help' || options === '--h'){
    //   return Promise.resolve(help);
    // }