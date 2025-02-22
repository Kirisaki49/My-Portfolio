document.addEventListener("DOMContentLoaded", function () {
    let boxes = document.querySelectorAll(".box");

    // Fungsi untuk memperbesar box saat diklik
    boxes.forEach(box => {
        box.addEventListener("click", function (event) {
            // Reset semua box sebelum memperbesar yang diklik
            boxes.forEach(b => b.classList.remove("expanded"));
            this.classList.add("expanded");
            
            // Hentikan event agar tidak langsung tertutup saat box diklik
            event.stopPropagation();
        });
    });

    // Fungsi untuk mengecilkan box saat klik di luar area box
    document.addEventListener("click", function (event) {
        let isBoxClicked = event.target.closest(".box"); 
        if (!isBoxClicked) {
            boxes.forEach(b => b.classList.remove("expanded"));
        }
    });
});
