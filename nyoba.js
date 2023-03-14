// // function tambah  (){
// //   //deklarasi
// //     var hasil = 0;
// //     for ( i = 0; i < arguments.length; i++){
// //     hasil += arguments[i]; 
// //     }
// //   return hasil;
// // }

// // var coba = tambah (3,5,10,5,80);
// // console.log(coba);
// // 
// var hasil ;
// function tambah (a,b){
//     hasil = a + b ;
//     console.log(`nilai pertama adalah ${a}`);
//     console.log(`nilai kedua adalah ${b}`);
//     return hasil;
// }
// var a = parseInt(prompt("masukan nilai pertama"));
// var b = parseInt(prompt("masukan nilai kedua"));
// var hasil = tambah(a,b);
// console.log(hasil);
// var tampilAngka = function (nama){
//     alert ("halo "+nama);
    
    
// }
// tampilAngka("dapa");

// let arr = ["saya","anda","omaewa"];
// arr.push("anata")
// console.log(arr.join(" - "));
// arr.pop()
// arr.slice(1,2);
// console.log(arr);

// var a = [1,2,3,4,,"a","b","c","d"];

// var penumpang = [];
// var tambahPenumpang function (namaPenumpang, penumpang){
//     penumpang = namaPenumpang;
//     return penunmpang;
// }

//metod filter 
//method filter ()berfungsi untuk menyaring data di array 
//parameter yang harua diberikan pada method filter() sama seperti metod forEach()

// const angka = [1,2,3,4,5,6,7,8,9];
// const filterArr = angka.filter((item) => {
//     return item & 2 == 1;
// });

// console.log(filterArr);

// const users = [{

//     nama : 'pajri',
//     gender : 'male',
//     umur : 16,
// },{

//     nama : 'dapa',
//     gender : 'male',
//     umur : 16,
// },{

//     nama : 'dimas',
//     gender : 'male',
//     umur : 17,
// },{

//     nama : 'prima',
//     gender : 'male',
//     umur : 100,
// }];

// const usersFilter = users.filter ((users) => users.umur === 17);
// console.log(usersFilter);

// const mobil = [{

//     namaBrand : 'tesla',
//     bahanBakar : 'listrik',
//     jenisMobil : 'mobil listrik',
// },{

//     namaBrand : 'hyundai',
//     bahanBakar : 'listrik',
//     jenisMobil : 'mobil listrik',
// },{

//     namaBrand : 'ferrari',
//     bahanBakar : 'bensin',
//     jenisMobil : 'sports car',
// },{

//     namaBrand : 'lamborghini',
//     bahanBakar : 'bensin',
//     jenisMobil : 'sports car',
// }];
// var pertanyaan = prompt("masukan jens bahan bakar (listrik dan bensin)");


// if(pertanyaan.toUpperCase() == "listrik" || "bensin"){
// const filterMobil = mobil.filter ((mobil) => mobil.bahanBakar == pertanyaan );
// console.log(filterMobil)
// }else{
//     console.log("tidak valid")
// }


//method include
 //metod ini befungsi unutk mengecek apakah sebuah data ada di dallam array atau tidak biasanya digunakan unutk melakukan pencarian untuk memastikan data sudah ada didalam array



// let buah = ["padi","nanas","semangka","pisang"];
// let isThereaBuah = buah.includes("padi");
// console.log(isThereaBuah);


// //method sort 
// //method sort() berfungsi untuk mengurutkan data pada array.



// var sortAngka = [1,6,7,5,8,4,9,2,4];
// var sortAlpabet = ["a","j","d","k","t","v","l","b","n"];
// console.log(sortAngka.sort());
// console.log(sortAlpabet.sort());


var operator = prompt("masukan jenis operator (+ x - / )");
if(operator == "+"){
    var angka1 = parseInt(prompt("masukan angka pertama"));
    var angka2 = parseInt(prompt("masukan angka kedua"));
    var hasil = angka1 + angka2;
    console.log("hasil tambah dari angka 1 dan angka 2 adalah " + hasil)
    console.log("angka pertama adalah " + angka1);
    console.log("angka kedua adalah " + angka2);
}else if (operator == "x"){
    var angka1 = parseInt(prompt("masukan angka pertama"));
    var angka2 = parseInt(prompt("masukan angka kedua"));
    var hasil = angka1 * angka2;
    console.log("hasil perkalian dari angka 1 dan angka 2 adalah " + hasil)
    console.log("angka pertama adalah " + angka1);
    console.log("angka kedua adalah " + angka2);
}else if (operator == "/"){
    var angka1 = parseInt(prompt("masukan angka pertama"));
    var angka2 = parseInt(prompt("masukan angka kedua"));
    var hasil = angka1 / angka2;
    console.log("hasil pembagian dari angka 1 dan angka 2 adalah " + hasil)
    console.log("angka pertama adalah " + angka1);
    console.log("angka kedua adalah " + angka2);
}else if (operator == "-"){
    var angka1 = parseInt(prompt("masukan angka pertama"));
    var angka2 = parseInt(prompt("masukan angka kedua"));
    var hasil = angka1 - angka2;
    console.log("hasil pengurangan dari angka 1 dan angka 2 adalah " + hasil)
    console.log("angka pertama adalah " + angka1);
    console.log("angka kedua adalah " + angka2);
}else{
    console.log("tidak valid")
}




















