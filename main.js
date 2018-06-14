window.onload = function()

{

  var Scroll = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (Scroll > currentScrollPos) {
      document.getElementById('navbar').style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-1200px";
    }
    Scroll = currentScrollPos;
  }
}
