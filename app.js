const menu = () => {
    const burger = document.querySelector('.burger')
    const topNav = document.querySelector('.top-nav');

    burger.addEventListener('click', () => {
        topNav.classList.toggle('nav-active');
    });
}

const numberClick = () => {
    const btn = document.querySelectorAll('.btn-number');
    const input = document.querySelector('#equation');

    btn.forEach(element => {
        element.addEventListener('click', () => {
            input.value += element.innerHTML;
        });
    });
}

const operandsClick = () => {
    const btn = document.querySelectorAll('.btn-operands');
    const input = document.querySelector('#equation');

    btn.forEach(element => {
        element.addEventListener('click', () => {
            input.value += element.innerHTML;
        });
    });
}

makeNumbers = () => {
    let i = 1;
    let divNum = document.getElementById('number');
    for (; i <= 9; i++) {
        let btn = document.createElement('button');
        btn.textContent = i;
        btn.setAttribute('class', 'btn-number');
        divNum.appendChild(btn);
    }
}

(() => {
    const plus = document.getElementById('plus');
    const input = document.querySelector('#equation');

    plus.addEventListener('click', () => {
        // input.value =
    })
});


function calculate() {
    const input = document.querySelector('#equation');
    const inputNum = (input.value).split(/[\+\-\*\/]/);
    const operands = (input.value).split(/[^\+\-\*\/]/).filter(item => item);

    while (operands.length) {
        let i = 0;

        if ((i = operands.findIndex((opr) => opr == "*")) != -1) {
            inputNum[i] = parseFloat(inputNum[i]) * parseFloat(inputNum[i + 1]);
        } else if ((i = operands.findIndex((opr) => opr == "/")) != -1) {
            inputNum[i] = parseFloat(inputNum[i]) / parseFloat(inputNum[i + 1]);
        } else if ((i = operands.findIndex((opr) => opr == "+")) != -1) {
            inputNum[i] = parseFloat(inputNum[i]) + parseFloat(inputNum[i + 1]);
        } else if ((i = operands.findIndex((opr) => opr == "-")) != -1) {
            inputNum[i] = parseFloat(inputNum[i]) - parseFloat(inputNum[i + 1]);
        }

        inputNum.splice(i + 1, 1);
        operands.splice(i, 1);
    }
    input.value = inputNum[0];
}

function checkInput(input) {
    let pattern = /\+\-\*\//;

    if ((input.value).search(pattern)) {
        alert('found');
    }
}

function del() {
    const input = document.getElementById('equation').value;
    document.getElementById('equation').value = input.slice(0, -1);
}


menu();
// makeNumbers();
numberClick();
operandsClick();