import fs from "fs"
import { mapJStoMarkdown } from "./index.js"

// fs.open("input.js", "w", function (err, file) {
//   if (err) throw err
//   console.log("Saved!")
// })

// fs.writeFile("input.js", "Hello content!", function (err) {
//   if (err) throw err
//   console.log("Saved!")
// })

fs.readFile("input.js", function (err, content) {
  if (err) throw err

  if (content) {
    const array = new Array(content.toString())
    console.log(array)
    const test = mapJStoMarkdown(array)
    console.log(test)
  }
})
