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
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        //call displayData
        displayData(fbArray);
    }else{
        alert("You Must Enter Numbers");
    } 
    
}

//standard loop with if/else statement
function fizzBuzz(fizzValue, buzzValue){
    let returnArray = [];

    //loop from 1 to 100 
    for (let i = 1; i <= 100; i++) {
    //check to see if divisible by both (3 and 5)
    //check to see if divisible by fizz value (3)
    //check to see if divisible by buzz value (5)
        if(i % fizzValue == 0 && i % buzzValue == 0){
            returnArray.push('FizzBuzz');
        }else if(i % fizzValue == 0){
            returnArray.push('Fizz');
        }else if(i % buzzValue == 0){
            returnArray.push('Buzz');
        }else{
            returnArray.push(i);
        }

       }

    return returnArray;
}

//switch case statement 
function fizzBuzzB(fizzValue, buzzValue){
    let returnArray = [];
    let fizz = false;
    let buzz = false;

    for (let i = 0; i <= 100; i++) {
        
        fizz = i % fizzValue ==0;
        buzz = i % buzzValue ==0;

        switch(true){
            case fizz && buzz:{
                returnArray.push('FizzBuzz');
                break;
            }
            case fizz:{
                returnArray.push('Fizz');
                break;
            }
            case buzz:{
                returnArray.push('Buzz');
                break;
            }
            default:{
                returnArray.push(i);
                break;
            }
        }
        
    }
    return returnArray;
}

//terenary operators
function fizzBuzzC(fizzValue, buzzValue){
    let returnArray = [];

    for (let i = 1; i <= 100; i++){
        
        let value = ((i%fizzValue == 0 ? 'Fizz' : '') + (i% buzzValue == 0 ? 'Buzz' : '') || i)
        returnArray.push(value);
    }

    return returnArray
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
        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];
        
        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index+ 1];

        rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index+ 2];

        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index+ 3];

        rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index+ 4];

        tableBody.appendChild(tableRow);
    }

    //add all the rows to the table. 

}