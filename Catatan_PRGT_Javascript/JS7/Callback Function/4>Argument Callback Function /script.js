const call = (callback) => {
  callback("Ninja Ken", 14);
};

// Tambahkan sebuah function yang menerima dua argument didalam argument call
call(() => {
  console.log(`${name} berusia ${age} tahun.`);
});

