import * as fs from 'fs'
import { joinMapJStoMarkdown } from './core/index.js'

export function jsDocToMarkdown(fileInput: string, fileOutput?: string): void {
    let input: string
    let output: string
    let result: string | null

    input = fileInput.split('.')[0]
    output = fileOutput ? fileOutput.split('.')[0] + '.md' : input + '.md'

    fs.readFile(
        fileInput,
        function (err: NodeJS.ErrnoException | null, content: Buffer) {
            if (err) throw err

            result = content ? joinMapJStoMarkdown(content.toString()) : null

            fs.writeFile(
                output,
                result as string,
                function (err: NodeJS.ErrnoException | null) {
                    if (err) throw err
                    console.log('File created!')
                }
            )
        }
    )
}
