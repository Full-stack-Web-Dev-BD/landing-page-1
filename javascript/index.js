let x = document.getElementById('navToggler')
let loginFormToggler = document.getElementById('login-form-toggler')
let loginFormToggler2 = document.getElementById('login-form-toggler2')
let loginForm = document.getElementById('login-form')
let scrooler = document.getElementById('scrooler')
let scrooler1 = document.getElementById('scrooler1')
let scrooler2 = document.getElementById('scrooler2')
let scrooler3 = document.getElementById('scrooler3')
let scrooler4 = document.getElementById('scrooler4')

scrooler4.onclick=()=>{
    setTimeout(() => {
        let p=window.scrollY
        window.scrollTo({
            top: p-100,
            left: 0
          });
    }, 10);
}
scrooler3.onclick=()=>{
    setTimeout(() => {
        let p=window.scrollY
        window.scrollTo({
            top: p-100,
            left: 0
          });
    }, 10);
}
scrooler2.onclick=()=>{
    setTimeout(() => {
        let p=window.scrollY
        window.scrollTo({
            top: p-100,
            left: 0
          });
    }, 10);
}
scrooler1.onclick=()=>{
    setTimeout(() => {
        let p=window.scrollY
        window.scrollTo({
            top: p-100,
            left: 0
          });
    }, 10);
}
scrooler.onclick=()=>{
    setTimeout(() => {
        let p=window.scrollY
        window.scrollTo({
            top: p-100,
            left: 0
          });
    }, 100);
}
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

