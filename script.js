const buttons = document.querySelectorAll('.butt');
const input = document.querySelector('.entry');
let shift = false;
let capslock = false;

function whatToAdd(event){
    const position = event.target;
    const childrenNum = position.children.length;
    return position.textContent;
    // if(childrenNum == 0 && position.parent.className === "btn-row")
}

function changes(button){
    button.addEventListener('click', e => {

        input.value += whatToAdd(e);
        
        return console.log(e.target.textContent);
    });
}

buttons.forEach(changes);