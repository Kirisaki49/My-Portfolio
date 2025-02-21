const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (event) => {
        event.stopPropagation(); // Mencegah event bubbling

        // Tutup dropdown lain sebelum membuka yang diklik
        dropdowns.forEach(d => {
            if (d !== dropdown) {
                d.classList.remove('active');
            }
        });

        // Toggle dropdown yang diklik
        dropdown.classList.toggle('active');
    });
});

// Tutup semua dropdown jika klik di luar
document.addEventListener('click', () => {
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
    });
});
