import './index.css'

const MoneyDetails = () => {
  return (
    <div className="money-container">
      <div className="balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div className="balance-cont">
          <p className="balance-head">Your Balance</p>
          <p className="para">Rs 0</p>
        </div>
      </div>

      <div className="income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div className="balance-cont">
          <p className="balance-head">Your Balance</p>
          <p className="para">Rs 0</p>
        </div>
      </div>

      <div className="expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div className="balance-cont">
          <p className="balance-head">Your Balance</p>
          <p className="para">Rs 0</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
