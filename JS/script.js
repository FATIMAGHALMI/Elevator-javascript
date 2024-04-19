const porte1 = document.getElementById('porte1');
const porte2 = document.getElementById('porte2');
let sensorActive = false;
let isMoving = false;
let currentFloor = document.querySelector('.etage0');
let destinyFloors = [];
let doorMovementAllowed = false;
const movingElement = document.getElementById('porte');

function toggleDoors(open) {
    if (open) {
        porte1.style.transform = 'rotateY(0deg)';
        porte2.style.transform = 'rotateY(0deg)';
    } else {
        porte1.style.transform = 'rotateY(-90deg)';
        porte2.style.transform = 'rotateY(90deg)';
    }
}

const lierButton = document.getElementById('square4');
const lierButton3 = document.getElementById('square3');
const lierButton2 = document.getElementById('square2');
const lierButton1 = document.getElementById('square1');

let currentPosition = 477;
let intervalId;

function moveElement() {
    console.log("Moving element called");
    if (!doorMovementAllowed) return;
    isMoving = false;
    if (currentPosition <= 1) {
        clearInterval(intervalId);
        closeDoor();
        setTimeout(openDoor, 3000);
        return;
    }
    currentPosition -= 17;
    movingElement.style.top = currentPosition + 'px';
}
function moveElement() {
    console.log("Moving element called");
    if (!doorMovementAllowed) return;
    isMoving = false;
    if (currentPosition <= 1) {
        clearInterval(intervalId);
        closeDoor();
        setTimeout(openDoor, 3000);
        return;
    }
    currentPosition -= 17;
    movingElement.style.top = currentPosition + 'px';
}

function moveElementA3() {
    console.log("Moving element A3 called");
    if (!doorMovementAllowed) return;
    if (currentPosition <= 120) {
        clearInterval(intervalId);
        closeDoor();
        setTimeout(openDoor, 3000);
        return;
    }
    currentPosition -= 7;
    movingElement.style.top = currentPosition + 'px';
}

function moveElement2() {
    console.log("Moving element 2 called");
    if (!doorMovementAllowed) return;
    if (currentPosition <= 233) {
        clearInterval(intervalId);
        closeDoor();
        setTimeout(openDoor, 1000);
        return;
    }
    currentPosition -= 7;
    movingElement.style.top = currentPosition + 'px';
}

function moveElement1() {
    console.log("Moving element 1 called");
    if (!doorMovementAllowed) return;
    if (currentPosition <= 355) {
        clearInterval(intervalId);
        closeDoor();
        setTimeout(openDoor, 1000);
        return;
    }
    currentPosition -= 7;
    movingElement.style.top = currentPosition + 'px';
}

function startMoving(destinationFloor) {
    console.log("Start moving called");
    doorMovementAllowed = true; // Activer le mouvement de porte au début de la fonction
    destinationFloor = destinationFloor || 0; // Par défaut, l'étage de destination est l'étage 0
    switch (destinationFloor) {
        case 0:
            intervalId = setInterval(moveElement, 100);
            break;
        case 1:
            intervalId = setInterval(moveElement1, 100);
            break;
        case 2:
            intervalId = setInterval(moveElement2, 100);
            break;
        case 3:
            intervalId = setInterval(moveElementA3, 100);
            break;
        case 4:
            intervalId = setInterval(moveElement, 100); // Utilisez moveElement ou définissez une autre fonction pour l'étage 4
            break;
        default:
            break;
    }
}

function openDoor() {
    console.log("Open door called");
    toggleDoors(true);
}

function closeDoor() {
    console.log("Close door called");
    toggleDoors(false);
}

function updateSteps(step) {
    const stepsDisplay = document.getElementById('stepsDisplay');
    stepsDisplay.innerText += step;
}

lierButton.addEventListener('click', function () {
    console.log("Button A4 clicked");
    updateSteps("A4");
    doorMovementAllowed = false; // Désactiver le mouvement de porte jusqu'à ce que le bouton "Start" soit cliqué
    openDoor(); // Ouvrir la porte immédiatement
    startMoving(4); // Commencer le mouvement vers l'étage 4
});

lierButton3.addEventListener('click', function () {
    console.log("Button A3 clicked");
    updateSteps("A3");
    doorMovementAllowed = false;
    openDoor();
    startMoving(3); // Commencer le mouvement vers l'étage 3
});

lierButton2.addEventListener('click', function () {
    console.log("Button A2 clicked");
    updateSteps("A2");
    doorMovementAllowed = false;
    openDoor();
    startMoving(2); // Commencer le mouvement vers l'étage 2
});

lierButton1.addEventListener('click', function () {
    console.log("Button A1 clicked");
    updateSteps("A1");
    doorMovementAllowed = false;
    openDoor();
    startMoving(1); // Commencer le mouvement vers l'étage 1
});

document.getElementById('btnStart').addEventListener('click', function () {
    console.log("Start button clicked");
    doorMovementAllowed = true; // Activer le mouvement de porte lorsque le bouton "Start" est cliqué
});