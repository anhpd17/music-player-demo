import { registerWithEmailPassword } from "../firebase/authMethods.js";

// Lấy ra nút đăng ký trên HTML
let signupBtn = document.querySelector(".signup-btn");

// Thêm sự kiện click cho nút đăng ký
signupBtn.onclick = handleClickSignup;

// Hàm xử lý sự kiện click đăng ký
async function handleClickSignup() {
    event.preventDefault(); // Ngăn chặn hành động mặc định của nút
    // Validate thông tin đăng ký
    let isValid = validateForm();
    if (isValid == false) {
        return;
    }
    // Lưu tài khoản vào Firebase
    let email = document.querySelector("#signup-email").value;
    let password = document.querySelector("#signup-password").value;
    // Try - catch để bắt lỗi khi đăng ký
    try {
        await registerWithEmailPassword(email, password);
        alert("Đăng ký thành công!");
        switchForm("login"); // Chuyển sang form đăng nhập sau khi đăng ký thành công
    } catch (error) {
        console.log(error);
        alert("Đăng ký không thành công. Vui lòng thử lại sau.");
        return;
    }
}

function validateForm() {
    // Lấy các thông tin người dùng đã nhập
    let fullname = document.querySelector("#signup-name").value;
    let email = document.querySelector("#signup-email").value;
    let password = document.querySelector("#signup-password").value;
    let confirmPassword = document.querySelector("#signup-confirm").value;

    // Kiểm tra để trống
    if (
        fullname == "" ||
        email == "" ||
        password == "" ||
        confirmPassword == ""
    ) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return false; // Thông tin không hợp lệ
    }
    // Kiểm tra định dạng email
    let isContainAt = email.includes("@");
    let isContainDot = email.includes(".");
    if (isContainAt == false || isContainDot == false) {
        alert("Email không hợp lệ!");
        return false; // Thông tin không hợp lệ
    }

    // Kiểm tra mật khẩu (độ dài > 6)
    if (password.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự!");
        return false; // Thông tin không hợp lệ
    }

    // Kiểm tra mật khẩu và xác nhận mật khẩu
    if (password != confirmPassword) {
        alert("Mật khẩu và xác nhận mật khẩu không khớp!");
        return false; // Thông tin không hợp lệ
    }

    return true; // Thông tin hợp lệ
}
