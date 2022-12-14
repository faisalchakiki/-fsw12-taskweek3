// Built in Function

// 1. toLowerCase() = Mereturn string yang sudah dikonversi ke huruf kecil
let greet= "Hello World"
let toLower = greet.toLowerCase();
console.log(toLower);  //hello world

// 2. toUpperCase() = Mereturn string yang sudah dikonversi ke huruf besar
let toUpper = greet.toUpperCase();
console.log(toUpper); // HELLO WORLD

// 3. sort() = Mereturn nilai array yg sudah diurutkan
let arr = [1,3,4,5,8,6,9,2,7]
arr.sort();
console.log(arr) //[1,2,3,4,5,6,7,8,9]

// 4. join() = Mereturn array menjadi sebuah string yang sudah diconcate / digabungkan
// memberikan value untuk menggabungkan array didalam join 
let testJoin = arr.join("-")
console.log(testJoin) //[1-2-3-4-5-6-7-8-9]

// 5. filter() = menyaring nilai array untuk membuat array baru sesuai kondisi yang ditentukan
//membuat fungsi didalam method yg mereturn nilai
let testFilter = arr.filter(r => r > 5)  
console.log(testFilter) //[6, 7, 8, 9]

// 6. map() = method untuk memanggil array baru dengan hasil dari return fungsi
//membuat fungsi didalam method yg mereturn nilai
let testMap = arr.map(m => m + 5)
console.log(testMap) //[6,7,8,9,10,11,12,13,14]

// 7. pop() = menghapus element terakhir dari array
let arr2= [20 ,30 ,40 ,"budi"];
arr2.pop()
console.log(arr2)//[20,30,40]

// 8. push() = menambahkan satu atau lebih element setelah element terakhir pada array
arr2.push(50);
console.log(arr2)//[20,30,40,50]

// 9.unshift() = menambahkan satu atau lebih element di awal nilai array
arr2.unshift(10);
console.log(arr2)//[10,20,30,40,50]

// 10. search() = method string yang menjalankan proses pencarian yang cocok dan akan mengembalikan sebuah index Expresion-nya jika tidak ia akan mengembalikan -1
const text = "lorem ipsum"
if(text.search("lorem") > -1){
    console.log("success")
}



