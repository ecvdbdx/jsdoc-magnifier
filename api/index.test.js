// import { describe, it } from 'node:test'
// import assert from 'node:assert/strict'

// const testUrl = 'http://localhost:8000';

// const inputWithComment = `
// /*
// echoString
// @params {string} string
// @function echoString(string)
//  */
// function echoString(string)
// {
//   console.log(string);
// }
// `

// const inputWithMultipleComments = `
// /*
// echoString
// @params {string} string
// @function echoString(string)
//  */
// function echoString(string)
// {
//   console.log(string);
// }
//   /*
//   Second comment
//   */
// `

// const inputWithoutComment = `
// function echoString(string)
// {
//   console.log(string);
// }
// `

// const outputForOneComment = "## echoString\n\n@params {string} string@function echoString(string) "

// const finalOutputForTwoComments =
//     '## echoString\n\n@params {string} string@function echoString(string) ##   Second comment\n\n  '
    
// describe('One comment only', () => {
//     it('should extract one comment', async () => {
//         assert.deepEqual(
//             await fetch(testUrl, { method: "POST", body : inputWithComment}).then(res => res.text()).then(text => text),
//             outputForOneComment
//         )
//     })
// })

// describe('Multiple comments', () => {
//     it('should extract two comment', async () => {
//         assert.deepEqual(
//             await fetch(testUrl, { method: "POST", body : inputWithMultipleComments}).then(res => res.text()).then(text => text),
//             finalOutputForTwoComments
//         )
//     })
// })

// describe('No comment', () => {
//     it('should return nothing', async () => {
//         assert.deepEqual(
//             await fetch(testUrl, { method: "POST", body : inputWithoutComment}).then(res => res.text()).then(text => text),
//             ''
//         )
//     })
// })
