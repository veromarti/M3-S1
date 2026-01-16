alert("Welcome to the Access Gate");
let flagMenu = false;
let userInfo = {
    name: "",
    age: 0,
    role: "",
    hours: 0,
    acceptance: false,
};

function menu(){
    const option = intValidation(`Choose an option \n1. Check-in \n2. Risk Calculator \n3. Simulation \n4. Exit`,1,4);
    return option
}

function intValidation(message, min = null, max = null){
    let flag = false;
    while (!flag) {
        let value = prompt(message, "Type here");
        if (value === null) return null;

        value = value.trim();

        if (value === "") {
            alert("The field cannot be empty");
            continue;
        }

        if (!/^-?\d+$/.test(value)) {
            alert("Please enter numbers only.");
            continue;
        }

        value = Number(value);

        if (!Number.isInteger(value)) {
            alert("Wrong entry. Try again.");
            continue;
        }
        if ((min !== null && value < min) || (max !== null && value > max)) {
            alert("Value out of range. Try again.");
            continue;
        }
        return value;
    }
}

function strValidation(message){
    let flag = false;
    while (!flag) {
        let value = prompt(message, "Type here");
        if (value === null) return null;

        // value = value.trim();

        if (value === "") {
            alert("The field cannot be empty");
            continue;
        }

        if (!/^[a-zA-Z ]+$/.test(value)) {
            alert("The field must include only letters");
            continue;
        }

        return value.toLowerCase();
    }
}

function register() {
    let userRole = 'visitor';
    let userName = strValidation("Enter your name");
    let userAge = intValidation("Enter your age", 5);
    let optRole = intValidation("Choose your role \n1. Coder \n2.Tutor \n3. Visitor",1,3);
    let userHours = intValidation("Available hours", 1,12);

    let optRules = intValidation("Do you accept the Lab Rules \n1. Yes \n2. No", 1,2);

    let rules = (optRules === 1) ? true : false;

    if (optRole ===1) {
        userRole = 'coder';
    } else if (optRole === 2) {
        userRole = 'tutor';
    }

    userInfo = {
    name: userName,
    age: userAge,
    role: userRole,
    hours: userHours,
    acceptance: rules,
    };
    return  userInfo
}
//LocalStorage y SessionStorage
//Sweetalert2
//material ui vulma shadcn foundation

function riskCalculation(user) {
    let risk = 0;
    if (user.hours < 2) {
        risk+=2;
    } else if (user.hours > 3){
        risk--;
    }
    if (user.role == 'visitor') {
        risk+=2;
    } else if (user.role == 'coder'){
        risk--;
    }
    if (user.age>17 && user.age < 21) {
        risk+=2;
    }

    if (risk < 0) {
        risk = 0
    }

    return risk;
}

function showUser(user){
    alert(`Name: ${user.name} \nAge: ${user.age} \nHours: ${user.hours} \nRole: ${user.role}`)
    return
}

function finalDecision(user) {
    let decision = 'Allow'
    if (user.age < 19 || user.acceptance === false) {
        decision = 'Deny'
    }
    if (user.risk < 3){
        decision = 'Review'
    }

    let sumNotes = 0, prom = 0, notes = [];
    notes[0]  = intValidation("Enter note 1", 0,5);
    notes[1]  = intValidation("Enter note 2", 0,5);
    notes[2]  = intValidation("Enter note 3", 0,5);
    let msg = 'Congratulations, you approbed';

    for(let i of notes) sumNotes += i;
    prom = sumNotes/3;
    prom = prom.toFixed(2);

    if (prom < 3) {
        msg = "Unfortunately you failed"
    } else if (prom > 4.5){
        msg = 'Congratulations, you approbed with excellence';
    }

    alert(`Your final note is: ${prom} \n${msg}`);
    return
    
}

function main(value){
    switch (value) {
        case 1:
            userInfo = register();
            alert("Check-in in process");
            showUser(userInfo);
            break;

        case 2:
            let userRisk = riskCalculation(userInfo);
            console.log(userRisk)
            break;
        case 3:
            evaluation();
            break;
    
        default:
            break;
    }
}

while (!flagMenu) {
    let option = menu();

    if (option === 4) {
        flagMenu = true;
        alert("Thanks for using the System");

    } else {
        flagMenu = false;
        main(option);
    }
}


// ex 1

// const header1 = document.querySelector('h1');

// const name = prompt('name');

// header1.textContent = 'Hello ' + name

//ex 2

// const inputName = document.querySelector('input')

// function change() {
//     header1.textContent = 'Hello ' + inputName.value
// }

//ex 3 PERSISTENCIA DE DATOS
// document.addEventListener('DOMContentLoaded',() =>{
//     const nameSave = localStorage.getItem('name')
//     header1.textContent = 'Hello ' + nameSave
    
// }
// )
// const inputName = document.querySelector('input')

// function change() {
    
//     header1.textContent = 'Hello ' + inputName.value
//     localStorage.setItem('name',inputName.value)
// }

//ex 4 Cambio estilos

document.body.style.background = 'black';
document.body.style = 'background:red; color:white'
