//get the values from the user. Get the fizz and buzz value. 

function getValues(){

    //get the user values from the page (html page)

    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue= document.getElementById("buzzValue").value;

    //parse for numbers 
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //check that they are integers 
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        //call fizzbuzz
        let fbArray = fizzBuzz(fizzValue,buzzValue);
        //call displayData
        displayData(fbArray);
    }else{
        alert("You Must Enter Numbers");
    } 
    
}

function fizzBuzz(fizzValue, buzzValue){
    let returnArray = [];

    //loop from 1 to 100 
    for (let i = 1; i <= 100; i++) {
    //check to see if divisible by both (3 and 5)
    //check to see if divisible by fizz value (3)
    //check to see if divisible by buzz value (5)
        if(i % fizzValue == 0 && i % buzzValue == 0){
            returnArray.push('Fizz Buzz');
        }else if(i % fizzValue == 0){
            returnArray.push('fizz');
        }else if(i % buzzValue == 0){
            returnArray.push('buzz');
        }else{
            returnArray.push(i);
        }

       }

    returnArray;
}

function displayData(fbArray){

    //get the table body element from the page 
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear the table first
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index +=5) {
        let tableRow = document.importNode(templateRow.content, true)

        //grab just the td's to put into array 
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = fbData[i];
        rowCols[1].textContent = fbData[i+1];
        rowCols[2].textContent = fbData[i+2];
        rowCols[3].textContent = fbData[i+3];
        rowCols[4].textContent = fbData[i+4];

        tableBody.appendChild(tableRow);
    }

    //add all the rows to the table. 

}