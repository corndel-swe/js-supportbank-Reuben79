import { Command } from 'commander'
import transactionController from './transaction.js'

const program = new Command()

program.version('0.1.0').description('SupportBank')

program.addCommand(transactionController)

program.parse(process.argv)