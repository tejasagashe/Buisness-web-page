var menulist = document.getElementsByClassName("menu-list")
var deskview = document.getElementById("desk-view");
var navbar = document.getElementsByClassName("navbar");

var show=1;
function togglemenu(){
    if(show===1){
        menulist[0].style.display="inline";
        navbar[0].style.height="auto";
        console.log(navbar);
        show=0;
    }
    else{
        menulist[0].style.display="none";
        navbar[0].style.height="auto";
        show=1;
    }
}

