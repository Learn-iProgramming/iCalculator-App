let calc = document.getElementById('calc'); 
btns = document.querySelectorAll('button');
let calcValue = '';
for(item of btns){
    item.addEventListener('click', (e)=>{
        // When click on the button then in button text show in the input box
        btnText = e.target.innerText;
        console.log('Button text is', btnText);
        // Multiplication
        if(btnText == 'x'){
            btnText = '*';
            calcValue += btnText;
            calc.value = calcValue;
        }
        else if(btnText == 'C'){
            calcValue = "";
            calc.value = calcValue;
            
        }
        else if(btnText == '='){
            calc.value = eval(calcValue);
        }
        else{
            calcValue += btnText;
            calc.value = calcValue;
        }
    });
}