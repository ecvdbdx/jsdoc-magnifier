import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { extractAllComments, mapJStoMarkdown } from './index.js'

const inputWithComment = `
/*
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


const outputForOneComment = [`
@params {string} string
@function echoString(string)\n `]

const outputForMultipleComments = [
  '\n@params {string} string\n@function echoString(string)\n ',
  '\n  Second comment\n  '
]

const outputMarkdownForOneComment = [
  '## Commentaires\n',
  '\n',
  '\n@params {string} string\n@function echoString(string)\n '
]

describe("extractAllComments", () => {
  it("should extract one comment", () => {
    assert.deepEqual(extractAllComments(inputWithComment), outputForOneComment)
  })

  it("should extract two comments", () => {
    assert.deepEqual(extractAllComments(inputWithMultipleComments), outputForMultipleComments)
  })

  it("should return an empty array if no comment", () => {
    assert.deepEqual(extractAllComments(inputWithoutComment), [])
  })
})

describe("mapJStoMarkdown", () => {
  it("should display comment", () => {
    assert.deepEqual(mapJStoMarkdown(outputForOneComment), outputMarkdownForOneComment)
  })
})