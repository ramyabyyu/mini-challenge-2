const totalPembayaran = (namaVoucher, totalBelanja) => {
  let discount;
  let totalBayar;
  let potongan;

  let output = {
    namaVoucher: "",
    totalBelanja: 0,
    discount: "",
    potongan: 0,
    totalBayar: 0,
  };

  // voucher = DumbWMerchBerkah, min belanja 50k, disc 25%, max disc 20k
  if (namaVoucher === "DumbWMerchBerkah" && totalBelanja >= 50000) {
    discount = 25;
    potongan = (discount / 100) * totalBelanja;
    if (potongan > 20000) {
      totalBayar = totalBelanja - 20000;
      output = {
        namaVoucher,
        totalBelanja,
        discount: "25%",
        potongan: 20000,
        totalBayar,
      };
      return output;
    } else {
      output = {
        namaVoucher,
        totalBelanja,
        discount: "25%",
        potongan,
        totalBayar: totalBelanja - potongan,
      };
      return output;
    }
  } else if (namaVoucher === "DumbMerchMurahBanget" && totalBelanja >= 70000) {
    // voucher = DumbMerchMurahBanget, min belanja 70k, disc 50%, max disc 45k
    discount = 50;
    potongan = (discount / 100) * totalBelanja;
    if (potongan > 45000) {
      totalBayar = totalBelanja - 45000;
      output = {
        namaVoucher,
        totalBelanja,
        discount: "50%",
        potongan: 45000,
        totalBayar,
      };
      return output;
    } else {
      output = {
        namaVoucher,
        totalBelanja,
        discount: "50%",
        potongan,
        totalBayar: totalBelanja - potongan,
      };
      return output;
    }
  } else {
    totalBayar = totalBelanja;
    return totalBayar;
  }
};

console.log(totalPembayaran("DumbMerchMurahBanget", 120000));
