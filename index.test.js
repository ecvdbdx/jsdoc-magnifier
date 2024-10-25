import { describe, it } from "node:test"
import assert from "node:assert/strict"
import {
  extractAllComments,
  mapJStoMarkdown,
  joinMapJStoMarkdown,
} from "./index.js"

const inputWithComment = `
/*
echoString
@params {string} string
@function echoString(string)
 */
function echoString(string)
{
  console.log(string);
}
`

const inputWithMultipleComments = `
/*
echoString
@params {string} string
@function echoString(string)
 */
function echoString(string)
{
  console.log(string);
}
  /*
  Second comment
  */
`

const inputWithoutComment = `
function echoString(string)
{
  console.log(string);
}
`

const outputForOneComment = [
  `
echoString
@params {string} string
@function echoString(string)\n `,
]

const outputForMultipleComments = [
  "\nechoString\n@params {string} string\n@function echoString(string)\n ",
  "\n  Second comment\n  ",
]

const arrayMdOutputForOneComment = [
  [
    "## echoString\n",
    "\n",
    "",
    "@params {string} string",
    "@function echoString(string)",
    " ",
  ],
]

const finalOutputForTwoComments =
  "## echoString\n\n@params {string} string@function echoString(string) ##   Second comment\n\n  "

describe("extractAllComments", () => {
  it("should extract one comment", () => {
    assert.deepEqual(extractAllComments(inputWithComment), outputForOneComment)
  })

  it("should extract two comments", () => {
    assert.deepEqual(
      extractAllComments(inputWithMultipleComments),
      outputForMultipleComments
    )
  })

  it("should return an empty array if no comment", () => {
    assert.deepEqual(extractAllComments(inputWithoutComment), [])
  })
})

describe("mapJStoMarkdown", () => {
  it("should display comment", () => {
    assert.deepEqual(
      mapJStoMarkdown(outputForOneComment),
      arrayMdOutputForOneComment
    )
  })
})

describe("joinMapJStoMarkdown", () => {
  it("should return an array of joined comments", () => {
    assert.deepEqual(
      joinMapJStoMarkdown(inputWithMultipleComments),
      finalOutputForTwoComments
    )
  })
})
