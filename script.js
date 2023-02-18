function myfunc(){

// const form = document.getElementById("form").value;
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const zipcode = document.getElementById("Zipcode").value;
const phonenumber = document.getElementById("Phone number").value;


  
if (/^[a-zA-Z]{2,23}/.test(name)) {
    document.getElementById("none").innerHTML = ""
} else {
    document.getElementById("none").innerHTML = "charecter should be 2 to 23";
  
}


if (/[a-z0-9A-Z]{1,20}@[a-z0-9A-Z]{1,10}\.[a-z]{2,}/gim.test(email)) {
    document.getElementById("none1").innerHTML = ""
} else {
    document.getElementById("none1").innerHTML = "invalid email";

}
if (/^[10000-90000]/.test(zipcode)) {
    document.getElementById("none2").innerHTML = ""
} else {
    document.getElementById("none2").innerHTML = "invalid Zipcode";

}

if (/^\d{10}$/.test(phonenumber)) {
    document.getElementById("none3").innerHTML = ""
} else {
    document.getElementById("none3").innerHTML = "phone number should be 10.";
    return false;
}

    }