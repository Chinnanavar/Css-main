function show() {
  document.getElementById("simg").src = "./images/tab-3.jpg";
}
function show1() {
  document.getElementById("simg").src = "./images/tab-2.jpg";
}
function show2() {
  document.getElementById("simg").src = "./images/tab-1.jpg";
}
function cold() {
  document.getElementsByClassName("coffee")[0].src = "./images/drink-1.jpg";
  document.getElementsByClassName("coffee")[1].src = "./images/drink-2.jpg";
  document.getElementsByClassName("coffee")[2].src = "./images/drink-3.jpg";
  document.getElementsByClassName("coffee")[3].src = "./images/drink-4.jpg";
}
function fast() {
  document.getElementsByClassName("coffee")[0].src = "./images/fast-2.jpg";
  document.getElementsByClassName("coffee")[1].src = "./images/fast-3.jpg";
  document.getElementsByClassName("coffee")[2].src = "./images/fast-4.jpg";
  document.getElementsByClassName("coffee")[3].src = "./images/fast-1.avif";
}
function tea() {
  document.getElementsByClassName("coffee")[0].src = "./images/tea-1.jpg";
  document.getElementsByClassName("coffee")[1].src = "./images/tea-2.jpg";
  document.getElementsByClassName("coffee")[2].src = "./images/tea-1.jpg";
  document.getElementsByClassName("coffee")[3].src = "./images/tea-4.jpg";
}
function coffee() {
  document.getElementsByClassName("coffee")[0].src = "./images/coffee-1.jpg";
  document.getElementsByClassName("coffee")[1].src = "./images/coffee-2.jpg";
  document.getElementsByClassName("coffee")[2].src = "./images/coffee-3.jpg";
  document.getElementsByClassName("coffee")[3].src = "./images/coffee-4.jpg";
}
function all() {
  document.getElementsByClassName("coffee")[0].src = "./images/coffee-1.jpg";
  document.getElementsByClassName("coffee")[1].src = "./images/fast-1.avif";
  document.getElementsByClassName("coffee")[2].src = "./images/tea-1.jpg";
  document.getElementsByClassName("coffee")[3].src = "./images/drink-1.jpg";
}

function view() {
  const element = document.getElementsByClassName("in")[0];
  if (element.style.display === "block") {
    element.style.display = "none";
    element.style.borderTop = "none";
  } else {
    element.style.display = "block";
    element.style.borderTop = "2px solid #2690BF";
    document.getElementsByClassName("in")[1].style.display = "none";
    document.getElementsByClassName("in")[2].style.display = "none";
  }
}

function view1() {
  const element = document.getElementsByClassName("in")[1];
  if (element.style.display === "block") {
    element.style.display = "none";
    element.style.borderTop = "none";
  } else {
    element.style.display = "block";
    element.style.borderTop = "2px solid #2690BF";
    document.getElementsByClassName("in")[0].style.display = "none";
    document.getElementsByClassName("in")[2].style.display = "none";
  }
}

function view2() {
  const element = document.getElementsByClassName("in")[2];
  if (element.style.display === "block") {
    element.style.display = "none";
    element.style.borderTop = "none";
  } else {
    element.style.display = "block";
    element.style.borderTop = "2px solid #2690BF";
    document.getElementsByClassName("in")[0].style.display = "none";
    document.getElementsByClassName("in")[1].style.display = "none";
  }
}

function login() {
  document.getElementsByClassName("form")[0].style.transform = "scale(1)";
}

function cross() {
  document.getElementsByClassName("form")[0].style.transform = "scale(0)";
}

var space = /s/g;
var at = "@";
var alertp = document.getElementById("error");

function email() {
  var user = document.getElementById("email1").value;

  if (user.match(space)) {
    alertp.innerHTML = "**WhiteSpace Are not allowed in E-mail";
    return false;
  }
  if (user.length == 0) {
    alertp.innerHTML = "**Email is empty";
    return false;
  }

  if (user.length < 8 || user.length > 25) {
    alertp.innerHTML = "**email length should be between 8 and 25";
    return false;
  }

  if (user.indexOf("@") == 0) {
    alertp.innerHTML = "**Invalid Email";
    return false;
  }
  if (
    user.charAt(user.length - 4) !== "." &&
    user.charAt(user.length - 3) !== "."
  ) {
    alertp.innerHTML = "**Invalid Email";
    return false;
  }

  if (!user.match(at)) {
    alertp.innerHTML = "**@ is important";
    return false;
  }

  alertp.innerHTML = "";
  return true;
}

function password() {
  var pass = document.getElementById("password1").value;

  if (pass.match(space)) {
    alertp.innerHTML = "**White Space Are not allowed in Password";
    return false;
  }

  if (pass == "") {
    alertp.innerHTML = "**Password is empty";
    return false;
  }

  if (pass.length < 8 || pass.length > 15) {
    alertp.innerHTML = "**password length should be between 8 and 15";
    return false;
  }

  alertp.innerHTML = "";
  return true;
}

function validateForm() {
  if (!email() || !password()) {
    alertp.innerHTML = "**please fill all details";
    return false;
  }
}

function validateForm1() {
  var name = document.getElementById("name2").value;
  var user = document.getElementById("email2").value;
  var pass = document.getElementById("password2").value;

  if (user == "") {
    document.getElementById("email2").innerHTML = "** Email is required";
    return false;
  }

  if (user.replace(/s/g, "").length <= 0) {
    document.getElementById("email3").innerHTML =
      "** White Space Are Not Allowed";
    return false;
  }

  if (user.indexOf("@") <= 0) {
    document.getElementById("email3").innerHTML = "** @ is required";
    return false;
  }

  if (
    user.charAt(user.length - 4) != "." &&
    user.charAt(user.length - 3) != "."
  ) {
    document.getElementById("email3").innerHTML = "** . is required";
    return false;
  }

  if (name == "") {
    document.getElementById("name3").innerHTML = "** Name is required";
    return false;
  }

  if (name.length <= 2 || name.length > 25) {
    document.getElementById("name3").innerHTML =
      "** Length Shoud be beetween 3 and 25";
    return false;
  }

  if (user.length <= 2 || user.length > 25) {
    document.getElementById("email3").innerHTML =
      "** Length Shoud be beetween 3 and 25";
    return false;
  }

  if (!isNaN(user)) {
    document.getElementById("email3").innerHTML = "** numbers are not allowed";
    return false;
  }

  if (pass == "") {
    document.getElementById("password3").innerHTML = "** Password is required";
    return false;
  }

  if (pass.length < 8 || user.pass > 15) {
    document.getElementById("password3").innerHTML =
      "** Password should have Atleast 8 Character";
    return false;
  }

  if (pass.replace(/s/g, "").length <= 0) {
    document.getElementById("password3").innerHTML =
      "** White Space Are Not Allowed";
    return false;
  }
}

const images = document.querySelectorAll(".img img");
let i = 0;
let j = images.length;

function next() {
  document.getElementById("img" + (i + 1)).style.display = "none";

  i = (j + i + 1) % j;

  document.getElementById("img" + (i + 1)).style.display = "block";
}

function prev() {
  document.getElementById("img" + (i + 1)).style.display = "none";
  i = (j + i - 1) % j;

  document.getElementById("img" + (i + 1)).style.display = "block";
}
