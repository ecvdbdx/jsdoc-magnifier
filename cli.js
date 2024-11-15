 
import { Command } from 'commander'
const program = new Command()

program
  .name('jsdoc-magnifier')
  .description('CLI JDDoc magnifier')
  .version('1.0.0')

program
  .argument('<input>', 'Chemin du fichier d\'entrée')
  .option('-o, --output <output>', 'Chemin du fichier de sortie')
  .action((input, options) => {
    console.log(input)
    if (options.output) {
      console.log(options.output)
    } else {
      console.log('rien')
    }
  });

program.parse()
