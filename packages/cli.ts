#!/usr/bin/env node

import { Command } from 'commander'
import { jsDocToMarkdown } from './filesystem'
const program = new Command()

program
    .name('jsdoc-magnifier')
    .description('CLI JDDoc magnifier')
    .version('1.0.0')

program
    .argument('<input>', "Chemin du fichier d'entrée")
    .option('-o, --output <output>', 'Chemin du fichier de sortie')
    .action((input, options) => {
        let outputFilename

        if (options.output) {
            outputFilename = options.output
        }

        jsDocToMarkdown(input, outputFilename)
    })

program.parse()
