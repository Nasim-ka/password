const btn = document.querySelector('button');
const input = document.querySelector('input');
const chars = '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const icon= document.querySelector('.bi');
// let ker =chars.substring(0, 30);
// console.log(ker)
//const h1 = document.querySelector('h1').innerHTML='hiiii'
// btn.addEventListener("click", function() {
//     password.value = "Hello World";
// });
//chars.forEach(chars)=> alert('lllll')

// pass.forEach(pas => {
//     console.log(char.length)
//     // Math.floor(Math.random()*chars.length)
//     //Math.floor((Math.random() * 100) + 1);
// });

//let pass = []
// for(i=0; i<14;i++){
//    let randompass= Math.floor(Math.random()*chars.length);
//    //pass.substring(0, 14);
//    let char= chars.substring(randompass, randompass+1);
//    pass += char
   //pass.substring(0, 14);
  // console.log(pass)


//   });
//    btn.addEventListener("click", createPassword() {
//     password.value = pass
//     return pass
// });
btn.addEventListener("click", createPassword); 
function createPassword(){
  let pass = ''
  for(i=0; i<14;i++){
    let randompass= Math.floor(Math.random()*chars.length);
    //pass.substring(0, 14);
    let char= chars.substring(randompass, randompass+1);
    pass += char
  }
   input.value = pass
   return pass
  }
// function createPassword(){
//     password.value = pass
//     return pass
//   }
  



// }
icon.addEventListener("click", copyPassword);
function copyPassword() {
  input.select();
  input.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(input.value);
  alert("Copied the text: " + input.value);
}

// icon.addEventListener("click", copyPassword )


// function copyPassword() {

//   // Select the text field
//   input.select();
//   copyText.setSelectionRange(0, 99999); // For mobile devices

//    // Copy the text inside the text field
//   navigator.clipboard.writeText(input.value);

//   // Alert the copied text
//   alert("Copied the text: " + input.value);


// }
// nums.array.forEach(element => {
    
// });
// pass.forEach(function(n)){
//     console.log(n)
// }

