function searchTab() {
    let x = document.getElementsByClassName("search-tab")[0];
    //x.style.display="block";
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function bars() {
    if (document.getElementsByClassName("lines")[0].style.transform = "rotate(0deg)") {


        document.getElementsByClassName("lines")[0].style.transform = "rotate(-90deg)";
        document.getElementsByClassName("lines")[0].style.transition = "all 0.2s linear";
        document.getElementsByClassName("line")[0].style.transition = "all 0.2s 0.3s linear";
        document.getElementsByClassName("first")[0].style.transform = "rotate(60deg)translateX(45%)";
        document.getElementsByClassName("second")[0].style.transform = "rotate(-60deg)translateY(-7px) translateX(-13%)";
    }
    else {

        document.getElementsByClassName("lines")[0].style.transform = "rotate(0deg)";
        document.getElementsByClassName("lines")[0].style.transition = "all 0.2s linear";
        document.getElementsByClassName("line")[0].style.transition = "all 0.2s 0.3s linear";
        document.getElementsByClassName("first")[0].style.transform = "rotate(0deg)translateX(0%)";
        document.getElementsByClassName("second")[0].style.transform = "rotate(0deg)translateY(0px) translateX(%)";
    }

}