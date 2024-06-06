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
    window.location.href = './login.html';
}
