export const dollarValueCheck = (num) => {
    let regex = /^\d{0,3}(\.\d{0,2})?$/;
  
if(regex.test(num)){
    let check = true;
    let front = num.split('.')[0];
    let dec = num.split('.')[1];
    if(dec && dec.length > 2){
        check = false
    }
    if(front && front.length > 3){
        check = false;
    }
    if(!dec && num.length > 3){
       
            num = num.slice(3, -2) + '.' + num.slice(3);
       
    }

   if(check === true){
    return parseFloat((Math.round(num * 100) / 100).toFixed(2));
}else {
    return false
}
}else{
    return false;
}

}

export const formatNum = (num) => {
   return 
}