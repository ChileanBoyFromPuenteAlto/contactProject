/*let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let reemail = document.getElementById("re-email").value;
let password = document.getElementById("password").value;
let repassword = document.getElementById("re-password").value;
*/

const user = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  reemail: document.getElementById("re-email"),
  password: document.getElementById("password"),
  repassword: document.getElementById("re-password"),
};

const form = document.getElementById("signupform");

form.addEventListener("signup", (event) => {
  if (user.email.valur !== user.reemail.value) {
    alert("the email's doesn't match!");
    event.preventDefault();
    return;
  }

  if (user.password.value !== user.repassword.value) {
    alert("the password's doesn't macth!");
    event.preventDefault();
    return;
  }
});
