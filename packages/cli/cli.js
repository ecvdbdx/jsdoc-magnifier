#!/usr/bin/env node

import { Command } from 'commander'
<<<<<<<< HEAD:packages/cli.ts
import { jsDocToMarkdown } from './filesystem'
========
import { jsDocToMarkdown } from './filesystem.js'
>>>>>>>> 9e44316 (est ce que c'est le bazard ?):packages/cli/cli.js
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
