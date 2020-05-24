// let btnClick = document.getElementById('btnCheck');
// btnClick.addEventListener('click', printNumber2);

// function test() {
//     alert('ok');
// }

// function printNumber() {
//     var myNumber = document.getElementById('number').value;
//     var myResult;
//     if (myNumber % 2 == 0) {
//         myResult = 'Even'
//     } else {
//         myResult = 'Odd'
//     }
//     document.getElementById('result').innerHTML = "Result: " + myResult;
// }


// function printNumber2() {
//     var myNumber = document.getElementById('number').value;
//     var myResult;
//     if (myNumber % 2 == 0) {
//         myResult = 'Even'
//     } else {
//         myResult = 'Odd'
//     }
//     let oldResultElement = document.getElementById('result-elem');

//     if (oldResultElement != null) {
//         document.body.removeChild(oldResultElement);
//     }
//     let resultElement = document.createElement('p');
//     resultElement.id ="result-elem";
//     let textNode = document.createTextNode('Result: ' + myResult);
//     resultElement.appendChild(textNode);
//     document.body.appendChild(resultElement);

// }

let loop = setInterval(updateTime, 1000);

function updateTime() {
    let showTime = document.getElementById('show-time')
    showTime.innerHTML = new Date().toLocaleString();
}

function stopLoop() {
    clearInterval(loop);
}

function startLoop() {
    let loop = setInterval(updateTime, 1000);
}