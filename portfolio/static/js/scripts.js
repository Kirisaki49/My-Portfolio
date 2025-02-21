// Ambil elemen wrapper kartu
const wrapper = document.querySelector('.wrapper');

// Ambil semua section
const sections = document.querySelectorAll('section');

// Inisialisasi IntersectionObserver
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Jika section sedang terlihat, tambahkan kelas "scrolled"
            if (entry.target.id === "home") { // Ganti dengan ID section yang sesuai
                wrapper.classList.add('scrolled');
            }
        } else {
            // Jika section tidak terlihat, hapus kelas "scrolled"
            if (entry.target.id === "home") {
                wrapper.classList.remove('scrolled');
            }
        }
    });
}, { threshold: 0.5 }); // Threshold 50% untuk mendeteksi section yang masuk viewport

// Mendaftarkan observer untuk setiap section
sections.forEach(section => {
    observer.observe(section);
});

// Ambil elemen content
const content = document.querySelector('.content');

// Inisialisasi IntersectionObserver untuk animasi content
const contentObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Tambahkan kelas scrolled saat content terlihat
            content.classList.add('scrolled');
        } else {
            // Hapus kelas scrolled saat content tidak terlihat (opsional)
            content.classList.remove('scrolled');
        }
    });
}, { threshold: 0.5 }); // 50% dari content terlihat

// Observasi elemen content
contentObserver.observe(content);

function typeText(element, text, speed) {
    let i = 0;
    function typingEffect() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typingEffect, speed);
        }
    }


    typingEffect();
}

// Memilih elemen dengan kelas "nama"
const namaElement = document.querySelector('.nama');

// Menjalankan efek mengetik (opsional untuk teks dinamis)
if (namaElement) {
    namaElement.textContent = ''; // Kosongkan teks awal
    typeText(namaElement, 'Saya Mhd. Abdul Habib Ali', 100); // Sesuaikan teks dan kecepatan (ms)
}
