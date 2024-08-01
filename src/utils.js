export const dollarValueCheck = (num) => {
    let regex = /^\d{0,3}(\.\d{0,2})?$/;
  
if(regex.test(num)){
    let check = true;
    return parseFloat((Math.round(num * 100) / 100).toFixed(2));


}else{
    console.log('regex failure');
    return false;
}

}

export const formatNum = (num) => {
   return 
}