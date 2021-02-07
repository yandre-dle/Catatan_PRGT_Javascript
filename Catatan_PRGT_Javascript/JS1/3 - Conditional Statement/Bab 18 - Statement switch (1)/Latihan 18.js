/*
 statement "switch"
 constant "rank" digunakan sebagai nilai kondisional. 
*/

/*
Selesaikan statement switch 
dengan menambahkan "case" ketika nilai "rank" adalah 2 dan 3.
*/

/*
Tambahkan "case" ketika nilai "rank" adalah "2".
Untuk kasus ini, print pesan "Anda meraih medali perak!"
*/
const rank = 3;

switch (rank) {
  case 1:
    console.log("Anda meraih medali emas!");
    /*
    jangan lupa untuk mengakhiri kasus dengan menambahkan break.
    */
    break;

  // Tambahkan case ketika rank adalah 2
  case 2:
    console.log("Anda meraih medali perak!");
    /*
    Jangan lupa untuk mengakhiri kasus dengan menambahkan break.
    */
    break;
  
    /*
    Tambahkan case ketika nilai rank adalah 3
    Untuk kasus ini, print pesan "Anda meraih medali perunggu!"
    */
  // Tambahkan case ketika rank adalah 3
  case 3:
    console.log("Anda meraih medali perunggu!");
    /*
    Jangan lupa untuk mengakhiri kasus dengan menambahkan break.
    */
    break;
}
