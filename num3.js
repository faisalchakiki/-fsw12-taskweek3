function validasiValue(nilaiAwal, nilaiAkhir, dataArr) {
  let result = [];
  if (dataArr.length < 5) {
    console.log("Jumlah angka dari data array harus lebih dari 5");
    return false;
  }

  if (nilaiAwal < nilaiAkhir) {
    dataArr.filter((v) => {
      if (v > nilaiAwal && v < nilaiAkhir) {
        result.push(v);
      }
    });
    if (result.length == 0) {
      console.log("Nilai tidak ditemukan");
      return false;
    }
  }

  if (nilaiAwal < nilaiAkhir) {
    console.log(result);
  } else {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  }
}

validasiValue(5, 20, [2, 21, 4, 18, 12, 13]); // [18 ,12 ,13]
validasiValue(25, 20, [2, 21, 4, 18, 12, 13]); // Nilai akhir harus lebih besar dari nilai awal
validasiValue(5, 20, [2, 21, 24, 218, 212, 213]); // Nilai tidak ditemukan
validasiValue(5, 20, [2, 21, 4]); // Jumlah angka dari data array harus lebih dari 5
