const btnLogun = document.querySelector(".login-signInButton");
const inputUserLogin = document.querySelector(".input-login-email");
const inputPasswordLogin = document.querySelector(".input-login-password")



btnLogun.addEventListener("click", function (e) {
    e.preventDefault();
    if (inputUserLogin.value === "" || inputPasswordLogin.value === "") {
      alert("Vui lòng không để trống ");
        
    }else{
        const userLocal = JSON.parse(localStorage.getItem("users"));
        let check = false;
        for (let i = 0; i < userLocal.length; i++) {
            if (userLocal[i].userEmail == inputUserLogin.value && userLocal[i].password == inputPasswordLogin.value) {
            check = true;
               
            } else {
                check = false;
            }
            
        }
        if (check) {
            alert("Đăng nhập thành công");
            window.location.href = "Homepage.html"
            
        }else{
            alert("Email hoặc mật khẩu không chính xác");
        }
    }
});