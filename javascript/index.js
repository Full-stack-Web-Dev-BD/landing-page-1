let x = document.getElementById('navToggler')
let loginFormToggler = document.getElementById('login-form-toggler')
let loginFormToggler2 = document.getElementById('login-form-toggler2')
let loginForm = document.getElementById('login-form')

loginFormToggler2.onclick=()=>{
    if(loginForm.style.display==="block"){
        loginForm.style.display="none"
    }else{
        loginForm.style.display="block"
    }
}
loginFormToggler.onclick=()=>{
    if(loginForm.style.display==="block"){
        loginForm.style.display="none"
    }else{
        loginForm.style.display="block"
    }
}
x.onclick = () => {
    let navClass = document.getElementById('navbarCollapsInd')
    if (navClass.style.height === "360px") {
        navClass.style.height = "100px"
    } else {
        navClass.style.height = "360px"
    }
}

