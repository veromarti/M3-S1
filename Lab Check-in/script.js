
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
    const option = intValidation(`Choose an option \n1. Check-in \n2. Show user info \n3. Simulation \n4. Exit`,1,4);
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
    } else if (opt === 2) {
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
    if (user.hours) {
        
    } else {
        
    }
}

function showUser(user){
    console.log(`Name: ${user.name} \nAge: ${user.age} \nCourses: ${user.courses}`);
    let msg = 'You are older than 18';

    if (user.age < 19) {
        msg = 'You are under age';
    }

    alert(`Name: ${user.name} \nAge: ${user.age} \n${msg} \nCourses: ${user.courses}`);
    return
}

function evaluation() {
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
            break;

        case 2:
            showUser(userInfo);
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
