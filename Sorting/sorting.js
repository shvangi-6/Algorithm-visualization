

const output = document.querySelector('#size_value')
const bars = document.querySelector("#mainbody");

const arraySize = document.querySelector('#size_slider');
const selectText = document.querySelector('.selected')
output.innerHTML = arraySize.value

var arrayVal = 64;
arraySize.addEventListener('input', function () {
    selectText.innerHTML = `Size Changed`
    output.innerHTML = this.value
    arrayVal = this.value
    createNewArray(arrayVal);
});


let delay = 39;


let delayElement = document.querySelector('#speed_slider');
const speedOutput = document.querySelector('#speed_value')
speedOutput.innerHTML = delayElement.value

delayElement.addEventListener('input', function () {
    selectText.innerHTML = `Speed Changed`
    speedOutput.innerHTML = this.value
    delay = 525 - parseInt(100*this.value);
});


let array = [];


createNewArray(64);



function createNewArray(arrayVal) {
    
    deleteChild();

   
    array = []
    for (let i = 0; i < arrayVal; i++) {
        let temp = Math.floor(Math.random() * (370 - 20) + 20)
        array.push(temp)
    }
  
    for (let i = 0; i < arrayVal; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]}px`
        bar.className ='bar';
        bar.innerHTML = `${array[i]}`
        bar.style.width = `${(96 / arrayVal)}vw`
        bars.appendChild(bar);
    }

}

function deleteChild() {

    while (bars.firstChild) {
        bars.removeChild(bars.firstChild)
    }
}



const newArray = document.querySelector("#generate");
newArray.addEventListener("click", function () {
 
    var mouseclick = new Audio('Mouseclick.mp3')
    mouseclick.play()
    enableSortingBtn();
    enableSizeSlider();
    selectText.innerHTML = `New Array Generated`

    createNewArray(arrayVal);
    const description = document.querySelector('#description')
    description.style.display = 'none'
    const section = document.querySelector('#fullbody')
    section.style.height = '100vh'

});



function disableSortingBtn() {
    document.querySelector(".BubbleSort").disabled = true;
    document.querySelector(".InsertionSort").disabled = true;
    document.querySelector(".MergeSort").disabled = true;
    document.querySelector(".QuickSort").disabled = true;
    document.querySelector(".SelectionSort").disabled = true;
}


function enableSortingBtn() {
    document.querySelector(".BubbleSort").disabled = false;
    document.querySelector(".InsertionSort").disabled = false;
    document.querySelector(".MergeSort").disabled = false;
    document.querySelector(".QuickSort").disabled = false;
    document.querySelector(".SelectionSort").disabled = false;
}

function disableSizeSlider() {
    document.querySelector("#size_slider").disabled = true;
    document.querySelector('#size').disabled = true
}


function enableSizeSlider() {
    document.querySelector("#size_slider").disabled = false;
    document.querySelector('#size').disabled = false
}

function disableNewArrayBtn() {
    document.querySelector("#generate").disabled = true;
}

function enableNewArrayBtn() {
    document.querySelector("#generate").disabled = false;
}

function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}




function swapping(eliment_1, eliment_2) {


    let temp = eliment_1.style.height;
    eliment_1.style.height = eliment_2.style.height;
    eliment_2.style.height = temp;

}

const menu = document.querySelector('.menu')
const options = document.querySelectorAll('.menu li')
const icon = document.querySelector('.icon')
const select = document.querySelector('.select')
const selected = document.querySelector('.selected')

menu.classList.toggle('close')

select.addEventListener('click', () => {

    menu.classList.toggle('close')
    icon.classList.toggle('icon-rotate')
})
options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText
        menu.classList.toggle('close')
        icon.classList.toggle('icon-rotate')
    })
});