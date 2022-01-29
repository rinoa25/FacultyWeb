// When a button is clicked, a function will be executed to have that link be active
// While the previous button clicked will become inactive
function set_active(){
  var btnSec = document.getElementById("wrapper");
  var btns = btnSec.getElementsByClassName("PUbtn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      // This function sees which button is currently active
      var current = document.getElementsByClassName("PUbtn active");
      // Change current active class name to inactive by removing active class
      current[0].className = current[0].className.replace(" active", "");
      // New button that is clicked on will now become active
      this.className += " active";
    });
  }
}
// Opens respective news popup when "read more" button is clicked
function triggerPopup() {
  document.getElementById("popup1").classList.toggle("active");
}
function triggerPopup2() {
  document.getElementById("popup2").classList.toggle("active");
}
function triggerPopup3() {
  document.getElementById("popup3").classList.toggle("active");
}
function triggerPopup4() {
  document.getElementById("popup4").classList.toggle("active");
}
function triggerPopup5() {
  document.getElementById("popup5").classList.toggle("active");
}
function triggerPopup6() {
  document.getElementById("popup6").classList.toggle("active");
}
function triggerPopup7() {
  document.getElementById("popup7").classList.toggle("active");
}
function triggerPopup8() {
  document.getElementById("popup8").classList.toggle("active");
}
function triggerPopup9() {
  document.getElementById("popup9").classList.toggle("active");
}
function triggerPopup10() {
  document.getElementById("popup10").classList.toggle("active");
}
