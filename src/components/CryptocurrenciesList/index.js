import Loader from 'react-loader-spinner'
import CryptocurrenyItem from '../CryptocurrencyItem'
import {Component} from 'react'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {crypto: [], isStatus: true}

  componentDidMount() {
    this.fetching()
  }

  fetching = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const modifiedData = data.map(each => {
      const result = {
        currencyName: each.currency_name,
        usdValue: each.usd_value,
        euroValue: each.euro_value,
        id: each.id,
        currencyLogo: each.currency_logo,
      }
      return result
    })
    this.setState({crypto: modifiedData, isStatus: false})
  }

  rendering = () => {
    const {crypto} = this.state
    return (
      <div className="main-div">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="main-image"
        />
        <div className="main-2">
          <div className="main-2-sub">
            <p>Coin Type</p>
            <div className="main-2-sub-1">
              <p className="para">USD</p>
              <p className="para">EURO</p>
            </div>
          </div>
          <ul>
            {crypto.map(each => (
              <CryptocurrenyItem details={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
  render() {
    const {isStatus} = this.state
    const obj = this.rendering()

    return (
      <div>
        {isStatus ? (
          <div data-testid="loader" className="loader-logo">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          obj
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
