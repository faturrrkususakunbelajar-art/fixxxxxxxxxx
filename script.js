function pesanWA(namaProduk) {
    const nomorWA = "6285743473837"; // Format internasional tanpa '+'
    const pesan = `Halo Kedai Digital, saya ingin memesan: ${namaProduk}`;
    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
}
