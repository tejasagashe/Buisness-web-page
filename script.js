var menulist = document.getElementsByClassName("menu-list")
var deskview = document.getElementById("desk-view");
deskview[0].style.display="none";


var show=1;
function togglemenu(){
    if(show===1){
        menulist[0].style.display="inline";
        menulist[0].style.maxHeight="130px";
        show=0;
    }
    else{
        menulist[0].style.display="none";
        show=1;
    }
}

