/* =====================================================
   QONKAR ENTERPRIS - JAVASCRIPT
   ===================================================== */

/* ================= MENU ACTIVE ================= */
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

/* ================= SEARCH PRODUK ================= */
function searchProduct() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();

    if (keyword.trim() === "") {
        alert("Masukkan nama produk terlebih dahulu");
        return;
    }

    // arahkan ke halaman produk
    window.location.href = "produk.html?search=" + keyword;
}

/* tekan enter */
document.getElementById("searchInput")?.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        searchProduct();
    }
});

/* ================= SLIDER CLIENT ================= */
let sliderIndex = 0;

function clientSlider() {
    const slider = document.querySelector(".client-slider");
    if (!slider) return;

    sliderIndex++;
    if (sliderIndex > 1) sliderIndex = 0;

    slider.style.transform = `translateX(-${sliderIndex * 100}%)`;
}

setInterval(clientSlider, 3000);

/* ================= WHATSAPP FUNCTION ================= */
function openWhatsApp(pesan) {
    const nomor = "6289509374193";
    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
}

/* ================= STATUS ORDER ================= */
function cekStatusOrder() {
    const transaksi = document.getElementById("transaksi").value;
    const hp = document.getElementById("hp").value;

    if (transaksi === "" || hp === "") {
        alert("Lengkapi data terlebih dahulu");
        return;
    }

    const pesan = `Halo Admin Qonkar Enterpris,%0A
Saya ingin cek status order:%0A
Nomor Transaksi: ${transaksi}%0A
Nomor HP: ${hp}`;

    openWhatsApp(pesan);
}

/* ================= DETAIL PRODUK ================= */
function beliProduk(namaProduk) {
    const pesan = `Halo Admin Qonkar Enterpris,%0A
Saya tertarik dengan produk:%0A
${namaProduk}`;

    openWhatsApp(pesan);
}




/* ================= ANIMATION ON SCROLL ================= */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "fadeIn 0.8s ease forwards";
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(
    ".service-box, .blog-card, .status-box, .siplah-box, .faq-item"
).forEach(el => {
    observer.observe(el);
});

/* ================= AUTO FOCUS STATUS ORDER ================= */
const transaksi = document.getElementById("transaksi");
if (transaksi) transaksi.focus();




/* ================= STATUS ORDER WHATSAPP BARU ================= */
function cekStatusOrderWA() {
    const transaksi = document.getElementById("transaksi").value;
    const hp = document.getElementById("hp").value;

    if (transaksi === "" || hp === "") {
        alert("Mohon lengkapi Nomor Transaksi dan Nomor Handphone");
        return;
    }

    const nomorWA = "6285355525657"; // 085355525657

    const pesan = 
        "Halo Admin Qonkar Enterpris,%0A" +
        "Saya ingin cek status order dengan detail berikut:%0A%0A" +
        "Nomor Transaksi: " + transaksi + "%0A" +
        "Nomor Handphone: " + hp + "%0A%0A" +
        "Terima kasih.";

    window.open(
        "https://wa.me/" + nomorWA + "?text=" + pesan,
        "_blank"
    );
}
