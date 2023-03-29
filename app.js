
const button=document.getElementsByTagName('button')


function validateForm() {
    const userName=document.getElementById('name')
    const userInput=document.getElementById('email');
    const userEmail=userInput.value;
    const regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!userEmail.match(regex)) {
        alert('please Make a valid email input')
        return false;
    }


    alert(`Hello  ${userName.value} Your details has been submitted successfully` )
    

};


button.addEventListener('submit',validateForm)
