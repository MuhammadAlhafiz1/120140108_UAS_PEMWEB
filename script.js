// Fungsi untuk menetapkan cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Fungsi untuk mendapatkan nilai cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Fungsi untuk menghapus cookie
function deleteCookie(cname) {
    document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// Contoh penggunaan fungsi-fungsi di atas
setCookie('username', 'john_doe', 7); // Menetapkan cookie dengan nama 'username' selama 7 hari
var username = getCookie('username'); // Mendapatkan nilai dari cookie 'username'
deleteCookie('username'); // Menghapus cookie 'username'

// Menyimpan data ke localStorage
localStorage.setItem('key', 'value');

// Mendapatkan data dari localStorage
var storedValue = localStorage.getItem('key');

// Menghapus data dari localStorage
localStorage.removeItem('key');
