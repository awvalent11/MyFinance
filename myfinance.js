const zipCode = document.getElementId(zipCode).value;
const dependants = documents.getElementId(dependants).value;
const rank = documents.getElementId(rank).value;


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
  case (zipCode>42260 && zipCode<42230 && rank===E2 && dependants===yes):
    return "$";
  break;
  case (zipCode>42260 && zipCode<42230 && rank===E2 && dependants===yes):
    return "$"; 
  case (zipCode>42260 && zipCode<42230 && rank===E2 && dependants===yes):
    return "$";
  break;
  default:
    return "Zip Code not supported" // code block
}







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