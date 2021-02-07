/*
cara menggunakan else if
*/
const age = 18;

/*
Tambahkan statement "else if" 
dengan kondisi untuk jika "age" lebih besar atau sama dengan 10
Dan jika kondisinya  benar, cetak 
*/
/* Ketika umur diatas 10 tahun tetapi kurang dari 18 tahun, cetak:
"Saya berusia dibawah 18 tahun, namun diatas 9 tahun" */
if (age >= 18) {
  console.log("Saya di atas 18 tahun");
} else if (age >= 10) {
  console.log("Saya berusia di bawah 18 tahun, namun di atas 9 tahun");
} else {
  console.log("saya dibawah 10 tahun");
}
