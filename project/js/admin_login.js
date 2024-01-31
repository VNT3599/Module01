// lắng nghe sự kiện DOMContentLoaded trên đối tượng document.
document.addEventListener('DOMContentLoaded', function() {
    // Lắng nghe sự kiện submit của form đăng nhập
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn form submit làm mới (reload)

        // Lấy giá trị từ input
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // kiểm tra đăng nhập
        if (username === 'admin' && password === 'admin') {
            window.location.href = 'admin_dashboard.html';
        } else {
            alert('Đăng nhập thất bại. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.');
        }
    });
});
