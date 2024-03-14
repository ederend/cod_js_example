let price = 3.26;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

cid =[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

let money_map = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
const displayChange = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cashDrawer = document.getElementById('cash-drawer-display');
 
priceScreen.innerHTML = 'Price: '+price
cashDrawer.innerHTML = cid

function  yt(){
const money = document.getElementById('cash').value;

if(money < price){
alert('Customer does not have enough money to purchase the item');
cash.value = '';
}
 else if(money - price > money_in_dra())
 {
displayChange.innerHTML =  'Status: INSUFFICIENT_FUNDS';
cash.value = '';
}
else if(money == price){
  displayChange.innerHTML =  'No change due - customer paid with exact cash';
cash.value = '';
}
else {
let sd = money - price;
if(sd == money_in_dra()){displayChange.innerHTML =  'Status: CLOSED '}else{
displayChange.innerHTML =  'Status: OPEN ';}
 
for (let i = 1; i < cid.length+1; i++) {
  if(sd >= cid[cid.length-i][1]){
    displayChange.innerHTML +=  cid[cid.length-i][0]+': $'
    + cid[cid.length-i][1]+' ';
    sd -= cid[cid.length-i][1];
    cid[cid.length-i][1]=0;
  } else if((sd < cid[cid.length-i][1]) && (sd > money_map[i-1])){
    
     displayChange.innerHTML +=  cid[cid.length-i][0]+': $'; 
     let res = 0;
     sd= parseFloat(sd.toFixed(2))
   
     do{
      sd -= money_map[i-1];
       sd= parseFloat(sd.toFixed(2))
      cid[cid.length-i][1]-= money_map[i-1];
       res +=  money_map[i-1];
        
        
     }
    while(sd >= money_map[i-1]  )
    displayChange.innerHTML += res;
 
  }    
 

}if(sd!=0){
    displayChange.innerHTML =  'Status: INSUFFICIENT_FUNDS';
  }

}
 
}


function  money_in_dra(){
  let i = 0;
cid.forEach((element)=> (parseFloat( (i+=element[1]).toFixed(2)) ))
return parseFloat(i.toFixed(2))
 }
cashDrawer.innerHTML = "money";