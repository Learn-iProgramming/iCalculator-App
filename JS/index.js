let calc = document.getElementById('calc'); 
let btns = document.querySelectorAll('button');
let calcValue = '';
for(let item of btns){
    item.addEventListener('click', (e)=>{
        // When click on the button then in button text show in the input box
        btnText = e.target.innerText;
        console.log('Button text is', btnText);
        // When click this button then its gives multiplication
        if(btnText == 'x'){
            btnText = '*';
            calcValue += btnText;
            calc.value = calcValue;
        }
        // When click on the Clear button then clear all text in the input 
        else if(btnText == 'C'){
            calcValue = "";
            calc.value = calcValue;   
        }
        // When click on the '=' operator then gives (+, -, *, /, %) answers
        else if(btnText == '='){
            calc.value = eval(calcValue);
        }
        else{
            calcValue += btnText;
            calc.value = calcValue;
        }
    });
}
