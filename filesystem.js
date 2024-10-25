import fs from "fs"
import { joinMapJStoMarkdown } from "./index.js"

fs.readFile("playground/input.js", function (err, content) {
  if (err) throw err

  if (content) {
    const test = joinMapJStoMarkdown(content.toString())
    console.log(test)
    createFile(test)
  }
})

function createFile(jsToMarkdown) {
  fs.writeFile("playground/output.md", jsToMarkdown, function (err) {
    if (err) throw err
    console.log("File created!")
  })
}
