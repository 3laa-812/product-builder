/**
 * Slices the input text to a maximum length.
 * @param {string} text - The input text to be sliced.
 * @param {number} [maxLen=100] - The maximum length of the sliced text.
 * @returns {string} - The sliced text.
 */
export function textSlicer(text: string, maxLen: number = 100): string {
    if (text.length >= maxLen) {
        return text.slice(0, maxLen) + '...';
    }
    return text;
}
