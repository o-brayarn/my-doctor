function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

const virtual = document.getElementById('virtual')
  virtual.addEventListener('click',function(){
    document.getElementById('virtualjs').style.display="block";
    document.getElementById('interpreterjs').style.display="none";
})

const interpreter = document.getElementById('interpreter')
  interpreter.addEventListener('click',function(){
    document.getElementById('interpreterjs').style.display="block";
    document.getElementById('virtualjs').style.display="none";
})

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

