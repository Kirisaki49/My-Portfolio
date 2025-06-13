document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".experience-box");
  
    boxes.forEach((box) => {
      box.addEventListener("click", function () {
        // tutup semua box
        boxes.forEach((b) => b.classList.remove("active"));
  
        // buka box yang diklik
        this.classList.add("active");
      });
    });
  });
  