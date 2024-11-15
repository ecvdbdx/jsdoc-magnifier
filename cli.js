#!/usr/bin/env node

import { Command } from 'commander'
import { jsDocToMarkdown } from "./jsDocToMarkdown.js"
const program = new Command()

program
        .name('jsdoc-magnifier')
        .description('CLI JDDoc magnifier')
        .version('1.0.0')

program
        .argument('<input>', 'Chemin du fichier d\'entrée')
        .option('-o, --output <output>', 'Chemin du fichier de sortie')
        .action((input, options) => {
                let outputFilename = input.toString().replace(".js", ".md")

                if (options.output) {
                        outputFilename = options.output
                }

                jsDocToMarkdown(input, outputFilename)
        });

program.parse()
