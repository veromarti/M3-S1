

const btn = document.getElementById('btn-submit')

function saveUser(){

    const inputName = document.getElementById('inputName')
    const inputPassw = document.getElementById('inputPass')

    const userName = inputName.value;
    const userPassw = inputPassw.value

    const user = {name:userName,password:userPassw}
    console.log(user)

    localStorage.setItem('user', JSON.stringify(user))
    window.location.href = 'home.html'

}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('entro')
    saveUser()
}
)



