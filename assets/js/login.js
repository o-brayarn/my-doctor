const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
submit.addEventListener('click', function(e) {
      e.preventDefault();
      alert()
      let obj = {}
      obj.email = email.value;
      obj.password = password.value;
      send(obj);
});
function send(obj) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status == 200) {
                  alert(xhr.responseText);
            }
      }
      xhr.open('POST', 'http://localhost:5000/api/v1/login', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
      xhr.send(JSON.stringify(obj));
      alert()
}