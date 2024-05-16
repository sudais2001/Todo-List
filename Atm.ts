import inquirer from "inquirer"
let myBalance = 0;
let isContinue = true;
const pinCode = 1234;

const message = " Wellcome  to ATM";
console.log(message);


let pin_ans = await inquirer.prompt({
  type:"number",
  name:"ans",
  message: "Please Enter Pin Code"
})



if(pin_ans.ans === 1234){
  do{
    let ans= await inquirer.prompt({
      type: "list",
      name: "list",
      message: "Select Any Option",
      choices: ["Deposit", "withdraw", "Fast_cash", "Balance_chack"]
    })
  
  //   ---------------------------Deposit---------------------------------------------------
  if(ans.list === "Deposit"){
      let ans = await inquirer.prompt({
          type:"number",
          name:"Deposit_amount",
          message: "Please Enter Your Amount"
      })
      if(ans.Deposit_amount > 0){
          myBalance = myBalance + ans.Deposit_amount
          console.log(myBalance);
      }
  }
  
  // ---------------------------------Withdraw--------------------------------------------------------------
  else if(ans.list === "withdraw"){
    let ans = await inquirer.prompt({
      type: "number",
      name: "withdraw_amount",
      message: "Please enter amount"
    })
    if(ans.withdraw_amount <=myBalance){
      myBalance = myBalance - ans.withdraw_amount
      console.log(myBalance);
    }else{
      console.log("Not Enough Money");
      
    }
  }
  
  // ----------------------------------Fast Cash-------------------------------------------
  
  else if(ans.list === "Fast_cash"){
    let ans = await inquirer.prompt({
      type: "list",
      name: "Fast_cash",
      message: "Please Select One",
      choices: ["500","1000","2000"]
    })
  
    if(ans.Fast_cash <= myBalance){
    if(ans.Fast_cash ==="500"){
      myBalance -= ans.Fast_cash
      console.log(myBalance);
  
  
    }else if(ans.Fast_cash ==="1000"){
        myBalance -= ans.Fast_cash
        console.log(myBalance);         
  
   }else if(ans.Fast_cash ==="2000"){
    myBalance -= ans.Fast_cash
    console.log(myBalance);
    }
   }
  }
  
  // --------------------------------Chack_Balance--------------------------------------------
  else if(ans.list ==="Balance_chack"){
    console.log(`your balance is: ${myBalance}`);
  
  }
  // --------------------------------------While_Condition-------------------------------------------
  let while_ans = await inquirer.prompt({
    type: "confirm",
    name: "condition",
    message: "Do you want to continue. "
  })
  if(while_ans.condition === false){
    isContinue = false
  }
  
  } while (isContinue);
  
}
else{
  console.log("invalid pin code")
}


