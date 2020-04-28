let userName = prompt("Enter your name", " ");
let userAge = prompt("Enter your age", " ");
if ((isNaN(userName)) && (isFinite(userAge))) {
    if (userAge < 18) {

        alert(`You are not allowed to visit this website`);

    } else if (22 < userAge) {
        alert(`Welcome, ` + userName);
    } else {
        let reQuest = confirm(`Are you sure you want to continue?`);
        if (reQuest === true) {
            alert(`Welcome, ` + userName);
        } else { alert(`You are not allowed to visit this website`); }

    }


} else {
    do {
        userName = prompt("Enter your name", `${userName}`);
        userAge = prompt("Enter your age", `${userAge}`);
    }
    while (((!isNaN(userName)) !== "string") && (!isFinite(userAge)))
    if (userAge < 18) {

        alert(`You are not allowed to visit this website`);

    } else if (22 < userAge) {
        alert(`Welcome, ` + userName);
    } else {
        let reQuest = confirm(`Are you sure you want to continue?`);
        if (reQuest === true) {
            alert(`Welcome, ` + userName);
        } else { alert(`You are not allowed to visit this website`); }

    }
}