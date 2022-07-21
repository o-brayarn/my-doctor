/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  const who = document.getElementById('who')
  who.addEventListener('click',function(){
    document.getElementById('x').style.display="block";
  })
  
  const vision = document.getElementById('vision')
  vision.addEventListener('click',function(){
    document.getElementById('y').style.display="block";
    document.getElementById('x').style.display="none";
  })
  const core = document.getElementById('core')
  core.addEventListener('click',function(){
    document.getElementById('z').style.display="block";
    document.getElementById('y').style.display="none";
    document.getElementById('x').style.display="none";
  })
  const collaborators = document.getElementById('collaborators')
  collaborators.addEventListener('click',function(){
    document.getElementById('a').style.display="block";
    document.getElementById('z').style.display="none";
    document.getElementById('y').style.display="none";
    document.getElementById('x').style.display="none";
  })
  
  // Close the dropdown menu if the user clicks outside of it
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