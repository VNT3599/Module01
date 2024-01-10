document.addEventListener('DOMContentLoaded', function () {
    let textarea = document.getElementById('output');
    let keys = document.querySelectorAll('.key');

    keys.forEach(function (key) {
        key.addEventListener('click', function () {
            if (key.textContent === ' ') {
                textarea.value += ' ';
            } else {
                textarea.value += key.textContent;
            }
        });
    });
});
