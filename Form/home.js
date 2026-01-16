document.addEventListener('DOMContentLoaded',() =>{
    const textName = document.querySelector('.greet');

    const user = JSON.parse(localStorage.getItem('user'))
    
    console.log(user)
    console.log(typeof(user))

    if (user){
        textName.textContent = `Hello ${user.name}`
    }else{
        textName.textContent = `User doesn't exist`
    }
    
}
)