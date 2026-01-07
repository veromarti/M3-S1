alert("Welcome to the system");

const userName = prompt("Enter your name", "Here goes your name");
let age = Number(prompt("Enter your age", "Here goes your age"));
const mail = (prompt("Enter your e-mail", "Here goes your e-mail")).toString();
let stat = confirm("Press OK if you are an active user");
let adult = false;
const password = 'kokito123'
showConsole();


function intValidation(value){
    console.log(value);
    if (!(Number.isInteger(value))) {
        console.log('Number not valid');
        return true;
    }
    else{
        return false;
    }
}

function ageValidation(){
    if (value > 17) {
        adult = true;
        alert("The user is over 18 years old :)")
    }
    else{
        alert("The user is under age :|")
    }
}

function showConsole(){
    console.log(`Name: ${userName}`, '=>', typeof(userName), `\nAge: ${age}`, '=>', typeof(age),  `\nE-mail: ${mail}`, '=>', typeof(mail));
}

// function login(user,attempts=3){
//     if (attempts === 0){
//         alert("Too many failed attempts")
//         return false
//     }

//     if (user){
//         let passw = prompt("Password: ")
//         if (passw === password)
//             print('\n - - ACCESS GRANTED - - \n')
//             return True
    
//         else:
//             print('Invalid ID User or Password. Attempts left: ' + str(attempts-1))
//             return admin_login(admin,attempts-1)
//     }
//     else:
//         print('\nSUPERADMIN was not detected\n')
//         return admin_login(admin,attempts-1)
// }