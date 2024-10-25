/** @params {string}input */
export function detectComment(input) {
  if (!input.includes("/*")) {
    return false;
  }
  return true;
}

export function extractComment(input) {
  const startPattern = /\/\*/gm;
  const endPattern = /\*\//gm;
  const start = input.search(startPattern);
  const end = input.search(endPattern);
  return `\n` + input.slice(start + 2, end).trim() + `\n`;
}

/**
 * @pattern {regex} match JSDoc comments
 */
export function extractAllComments(input) {
  const pattern = /\/\*[\s\S]*?\*\//g;
  return (
    input
      .match(pattern)
      ?.map((item) => item.replaceAll("/*", "").replaceAll("*/", "")) || []
  );
}

export function mapJStoMarkdown(input) {
  const result = input.map((comment) => {
    const splittedComment = comment.split("\n");
    const title = splittedComment.splice(1, 1)[0];
    return [`## ${title}\n`, "\n", ...splittedComment];
  });
  return result;
}

export function joinMapJStoMarkdown(input) {
  const comments = extractAllComments(input);
  const processedComments = mapJStoMarkdown(comments).flat();
  return processedComments.join("");
}
