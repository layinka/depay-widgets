import _ from 'lodash';
import CloseDialogComponent from '../components/CloseDialogComponent';
import DisplayTokenAmount from '../utils/DisplayTokenAmount';
import GoBackDialogComponent from '../components/GoBackDialogComponent';
import LocalCurrency from '../utils/LocalCurrency';
import NavigateStackContext from '../contexts/NavigateStackContext';
import React from 'react';
import Slider from 'react-rangeslider';
import TokenIconComponent from '../components/TokenIconComponent';
import { SLIPPAGE } from '../utils/Constants';

class ChangeTokenAmountDialog extends React.Component {
  state = {
    amount: null
  }

  constructor(props) {
    super(props);

    let maxAmountRoute = _.sortBy(props.routes, function(route){ return parseInt(route.maxAmount,10) })[props.routes.length-1];

    this.state = {
      amount: parseInt(props.amount),
      maxAmount: (parseInt(maxAmountRoute.maxAmount)/SLIPPAGE),
      maxAmountRoute: maxAmountRoute,
    };
  }

  componentWillUnmount() {
    if(this.props.amount !== this.state.amount) {
      this.props.change(this.state.amount);
    }
  }

  changeAmount(val) {
    this.setState({
      amount: val
    })
  }

  changeInputAmount(event){
    let amount = parseInt(event.target.value, 10);
    if(!isNaN(amount)) {
      this.setState({
        amount: parseInt(DePay.ethers.utils.parseUnits(amount.toString(), this.props.token.decimals))
      }) 
    }
  }

  render() {
    const min = parseInt(DePay.ethers.utils.formatUnits((10**this.props.token.decimals).toLocaleString('fullwide', {useGrouping:false}), this.props.token.decimals).toString());
    const max = parseInt(DePay.ethers.utils.formatUnits(this.state.maxAmount.toLocaleString('fullwide', {useGrouping:false}), this.props.token.decimals).toString());
    return (
      <NavigateStackContext.Consumer>
        {navigate => (
          <div className='Dialog ChangeTokenAmountDialog'>
            <div className='DialogHeader'>
              <GoBackDialogComponent/>
              <CloseDialogComponent/>
              <h1 className='FontSizeMedium TextAlignCenter'>Change purchase amount</h1>
              <div className='FontSizeMedium FontWeightBold TextAlignCenter'>
                { this.props.token.symbol }
              </div>
            </div>
            <div className='DialogBody HeightAuto'>

              <div className='PaddingSmall'>

                <div className='PaddingTopSmall TextAlignCenter'>
                  <div className='FontSizeLarge'>
                    <input max={max} min={min} step={min} className='Input FontSizeMedium TextAlignCenter' type="number" name="amount" value={ parseInt(DisplayTokenAmount(this.state.amount.toLocaleString('fullwide', {useGrouping:false}), this.props.token.decimals, ''), 10) } onChange={this.changeInputAmount.bind(this)}/>
                  </div>
                </div>

                <div className='PaddingBottomSmall'>
                  <Slider
                    min={10**this.props.token.decimals}
                    max={this.state.maxAmount}
                    step={10**this.props.token.decimals}
                    value={this.state.amount}
                    onChange={this.changeAmount.bind(this)}
                  />
                </div>

                <div className='TextAlignCenter TextGrey PaddingBottomSmall'>
                  Max. purchase for<br/>
                  {DisplayTokenAmount((parseInt(this.state.maxAmountRoute.balance) / SLIPPAGE).toLocaleString('fullwide', {useGrouping:false}), this.state.maxAmountRoute.token.decimals, this.state.maxAmountRoute.token.symbol)}
                  <TokenIconComponent
                    className='small'
                    title={ this.state.maxAmountRoute.token.name }
                    src={ this.state.maxAmountRoute.token.logoURI }
                  />
                  { this.state.maxAmountRoute.symbol }
                </div>

              </div>
            </div>
            <div className='DialogFooter'>
              <button className='CallToAction MainAction' onClick={ ()=>navigate('back') }>
                Done
              </button>
              <div className='PoweredBy'>
                <a target='_blank' rel='noopener noreferrer' href='https://depay.app' className='PoweredByLink' title='Powered by DePay: Decentralized Payments'>
                  by DePay
                </a>
              </div>
            </div>
          </div>
        )}
      </NavigateStackContext.Consumer>
    )
  }
}

export default ChangeTokenAmountDialog;
