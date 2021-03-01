/**
Takes in text and the maximum characters to show before replacing 
the rest with an ellipsis...

Returns the max number of characters followed by an ellipsis
 * @param {string} text - Text to be truncated
 * @param {number} max - Default: 10 - Number of characters to show in truncated text
 */
export default (text, max=10) => {
  return text.length < max ? text : text.substr(0,max) + '...'
}