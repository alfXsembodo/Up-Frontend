const fname = "Christian"
const lname = "Ronaldo"
const age  = prompt("Masukkan umur CR : ")

// # cara lama
// const result = fname + ' ' + lname + 'age is ' + age
// alert(result)
 
// # template literals
const result = `${fname} ${lname} age is ${age}`
alert(result)