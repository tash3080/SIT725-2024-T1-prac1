function changeText1(){
    changeText("heading1")

}

function changeText2(){
    changeText("heading2")

}

function changeText3(){
    changeText("heading3")

}

function changeText4(){
    changeText("heading4")

}

function changeText5(){
    changeText("heading5")
}

function changeText(head){
    var textsArray = ["SIT725", "SIT725-ASE", "Applied Software Engineering", "ASE"]
    var textsArray2 = ["SUV", "Truck", "Motorbike", "UTE", "Sedan"]

    var number = getRandomNumberBetween(0, textsArray.length - 1)
    var number2 = getRandomNumberBetween(0, textsArray2.length - 1)
    
    console.log("Index: ", number)
    console.log(textsArray[number])

    if (head == "heading1"){
        document.getElementById(head).innerHTML = textsArray[number];
    }
    else {
        document.getElementById(head).innerHTML = textsArray2[number2];
    }
}

function getRandomNumberBetween(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

