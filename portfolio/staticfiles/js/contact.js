const form = document.getElementById("contact-form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> 
    Email: ${email.value}<br> 
    Phone Number/WA: ${phone.value}<br> 
    Message: ${mess.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "thecockroach49@gmail.com",
        Password: "60E374F34BEBF184A00B75BA6419D0CEC653",
        To: 'thecockroach49@gmail.com',
        From: "thecockroach49@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Thank You!",
                    text: "Message Sent Successfully!",
                    icon: "success"
                });
                form.reset(); // Reset formulir setelah email terkirim
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to send message. Please try again.",
                    icon: "error"
                });
            }
        }
    ).catch(error => {
        console.error("Email Error:", error);
        Swal.fire({
            title: "Error!",
            text: "An unexpected error occurred.",
            icon: "error"
        });
    });
}


function checkInputs() {
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        if (item.value.trim() === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        } else {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        }

        // Periksa email dengan benar
        if (item.id === "email") {
            checkEmail();
            item.addEventListener("keyup", checkEmail);
        }

        // Tambahkan event listener untuk input lainnya
        item.addEventListener("keyup", () => {
            if (item.value.trim() !== "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    });
}


function checkEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!errorTxtEmail) return; // Pastikan elemen ditemukan sebelum digunakan

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");
        errorTxtEmail.innerText = email.value.trim() !== "" ? "Enter a valid email address" : "Email Address Can't be blank";
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    // Pastikan tidak ada error sebelum mengirim email
    const isValid = [...document.querySelectorAll(".item")].every(item => !item.classList.contains("error"));

    if (isValid) {
        sendEmail();
    }
});
