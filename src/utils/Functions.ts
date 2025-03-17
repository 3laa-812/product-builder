/**
 * 
 * @param {string} text - the input text to be sliced
 * @param {number} {maxLen = 50} - the maximum length of the sliced text
 * @returns - the sliced text
 */

export function texrSlicer (text: string, maxLen: number = 100) {
    if(text.length >= maxLen) {
        return text.slice(0, maxLen) + '...';
    return text;
    }
};