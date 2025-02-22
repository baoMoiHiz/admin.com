
document.addEventListener("DOMContentLoaded", function () {
    // Kiểm tra trạng thái đăng nhập
    const daDangNhap = localStorage.getItem("daDangNhap");

    if (daDangNhap === "true") {
        // Nếu đã đăng nhập, hiển thị nội dung chính
        document.getElementById("khuVucChinh").style.display = "block";
    } else {
        // Nếu chưa đăng nhập, chuyển về trang đăng nhập
        window.location.href = "https://baomoihiz.github.io/23072004.com/";
    }

    // Xử lý sự kiện Đăng Xuất
    document.getElementById("nutDangXuat").addEventListener("click", function () {
        localStorage.removeItem("daDangNhap"); // Xóa trạng thái đăng nhập
        window.location.href = "https://baomoihiz.github.io/admin.com/"; // Quay lại trang đăng nhập
    });
});
