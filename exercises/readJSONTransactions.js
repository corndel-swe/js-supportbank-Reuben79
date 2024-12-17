import { DiffieHellmanGroup } from 'crypto'
import fs from 'fs/promises'

export async function readJSONTransactions() {
  // Read the Transactions2013.json file
  // Use JSON.parse to convert the string into an array of objects
  // and return it

 //added below-reads file (Fs: file system-readfile)
 
 const path = new URL('../data/Transactions2013.json', import.meta.url)
 const data = await fs.readFile(path)

 console.log(data)

 const dataasJson = JSON.parse(data)

 console.log (dataasJson)

 return dataasJson

}
// Write a function that (exercise 1)
// // - Reads from Example.json
// // - Parses it into JSON
// // - returns the name from the object

// // Write a function that (excercise 2)
// // - Reads from Example.json
// // - Parses it into JSON
// // - returns a string with the name, age and email from the object

function exercise1() { 
  const path = new URL('../data/Example.Json', import.meta.url)
  const data = fs.readFile(path)

  const obj = JSON.parse(data)

  console.log ("hello world")

  return obj.name
}



function exercise2() {
  const path = new URL('../data/Example.Json', import.meta.url)
  const data = fs.readFile(path)

  const obj = JSON.parse(data)


  return `name: ${obj.name}, Age: ${obj.age}, Email: ${obj.email}`
}
  


