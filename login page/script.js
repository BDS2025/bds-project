const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");

registerBtn.addEventListener("click", () -> {
    container.classlist.add("active");
})

loginBtn.addEventListener("click", () -> {
    container.classlist.remove("active");
})
