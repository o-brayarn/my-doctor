
const submitLogin = document.getElementById('submit-login');

const errorVal = document.querySelector(".error");
errorVal.innerHTML = "";
function errorDisplay(message, status) {
      errorVal.innerHTML = "";
      alert(message);
      let div = document.createElement('div');
      div.style.display = 'block';
      div.innerHTML = message;
      if (status == 0) {
            div.innerHTML = `<i class="fa-solid fa-exclamation"></i>`
            div.style.color = 'red';
            div.style.border = '2px solid red';
      }
      else {
            div.style.color = 'green';
            div.style.border = '2px solid green';
      }
      div.innerHTML += message;
      errorVal.appendChild(div);
      errorVal.style.opacity = '1';
      setTimeout(function () {
            errorVal.innerHTML = "";
            errorVal.style.opacity = '0';
      }, 3000);
}



function send(obj, url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                  if (xhr.responseText == 'success') {
                        errorDisplay("Success", 1);
                        localStorage.setItem('token', "1111");
                        localStorage.setItem('login', "true");
                        window.location.assign('../../consultation.html');
                  }
                  else {
                        errorDisplay(xhr.responseText, 0);
                  }
                  return;
            }
      }
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(obj));
      console.log();
}

function checkNull(...args) {
      for (let i = 0; i < args.length; i++) {
            if (args[i] == null || args[i] == '') {
                  return true;
            }
      }
      return false;
}



submitLogin.addEventListener('click', function (e) {
      alert()
      e.preventDefault();
      let email = document.getElementById('email');
      let password = document.getElementById('password');
      if (checkNull(email, password)) {
            errorDisplay('All fields are required', 0);
            return
      }
      let obj = {}
      obj.email = email.value;
      obj.password = password.value;
      send(obj, "http://127.0.0.1:5000/api/v1/login", "");
      email.value = '';
      password.value = '';
      confirm.value = '';

}
);

