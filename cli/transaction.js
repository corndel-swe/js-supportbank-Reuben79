import { Command } from 'commander'

const transactionController = new Command('transaction')

transactionController
  .command('log <from> <to> <amount>')
  .description('Log transaction data to the console')
  .action((from, to, amount) => {
    console.log(`Transaction from ${from} to ${to} for amount ${amount}`)
  })

//added below
  const billCommand = new Command('bill'); 
  
  billCommand 
  .command('split <total> <people>') 
  .description('Split the total bill among the number of people') 
  .action((total, people) => { 
    const amountPerPerson = (total / people).toFixed(2)
    console.log(`Each person owes £${amountPerPerson}`)
  })

  transactionController.addCommand(billCommand) //added

  //added below

  const currencyCommand =new Command('currency')

  //Exchnage rate at 11/12/2024

  const exchangeRates ={
    USD: { GBP: 0.78, EUR: 0.95 },
    GBP: { USD: 1.28, EUR: 1.21 },
    EUR: { USD: 1.05, GBP: 0.82 },
  }

  currencyCommand 
  .command('convert <amount> <from> <to>') 
  .description('Convert currency from one to another') 
  .action((amount, from, to) => { 
    const rate = exchangeRates[from]?.[to] 
    if (rate) { 
      const convertedAmount = (amount * rate).toFixed(2) 
      console.log(`${amount} ${from} is equivalent to ${convertedAmount} ${to}`) 
    } else { 
      console.log(`Conversion rate from ${from} to ${to} not found.`) 
    } 
  }) 
  
  transactionController.addCommand(currencyCommand);

  // Interest 4%
  // I = (4/100) * £1500
  // I = 60
  // I over 12 years = 60 * 12
  // I over 12 years = £720  + £1500 
  // = £2220 

  //Added below

  const investCommand = new Command('invest'); 
  investCommand 
  .command('simple <principal> <rate> <years>') 
  .description('Calculate the projected value of an investment with simple interest') 
  .action((principal, rate, years) => { 
    const projectedValue = principal * (1 + (rate / 100) * years); 
    console.log(`The projected value of the investment with simple interest is £${projectedValue.toFixed(2)}`); 
  }); 
  
  investCommand 
  .command('compound <principal> <rate> <years>') 
  .description('Calculate the projected value of an investment with compound interest') 
  .action((principal, rate, years) => { 
    const projectedValue = principal * Math.pow((1 + (rate / 100)), years) 
    console.log(`The projected value of the investment with compound interest is £${projectedValue.toFixed(2)}`) 
  }) 
  
  transactionController.addCommand(investCommand);

export default transactionController
