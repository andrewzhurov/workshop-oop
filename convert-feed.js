//#!/usr/bin/env node --experimental-modules
const parse = require('./index.js');
const fs = require('fs');
/**
 * Module dependencies.
 */

var program = require('commander');

program
    .version('1.0.0')
    //.usage('[options] <file ...>')
    //.option('--out', 'output format')
    .parse(process.argv);

// must be before .parse() since
// node's emit() is immediate

//program.on('--help', function(){
//    console.log('  Examples:');
//    console.log('');
//    console.log('    $ custom-help --help');
//    console.log('    $ custom-help -h');
//    console.log('');
//});

const pathToFile = program.args[0];
console.log("PATH:" + pathToFile);
console.log(`Out is: ${fs.readFile(pathToFile)}`);
