// const zipCode = document.getElementId(zipCode).value;
// const dependants = documents.getElementId(dependants).value;
// const rank = documents.getElementId(rank).value;
// const homePrice = document.getElementById('amountToBorrow').value;
// const fico = document.getElementById('fico').value;
// const interestRate = document.getElementById('interestRate').value;


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
let iRR = interestRate*100;
  document.getElementById('interestRate').value = parseInt(iRR);
  }
}

let cI = document.getElementById('calculate');

cI.addEventListener('click', calcInterest);


function calc() {
// A = P*{r(1+r)**n/(1+r)**n-1} A: montly P:loan amount r:interest rate n:periods 
  let periods = 360;
  let down = parseInt(document.getElementById('downPayment').value);
  let homePrice = parseInt(document.getElementById('amountToBorrow').value);
  let interestRate = 0.05;
  // calcInterest();
  //let value = (homePrice-down)*{[interestRate*(1+interestRate)**periods]/([(1+r)**periods]-1)};
  let value = (homePrice-down)/ interestRate;
  monthly = value/periods;
  document.getElementById('monthly')= monthly;
  document.getElementById('result') = value;
}


// function returnBAH(zipCode, rank, dependants){
//     switch (zipCode>31800 && zipCode <36900) {
// //Fort Campbell Zip Codes
//   case (zipCode>42260 && zipCode<42230 && rank===E1 || rank===E2 || rank===E3 && dependants===yes):
//     return "$1020"// code block
//     break;
//   case (zipCode>42260 && zipCode<42230 && rank===E1 || rank===E2 || rank===E3 && dependants===no):
//     return "$804"// code block
//   case (zipCode>42260 && zipCode<42230 && rank===E2 && dependants===yes):
//     return "$";
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
// }







// $('.login-button').on('click', () => {
//     $('.login-form').toggle();
//   });
// You may only be able to do large Army installations in the begining: Benning, Hood, Campbell, 
// JBLM, Hawaii, Italy, Germany, Polk Irwin, Richardson, Waynewrigfht

//   int zip;
//   String rank;
//   boolean dependents;

  

//   function calcBAH(zip, rank, dependents){

//     let rankUpper = toUppercase(rank);

//     if(zip=123431232111|| zip=321423 || zip=321321421421211){
//         zip=Benning;
//     } else if (zip==={

//     } else if (zip===32182 || zip=== 8977943|| zip=== 94940){
//         zip=Campbell;
//     } else {console.log("Invalid Zipcode")}
  
  
//   switch(zip, rankUpper, dependents) {
//     case x:
//       return benning.e5.dependents;// code block
//       break;
//     case y:
//       return return // code block
//       break;
//     default:
//       // code block
//   }

// }