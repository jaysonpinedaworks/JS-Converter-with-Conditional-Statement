let enterNumber = document.querySelector("#measure");
let measureOne = document.querySelector("#measureOne");
let measureTwo = document.querySelector("#measureTwo");




function mycalculate(){
    
    let eNum = enterNumber.value;
    let mOne = measureOne.value;
    let mTwo = measureTwo.value;
    let ansRes = document.querySelector("#displayResult");
    
    
    if (mOne == "Kilometer" && mTwo == "Meter" ){
        let calc = eNum * 1000;
        displayResult.innerHTML = calc;
        ansRes.style.backgroundColor = "none";
        ansRes.style.width = "220px";
        ansRes.style.boxShadow = "0px 1px 8px #000000";

        
    }
    else if ( mOne == "Kilometer" && mTwo == "Centimeter" ){
        let calc = eNum * 100000;
        displayResult.innerHTML = calc;}
    else if (mOne == "Kilometer" && mTwo == "Kilometer"){
        alert("Please Select another Unit")
    }
    else if ( mOne == "Meter" && mTwo == "Kilometer" ){
        let calc = eNum / 1000;
        displayResult.innerHTML = calc;}
    else if ( mOne == "Meter" && mTwo == "Centimeter" ){
        let calc = eNum * 100;
        displayResult.innerHTML = calc;}
    else if (mOne == "Meter" && mTwo == "Meter"){
            alert("Please Select another Unit")
        }
        else if ( mOne == "Centimeter" && mTwo == "Kilometer" ){
            let calc = eNum / 100000;
            displayResult.innerHTML = calc;}
        else if ( mOne == "Centimeter" && mTwo == "Meter" ){
            let calc = eNum / 100;
            displayResult.innerHTML = calc;}
            else if (mOne == "Centimeter" && mTwo == "Centimeter"){
                alert("Please Select another Unit")
            }
    
}


function Myreset(){
    displayResult.innerHTML = "";
    let ansRes = document.querySelector("#displayResult");
    ansRes.style.backgroundColor = "transparent";

 
}
