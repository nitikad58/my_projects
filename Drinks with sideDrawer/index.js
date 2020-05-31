function openNav() {
     document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
}

function readMore() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("See");

    if (btnText.innerHTML = "See more") {
       moreText.style.display = "inline";
       btnText.innerHTML = "See less"; 
    } 
    else{
       moreText.style.display = "none";
       btnText.innerHTML = "See more"; 
    }
  }