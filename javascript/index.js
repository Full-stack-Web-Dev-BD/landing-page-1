        let x=document.getElementById('navToggler')
        x.onclick=()=>{
            let navClass=document.getElementById('navbarCollapsInd')
            if(navClass.style.height==="360px"){
                navClass.style.height="100px"
            }else{
                navClass.style.height="360px"
            }
        }