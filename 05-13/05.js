// length
// includes
// replace
// concat
// substring
// toUppercase
// toLowercase
// charAt
// indexOf

/**
 * Exercise 10
 * console.log the file extension from a filename
 * 
 * const filename = 'sy.stem.ini'
 */
 const filename = 'sy.stem.jpeg'

 console.log('the . is at position', filename.lastIndexOf('.'))

 const position = filename.lastIndexOf('.')

 console.log('the extension is', filename.substring(position + 1))