const loginBtn = document.querySelector('#login');

loginBtn.addEventListener('click', function (e) {
      if (localStorage.getItem('token') == null) {
            window.location.assign('signup.html');
      }
      else {
            if (localStorage.getItem('login') == 'true') {
                  window.location.assign('consult.html');
            }
            else {
                  window.location.assign('login.html');
            }
      }
});