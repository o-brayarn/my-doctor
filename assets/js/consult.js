const email = document.getElementById('email');
const address = document.getElementById('address');
const country = document.getElementById('country');
const date = document.getElementById('date');
const issue = document.getElementById('issue');
const submit = document.getElementById('appointment');
const content = document.querySelector('.cc')

function getGender() {
      //check if radio is checked
      if (document.getElementById('male').checked) {
            return 'Male'
      }
      if (document.getElementById('female').checked) {
            return 'Female'
      }
      if (document.getElementById('other').checked) {
            return "Other"
      }
      return 0
}

function interpreter() {
      if (document.getElementById('yes').checked) {
            return 1
      }
      else {
            return 0
      }
}
function checkNull(...args) {
      for (let i = 0; i < args.length; i++) {
            if (args[i] == null || args[i] == '') {
                  return true;
            }
      }
      return false;
}

function compareDate(dateValue) {
      if (dateValue.getTime() > new Date().getTime()) {
            return true
      }
      else {
            return false
      }
}

submit.addEventListener('click', function (e) {
      e.preventDefault();
      if (checkNull(email.value, address.value, country.value, date.value, issue.value)) {
            alert("Please fill all the fields", 0);
            return;
      }
      if (!compareDate(new Date(date.value))) {
            alert("Please enter a valid date");
            return;
      }
      let obj = {
            email: email.value,
            address: address.value,
            country: country.value,
            date: date.value,
            issue: issue.value
      }
      output(obj);


});
function output(obj) {
      let data = `
      <div>
      Your Appointment Is set for ${obj.date}<br>
      <b>Your doctor will be in touch with you shortly</b>`
      content.innerHTML = data;
      display()
}
function display() {
      content.style.display = 'block';
      setTimeout(function () {
            content.style.display = 'none';
      }
            , 3000);
}

