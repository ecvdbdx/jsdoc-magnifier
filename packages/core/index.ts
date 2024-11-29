/** @params {string}input */
export function detectComment(input: string): boolean {
    if (!input.includes('/*')) {
        return false
    }
    return true
}

export function extractComment(input: string): string {
    const startPattern: RegExp = /\/\*/gm
    const endPattern: RegExp = /\*\//gm
    const start: number = input.search(startPattern)
    const end: number = input.search(endPattern)
    return `\n` + input.slice(start + 2, end).trim() + `\n`
}

/**
 * @pattern {regex} match JSDoc comments
 */
export function extractAllComments(input: string): string[] {
    const pattern: RegExp = /\/\*[\s\S]*?\*\//g
    return (
        input
            .match(pattern)
            ?.map((item: string) =>
                item.replaceAll('/*', '').replaceAll('*/', '')
            ) || []
    )
}

export function mapJStoMarkdown(input: string): string[] {
    const result: string[][] = input.split('\n').map((comment: string) => {
        const splittedComment: string[] = comment.split('\n')
        const title: string = splittedComment.splice(1, 1)[0]
        return [`## ${title}\n`, '\n', ...splittedComment]
    })
    return result.flat()
}

export function joinMapJStoMarkdown(input: string): string {
    const comments: string[] = extractAllComments(input)
    const processedComments: string[] = mapJStoMarkdown(
        comments.join('\n')
    ).flat()
    return processedComments.join('')
}
