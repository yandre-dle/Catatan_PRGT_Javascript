/*
melanjutkan dengan statement "switch" dari latihan sebelumnya.
Kali ini, tambahkan "default" ketika nilai "rank" tidak cocok dengan kasus apa pun.
*/
const rank = 5;

switch (rank) {
  case 1:
    console.log("Anda meraih medali emas!");
    break;
  case 2:
    console.log("Anda meraih medali perak!");
    break;
  case 3:
    console.log("Anda meraih medali perunggu!");
    break;
  // Tambahkan default
  default:
    console.log("Semoga sukses dikesempatan berikutnya");
    /*
     Jangan lupa untuk mengakhiri kasus dengan break
    */
    break;
}
