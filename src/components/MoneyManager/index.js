import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    transactionList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  onDeleteValue = id => {
    const {transactionList} = this.state

    const updatedValue = transactionList.filter(each => each.id !== id)

    this.setState({transactionList: updatedValue})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {title, amount, optionId} = this.state
    const typeOption = transactionTypeOptions.find(each => each.id === optionId)

    const {displayText} = typeOption

    const newTransaction = {
      id: uuidv4(),
      title,
      amount: parseInt(amount),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeOptionValue = event => {
    this.setState({optionId: event.target.value})
  }

  onChangeValueTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeValueAmount = event => {
    this.setState({amount: event.target.value})
  }

  render() {
    const {title, amount, transactionList, optionId} = this.state
    return (
      <div className="bg-container">
        <div className="top-cont">
          <h1 className="top-heading">Hi, Richard</h1>
          <p className="top-paragraph">
            Welcome back to your
            <span className="blue-text">Money Manager</span>
          </p>
        </div>
        <MoneyDetails />
        <div className="application-form">
          <h1 className="heads">Add Transaction</h1>
          <form className={this.onSubmitForm}>
            <label className="label" htmlFor="title">
              TITLE
            </label>
            <br />
            <input
              id="title"
              className="input"
              placeholder="TITLE"
              value={title}
              onChange={this.onChangeValueTitle}
            />

            <label className="label" htmlFor="amountId">
              AMOUNT
            </label>
            <br />
            <input
              id="amountId"
              className="input"
              placeholder="AMOUNT"
              value={amount}
              onChange={this.onChangeValueAmount}
            />

            <label className="label" htmlFor="type">
              TYPE
            </label>
            <br />
            <select
              className="input"
              id="type"
              onChange={this.onChangeOptionValue}
              value={optionId}
            >
              {transactionTypeOptions.map(eachTrasaction => (
                <option
                  key={eachTrasaction.optionId}
                  value={eachTrasaction.optionId}
                >
                  {eachTrasaction.displayText}
                </option>
              ))}
            </select>

            <button type="submit" className="button">
              Add
            </button>
          </form>
        </div>
        <div className="history-container">
          <div className="history">
            <h1 className="history-head">History</h1>
            <div className="items">
              <p className="title">Title</p>
              <p className="title-para">Amount</p>
              <p className="title-para">Type</p>

              <ul className="item-container">
                {transactionList.map(each => (
                  <TransactionItem
                    key={each.id}
                    eachTransaction={each}
                    onDeleteValue={this.onDeleteValue}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
