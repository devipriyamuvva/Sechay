function displayLogoutButton() {
    var logoutButton = document.getElementById('logoutButton');
    if (isLoggedIn()) {
        logoutButton.style.display = 'block';
    } else {
        logoutButton.style.display = 'none';
    }
}
function isLoggedIn() {
    return sessionStorage.getItem('userSession') === 'active';
}
function logout() {
    sessionStorage.removeItem('userSession');
    window.location.href = 'http://127.0.0.1:5500/Login/login.html';
}