const container = document.querySelector('.container');
const success = document.getElementById('success-container');
const button = document.getElementById('subscribe');
const dismiss = document.getElementById('dismiss');
const contain = document.getElementById('contain');
const email = document.getElementById('email');
const errorMsg = document.getElementById('error');
const address = document.getElementById('address');


const emailCheck = (email) => {
    const userEmail = email.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (userEmail === '') {
            email.style.border = 'solid red 1px';
            email.style.backgroundColor = 'pink';
            errorMsg.innerText = "This Field Is Required!";
            errorMsg.style.color = 'red';
            errorMsg.style.justifyContent = 'right';
            errorMsg.style.fontSize = '.73rem';
            return;
        } else if (!regex.test(userEmail)) {
            email.style.border = 'red solid 1px';
            email.style.backgroundColor = 'pink';
            errorMsg.innerText = 'Please Insert Valid Email';
            errorMsg.style.color = 'red';
            errorMsg.style.justifyContent = 'right';
            errorMsg.style.fontSize = '.73rem';
            return;
        } else {
            email.style.border = 'solid black 1px';
            email.style.backgroundColor = 'none';
            errorMsg.style.display = 'none';
            return userEmail;
        };

}




button.addEventListener('click', (e) => {
    // alert('clicked');
    emailCheck(email);
    e.preventDefault();
    address.innerText = email.value;
    address.style.fontWeight = 'bold';
    if (emailCheck(email)) {
        success.classList.remove('red');
        contain.classList.add('red');
    }
});

dismiss.addEventListener('click', () => {
    success.classList.add('red');
    contain.classList.remove('red');
});


// const emailCheck = (email) => {
//     //regular expression
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const userEmail = email.value
    
//     if (userEmail === '') {
//         email.style.border = '1px solid red';
//         errorMsg3.innerText = 'This field is required';
//         errorMsg3.style.color = 'red';
//         return;
//     }else if (!regex.test(userEmail)) {
//         email.style.border = '1px solid red';
//         errorMsg3.innerText = 'Please enter a valid email';
//         errorMsg3.style.color = 'red';
//         return;
//         // return regex.test(email);
//     }else {
//         email.style.border = '1px solid black';
//         errorMsg3.style.display = 'none';
//         return userEmail;
//     }
// }