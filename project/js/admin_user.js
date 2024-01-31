document.addEventListener('DOMContentLoaded', function() {
    // Gọi hàm hiển thị danh sách users
    displayUserList();
});

function displayUserList() {
    // Lấy dữ liệu từ localStorage (giả sử dữ liệu được lưu dưới key "users")
    var usersData = localStorage.getItem('users');

    // Kiểm tra xem có dữ liệu không
    if (usersData) {
        // Chuyển đổi dữ liệu từ chuỗi JSON sang đối tượng JavaScript
        var users = JSON.parse(usersData);

        // Hiển thị danh sách người dùng trên trang
        var userListElement = document.getElementById('userList');

        // Xóa nội dung cũ trong tbody#userList (nếu có)
        userListElement.innerHTML = '';

        // Duyệt qua danh sách người dùng và thêm vào bảng
        users.forEach(function(user) {
            var row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <!-- Các cột khác nếu có -->
                <td>
                    <button onclick="editUser(${user.id})">Sửa</button>
                    <button onclick="deleteUser(${user.id})">Xóa</button>
                </td>
            `;
            userListElement.appendChild(row);
        });
    }
}

function editUser(userId) {
    // Xử lý logic sửa người dùng
    // (Có thể mở một form sửa người dùng, hiển thị thông tin người dùng trong các trường input, v.v.)
}

function deleteUser(userId) {
    // Xử lý logic xóa người dùng
    // (Có thể xác nhận trước khi xóa, cập nhật localStorage sau khi xóa, v.v.)
}
