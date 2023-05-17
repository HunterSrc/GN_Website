
function toggleInfo(){
    var modal = document.querySelector(".modal");
    modal.style.display = "block";
    var x = document.querySelector(".contatti");
    var y = document.querySelector(".info");
    y.style.display = "block";
    x.style.display = "none";
    console.log(x);
}

function toggleContatti(){
    var modal = document.querySelector(".modal");
    modal.style.display = "block";
    var x = document.querySelector(".contatti");
    var y = document.querySelector(".info");
    y.style.display = "none";
    x.style.display = "block";
}

function closeModal(){
    var modal = document.querySelector(".modal");
    modal.style.display = "none";
}