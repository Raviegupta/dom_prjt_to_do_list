const display_list = document.getElementById('body');
const names = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("contact");
const btn = document.getElementById('btn');
const error = document.getElementById('error')

btn.addEventListener('click', () => {

   if (names.value == "") {
      error.innerText = "*please enter your name"

      return;
   }
   if (email.value == "") {
      error.innerText = "*please enter your email"
      return;
   }
   else if (!email.value.includes("@")) {
      error.innerText = "*invalid email. Please include @ in your email"
      return;
   }
   if (phone.value == "") {
      error.innerText = "*please enter your Phone number"
      return;
   } else if (phone.value.length !== 10) {
      error.innerText = "*please enter only 10 digits"
      return;
   }

   display_list.innerHTML += `<tr class="data">
        <td>${names.value}</td>
       <td>${email.value}</td>
       <td>${phone.value}</td>
       <td ><button class="del">Delete</button></td>
      <tr>`;

   names.value = "";
   email.value = "";
   phone.value = "";
   error.innerText = "";

   const delete_list = document.querySelectorAll('.del');

   for (const del of delete_list) {
      del.addEventListener('click', function () {

         let confirm = window.confirm("are you sure you want to delete this??");

         if (confirm) {
            this.parentNode.parentNode.remove();
         }

      })
   }
})









