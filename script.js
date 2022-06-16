const form=document.getElementById('form')
const firstname=document.getElementById('firstname')
const lastname=document.getElementById('lastname')
const email=document.getElementById('email')
const password=document.getElementById('password')

form.addEventListener('submit',(e) => {
    e.preventDefault();
    validateInput();
});

 const validateInput=()=>{
    const firstnameValue=firstname.value.trim()
    const lastnameValue=lastname.value.trim()
    const emailValue=email.value.trim()
    const passwordValue=password.value.trim()

    if(firstnameValue === ''){
        setErrorFor(firstname, 'First Name cannot be empty')
       changeColor()

    }else{
        setSucessFor(firstname)
    }

    if(lastnameValue === ''){
        setErrorFor(lastname, 'Last Name cannot be empty')
    }else{
        setSucessFor(lastname)
    }
    if(emailValue === ''){
        setErrorFor(email, 'Looks like this is not an email')
    }else{
        setSucessFor(email)
    }
   
    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be empty')
    }else{
        setSucessFor(password)
    }
    
}

const setErrorFor=(input,message)=>{
    const inputArea=input.parentElement;
    const small=inputArea.querySelector('small')
    small.innerText = message;
    inputArea.className= 'input_area error'
}

const setSucessFor=(input)=>{
    const inputArea=input.parentElement;
    inputArea.className= 'input_area success'
}


const changeColor=(toColor)=> {
    addCSS = document.createElement('style');
    addCSS.innerHTML = "::placeholder { color: " + toColor + "; }";
    document.body.append(addCSS);
}