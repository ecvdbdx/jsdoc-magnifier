import fs from "fs"
import { joinMapJStoMarkdown } from "./index.js"

export function jsDocToMarkdown(fileInput, fileOutput) {
        let input
        let output
        let result

        input = fileInput.split(".")[0]
        output = fileOutput ? fileOutput.split(".")[0] + ".md" : input + ".md"

        fs.readFile(fileInput, function (err, content) {
                if (err) throw err

                result = content ? joinMapJStoMarkdown(content.toString()) : null

                fs.writeFile(output, result, function (err) {
                        if (err) throw err
                        console.log("File created!")
                })
        })
}
