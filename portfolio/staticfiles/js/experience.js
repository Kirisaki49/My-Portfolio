// experience.js
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.experience-card');
    
    cards.forEach(card => {
        // Efek hover tambahan
        card.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'scale(1)';
        });
        
        // Klik untuk menampilkan detail
        card.addEventListener('click', function(e) {
            // Cegah bubbling jika mengklik child elements
            if (e.target.classList.contains('close-btn')) return;
            
            const detailsId = this.getAttribute('data-details');
            const detailsPopup = document.getElementById(detailsId);
            
            // Buat close button jika belum ada
            if (!detailsPopup.querySelector('.close-btn')) {
                const closeBtn = document.createElement('span');
                closeBtn.className = 'close-btn';
                closeBtn.innerHTML = '&times;';
                closeBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    detailsPopup.classList.remove('active');
                });
                detailsPopup.prepend(closeBtn);
            }
            
            // Toggle popup
            detailsPopup.classList.toggle('active');
            
            // Tutup popup lainnya yang mungkin terbuka
            document.querySelectorAll('.detail-popup').forEach(popup => {
                if (popup !== detailsPopup) {
                    popup.classList.remove('active');
                }
            });
        });
    });
    
    // Tutup popup ketika klik di luar
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.experience-card')) {
            document.querySelectorAll('.detail-popup').forEach(popup => {
                popup.classList.remove('active');
            });
        }
    });
});