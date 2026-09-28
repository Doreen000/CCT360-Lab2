document.getElementById('myIDForToClick').onclick = function() {
    alert("The purpose of this website is showing my cat");
}

function clicked() {
    document.getElementById('LarryImage').style.display = "block";
    document.getElementById('paragraph').innerHTML = "Here is Larry!";
    document.getElementById('mainTitle').style.color = "blue";
}
