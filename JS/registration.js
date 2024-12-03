const btnRegister = document.querySelector(".signup-signInButton");
 const inputUserRegister = document.querySelector(".input-signup-email")
 const inputPasswordRegister = document.querySelector(".input-signup-password")

 const userLocal = JSON.parse(localStorage.getItem("users")) || [];
btnRegister.addEventListener("click", function (e) {
    e.preventDefault();
if (inputUserRegister.value === "" || inputPasswordRegister.value === "") {
    alert("Không được để trống");
}else{
    const user= {
    userEmail : inputUserRegister.value,
    password: inputPasswordRegister.value,
    
    };
    const updateUser = [...userLocal, user];
    
    localStorage.setItem("users", JSON.stringify(updateUser));
    alert("Đăng ký thành công");
    window.location.href = "login.html";
}
    
})