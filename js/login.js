
// login modal

document.addEventListener('DOMContentLoaded', function() {
    // Function to show the modal when the button is clicked
    document.querySelector('.header__navbar-login').addEventListener('click', function() {
        // Hiển thị modal
        document.querySelector('.modal').style.display = 'flex';

        // Chuyển thẻ có class .auth-form--signup thành display: block
        document.querySelector('.auth-form--login').style.display = 'block';
    });

    // Function to hide the modal when clicking outside of it
    document.querySelector('.modal__overlay').addEventListener('click', function() {
        // Ẩn modal
        document.querySelector('.modal').style.display = 'none';
        
        // Ẩn thẻ có class .auth-form--signup khi modal bị ẩn
        document.querySelector('.auth-form--login').style.display = 'none';
    });
});

//sign up modal
document.addEventListener('DOMContentLoaded', function() {
    // Function to show the modal when the button is clicked
    document.querySelector('.header__navbar-signup').addEventListener('click', function() {
        // Hiển thị modal
        document.querySelector('.modal').style.display = 'flex';

        // Chuyển thẻ có class .auth-form--signup thành display: block
        document.querySelector('.auth-form--signup').style.display = 'block';
    });

    // Function to hide the modal when clicking outside of it
    document.querySelector('.modal__overlay').addEventListener('click', function() {
        // Ẩn modal
        document.querySelector('.modal').style.display = 'none';
        
        // Ẩn thẻ có class .auth-form--signup khi modal bị ẩn
        document.querySelector('.auth-form--signup').style.display = 'none';
    });
});