/** @params {string}input */
export function detectComment(input){
  if(!input.includes('/*')){
    return false;
  }
  return true;
}

export function extractComment(input){
  const startPattern = /\/\*/gm
  const endPattern = /\*\//gm
  const start = input.search(startPattern)
  const end = input.search(endPattern)
  return `\n` + input.slice(start + 2, end).trim() + `\n`
}

/**
 * @pattern {regex} match JSDoc comments
 */
export function extractAllComments(input) {
  const pattern = /\/\*[\s\S]*?\*\//g;
  return input.match(pattern)?.map(item => item.replaceAll("/*", "").replaceAll("*/", "")) || [];
}

/**
 * Nom de ma fonction
 * 
 * @param {sss}
 * @dzdz 
 */