let Up_name = document.getElementById("Up_name");
let Up_email = document.getElementById("Up_email");

// name Validation;
isValidName = (e) => {
   let er = /^[a-zA-Z0-9_]{3,16}$/;
   return er.test(e);
};
function validName() {
   if (isValidName(Up_name.value) || Up_name.value.length === 0) {
      Up_name.classList.remove("wrong");
   } else {
      Up_name.classList.add("wrong");
   }
}
// email validation
isValidEmail = (e) => {
   let pa = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   return !!e.match(pa);
};
function validEmail() {
   if (isValidEmail(Up_email.value) || Up_email.value.length === 0) {
      Up_email.classList.remove("wrong");
   } else {
      Up_email.classList.add("wrong");
   }
}
