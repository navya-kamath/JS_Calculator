let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

// Function to fix floating-point precision
const fixPrecision = (num) => {
    return Math.round(num * 1e10) / 1e10; // Round to 10 decimal places
};

arr.forEach(button => {
    button.addEventListener('click',(e) => {
        if(e.target.innerHTML == '='){
            string = fixPrecision(eval(string));
            input.value = string;
        }
        
        else if(e.target.innerHTML == 'Clear'){
            string ="";
            input.value = string;
        }

        else if(e.target.innerHTML == 'Undo'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }

        else if(e.target.innerHTML=='x<sup>2</sup>'){
            string = fixPrecision(eval(string));
            string = string**2;
            input.value = string;
        }

        else if(e.target.innerHTML=='√'){
            string = fixPrecision(eval(string));
            string = string ** (1/2);
            input.value = string;
        }

        else if(e.target.innerHTML=='x<sup>3</sup>'){
            string = fixPrecision(eval(string));
            string = string**3;
            input.value = string;
        }

        else if(e.target.innerHTML=='%'){
            string = fixPrecision(eval(string));
            string = string/100;
            input.value = string;
        }

        else{
        string+=e.target.innerHTML;
        input.value = string;}
    })
});
