// const zipCode = document.getElementId(zipCode).value;
// const dependants = documents.getElementId(dependants).value;
// const rank = documents.getElementId(rank).value;
// const homePrice = document.getElementById('amountToBorrow').value;
// const fico = document.getElementById('fico').value;
// const interestRate = document.getElementById('interestRate').value;

document.getElementById('calculate').addEventListener('click', calc);
document.getElementById('calculate').addEventListener('click', calcInterest); 
document.getElementById('retirementCalculate').addEventListener('click', retirementCalc);

//Function to calculate interest rate based on 30 year fixed rate mortgage with associated FICO score. 
function calcInterest(){
  let interestRate;
  let fico = parseInt(document.getElementById('fico').value);
  switch (fico){

  case (775<=fico<=850):
  interestRate=0.0275;
  break;
  case (700<=fico<=774):
  interestRate=0.035;
  break;
  case (600<=fico<=699):
  interestRate=0.045;
  break;
  case (fico<=599):
  interestRate=0.07;
  break;
  default:
  interestRate = 0.08;
  }
  let iRR = interestRate*100;  
  document.getElementById('interestRate').value = parseInt(iRR);
  
}




//Function to calculate mortgage payments with a given down payment, FICO score and interest rate, and payment period
function calc() {
// A = P*{r(1+r)**n/(1+r)**n-1} A: montly P:loan amount r:interest rate n:periods 
  let periods = 360;
  let down = parseInt(document.getElementById('downPayment').value);
  let homePrice = parseInt(document.getElementById('amountToBorrow').value);
  
  calcInterest();
  let mortgage = (homePrice-down)*((interestRate*(1+interestRate)**periods)/(((1+r)**periods)-1));
  let value = 1000;
  //let monthly = 100;
  //document.getElementById('interestRate')= monthly;
  document.getElementById('result').value = parseInt(value);
}


// You may only be able to do large Army installations in the begining: Benning, Hood, Campbell, 
// JBLM, Hawaii, Italy, Germany, Polk Irwin, Richardson, Waynewrigfht
function returnBAH(zipCode, rank, dependants){
     switch (zipCode>31800 && zipCode <36900) {
     //Fort Campbell Zip Codes
     case (zipCode>42260 && zipCode<42230 && rank===E1 || rank===E2 || rank===E3 && dependants===yes):
     return "$1020"// code block
     break;
     case (zipCode>42260 && zipCode<42230 && rank===E1 || rank===E2 || rank===E3 && dependants===no):
     return "$804"// code block
     case (zipCode>42260 && zipCode<42230 && rank===E2 && dependants===yes):
     return "$";
//   case (zipCode>42260 && zipCode<42230 && rank===E2 && dependants===yes):
//     return "$";
//   break;
//   case (zipCode>42260 && zipCode<42230 && rank===E2 && dependants===yes):
//     return "$"; 
//   case (zipCode>42260 && zipCode<42230 && rank===E2 && dependants===yes):
//     return "$";
//   break;
//   default:
//     return "Zip Code not supported" // code block
}


// Retirement Calculator
function retirementCalc() {
  let currentAge = parseInt(document.getElementById('currentAge').value);
  let retireAge = parseInt(document.getElementById('retireAge').value);
  let dead = 85;
  let yearlyRetirementGoal = parseInt(document.getElementById('yearlyRetirementGoal').value); 
  let retirementGoal;
  let monthlySavings;
  let years = parseInt(retireAge)-parseInt(currentAge);
  // Calculation 
  if (retireAge>=85){
  return "Invalid Age entry"
  } else {

  retirementGoal = yearlyRetirementGoal*(dead-retireAge);
  monthlySavings = retirementGoal / (years*12); 

  return document.getElementById('result').value = monthlySavings;
  }
}