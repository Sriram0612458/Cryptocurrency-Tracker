import './index.css'

const CryptocurrenyItem = props => {
  const {details} = props
  const {currencyName, usdValue, euroValue, id, currencyLogo} = details

  return (
    <li className="main-4">
      <div className="main-4-sub">
        <img src={currencyLogo} className="logo" alt={currencyName} />
        <p className="crypto-name">{currencyName}</p>
      </div>
      <div className="main-sub-4">
        <p className="para11">{usdValue}</p>
        <p className="para22">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrenyItem
