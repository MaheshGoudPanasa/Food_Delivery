
const addButtons=document.getElementsByClassName('add-tocart')
let sumOfNonvegContainer=document.getElementById('sumOfNonveg');
let sumOfNonveg=0;
sumOfNonvegContainer.innerHTML=`sum=${sumOfNonveg}`;
for(let i=0;i<addButtons.length;i++){
    addButtons[i].addEventListener('click',()=>{
        addButtons[i].classList.toggle('selected');
        let price=parseFloat(addButtons[i].getAttribute('price'));
        if(addButtons[i].classList.contains('selected')){
            sumOfNonveg+=price;
        }else sumOfNonveg-=price;
        sumOfNonvegContainer.innerHTML=`sum=${sumOfNonveg}`;
    })
}

const addvegButtons=document.getElementsByClassName('add-tocartveg')
let vegSumContainer=document.getElementById('vegSum')
let vegSum=0;
vegSumContainer.innerHTML=`sum=${vegSum}`
for(let i=0;i<addvegButtons.length;i++){
    addvegButtons[i].addEventListener('click',()=>{
        addvegButtons[i].classList.toggle('selected');
        let price=parseFloat(addvegButtons[i].getAttribute('price'));
        if(addvegButtons[i].classList.contains('selected')){
            vegSum+=price;
        }else vegSum-=price;
        vegSumContainer.innerHTML=`sum=${vegSum}`;
    })
}
