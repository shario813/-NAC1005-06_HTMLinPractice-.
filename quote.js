const residentialButton = document.getElementById("residential-button");

const commercialButton = document.getElementById("commercial-button");
const industrialButton = document.getElementById("industrial-button");

const divApartments = document.getElementById("div-apartments");
const divfloors = document.getElementById("div-floors");
const divNumberElevator = document.getElementById("div-Number of Elevator");
const divMaximumOccupancy = document.getElementById("div-maximum Occupancy");

//user input 
const inputapartments = document.getElementById("apartments.input");
const inputnumberfloors = document.getElementById("numberfloors.input");
const inputnumberelevators = document.getElementById("numberelevators.input");
const inputmaximumoccupancy = document.getElementById("maximumoccupancy.input");

//
const standard = document.getElementById("standard");
const premium = document.getElementById("premium");
const excelium = document.getElementById("excelium");
const ElevatorRequired = document.getElementById("Elevator Required");
const CostPerUnit = document.getElementById("Cost Per Unit");
const InstillationFees = document.getElementById("Instillation Fees");
const Totalcost = document.getElementById("Total cost");

divApartments.style.display = "none";
divfloors.style.display = "none";
divNumberElevator.style.display = "none";
divMaximumOccupancy.style.display = "none";

residentialButton.addEventListener("click", () => {
  divfloors.style.display = "block";
  divApartments.style.display = "block";

  divMaximumOccupancy.style.display = "none";
  divNumberElevator.style.display = "none";
});
commercialButton.addEventListener("click", () => {
  divfloors.style.display = "block";
  divMaximumOccupancy.style.display = "block";
  divApartments.style.display = "none";
  divNumberElevator.style.display = "none";
});
industrialButton.addEventListener("click", () => {
  divApartments.style.display = "none";
  divMaximumOccupancy.style.display = "none";
  divNumberElevator.style.display = "block";
  divfloors.style.display = "none";
});
const industrial =() => {
 ElevatorRequired.value=inputnumberelevators.value










}












const residentialMath = () =>{

    //getting the value (what the user typed into) of our apartments input field
   const numberOfApartments = inputapartments.value
    
    //getting the value (what the user typed into) of our floors input field
    const numberOfFloors = inputnumberfloors.value
    
    const averageApartmentsPerFloor = numberOfApartments/numberOfFloors
    
    const requiredElevators = averageApartmentsPerFloor/6
    
    const elevatoBanks = numberOfFloors/20
    
    const totalElevators = requiredElevators*elevatoBanks
    ElevatorRequired.value=totalElevators
 }

    
const  Commercial = () => {

const maximumoccupancy=inputmaximumoccupancy.value
const numberOfFloors = inputnumberfloors.value
const TotalnumberofOccupancy=numberOfFloors*maximumoccupancy
const elevatorRequired=TotalnumberofOccupancy/200
const banks=numberOfFloors/10
const totalElevators= banks*elevatorRequired +banks

ElevatorRequired.value=totalElevators






}

inputnumberelevators.addEventListener("input",()=> {

industrial()

});


inputapartments.addEventListener("input",() => {

residentialMath ()



});

inputmaximumoccupancy.addEventListener("input", ()=> {

    Commercial ()



});
inputnumberfloors.addEventListener("input", () => {
 // needs if statment


})