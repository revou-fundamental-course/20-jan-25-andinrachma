function calculateBmi() {
    // Ambil nilai input
    let berat = parseFloat(document.getElementById("input-berat-badan").value);
    let tinggi = parseFloat(document.getElementById("input-tinggi-badan").value) / 100; // Konversi cm ke meter

    // Validasi input
    if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <= 0) {
        alert("Silakan masukkan berat dan tinggi yang valid!");
        return;
    }

    // Hitung BMI
    let bmi = (berat / (tinggi * tinggi)).toFixed(2);

    // Tentukan kategori BMI
    let kategori = "";
    if (bmi < 18.5) {
        kategori = "Berat Badan Kurang ";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        kategori = "Berat Badan Ideal ";
    } else if (bmi >= 25 && bmi < 29.9) {
        kategori = "Kelebihan Berat Badan";
    } else {
        kategori = "Obesitas ";
    }

    // Tampilkan hasil
    let resultContainer = document.getElementById("hasil-bmi-container");
    let resultText = document.getElementById("result-bmi");
    let categoryText = document.getElementById("category");

    resultText.textContent = `BMI Anda: ${bmi}`;
    categoryText.textContent = kategori;

    // Scroll ke hasil dengan animasi smooth
    resultContainer.scrollIntoView({ behavior: "smooth", block: "center" });

    // Tambahkan efek highlight untuk beberapa detik
    resultContainer.style.transition = "background 0.5s ease-in-out";
    resultContainer.style.background = "#FFDAB9"; // Warna highlight

    setTimeout(() => {
        resultContainer.style.background = ""; // Kembali ke warna asli
    }, 1500);
}
