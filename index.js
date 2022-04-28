/* Activity - Employee Rewards - Starter Code */
/* Construct conditional statements that meet the requirements: */
/* ================================== */

/*1. If the employee has 1 year or less with the company, 1 new checking account: Output: 'Ship 50.00 Gift Card'
Otherwise output:'Incentives not met'

/*2. If the employee has 2 years with the company, 3+ new checking accounts:  Output: 'Ship 50.00 Gift Card'
Otherwise output:'Ship $100.00 Gift Card'

/*3. If the employee has 3 years with the company, 2+ new checking accounts:  Output: 'Ship 700.00 Gift Card'
Otherwise output:'Ship $350.00 Gift Card'



Variable declaration
let associateBanker = [56123, 5, 1]; //employeeId, checking, years
let empId = associateBanker[0]       //employee Id number
let empChecking = associateBanker[1] //number of new checking 
let empYears = associateBanker[2];   //years employed

// Continue same pattern/naming convention for each banker
// leaving only one variable declaration section uncommented each 'Run'

*/
let seniorBanker = [77227, 1, 2]
let empId = seniorBanker[0]       
let empChecking = seniorBanker[1]
let empYears = seniorBanker[2];   



//<--Your code goes here-->

if (empYears <= 1){
    if(empChecking === 1){
        console.log("ship $50.00 gift card");
    }
    else {
        console.log("incentives not met");
    }
}
else if (empYears <= 2){
    if(empChecking>=3){
        console.log("send $50.00 gift card");
    }
    else{
        console.log("send $100.00 gift card");
    }
}
else if (empYears <= 3){
    if(empChecking >= 2){
        console.log("send $700.00 gift card");
    }
    else {
        console.log ("send $350.00 gift card");
    }
}
else {
    if (empChecking >=1){
        console.log("send $3500.00 gift card");
    }
    else {
        console.log("send knives");
    }
}   
/*4. If the employee has 4+ years with the company, 1+ new checking accounts:  Output: 'Ship 3500.00 Gift Card'
Otherwise output:'Ship set of knives'
*/
// Output when activity is complete
console.log(`${empId}: Processed`)

    
   