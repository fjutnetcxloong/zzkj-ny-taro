import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtActionSheet, AtCheckbox, AtTabBar, AtButton } from 'taro-ui';
// import './FooterBar.less';

class FooterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedList: [],
      footerOpened: false,
      tabBarCurrent: 0
    }
    this.checkboxOption = [{
      value: 'list1',
      label: 'iPhone X'
    },{
      value: 'list2',
      label: 'HUAWEI P20'
    },{
      value: 'list3',
      label: 'OPPO Find X'
    },{
      value: 'list4',
      label: 'vivo NEX'
    }]
  }
  static externalClasses = ['footer-bar-container']

  footerTitle = () => (
      <View style={{textAlign: 'left'}}>
        <View style={{color:'#333', fontSize: 18}}>这是标题啊兄弟</View>
        <View>这是标题描述啊</View>
      </View>
    )
  

  handleChange = (value) => {
    console.log(value)
    this.setState({
      checkedList: value
    })
  }

  handleClose = () => {
    this.setState({
      footerOpened: false,
    })
  }

  handleClick = (value) => {
    if(value === 1 && this.props.cartNum > 0){
      this.setState({
        footerOpened: true
      })
    }
  }

  payNow = () => {
    Taro.navigateTo({url: '/pages/orders/index'})
  }

  render() {
    return (
      <View className='footer-bar-container'>
        <View>   
          <AtTabBar
            color={this.props.cartNum > 0 ? '#333' : '#999'}
            selectedColor={this.props.cartNum > 0 ? '#eb640a' : '#999'}
            fixed
            tabList={[
              { title: this.props.cartNum > 0 ? '￥' + this.props.cartTotalPrice : '免排队', iconType: 'shopping-cart', text: this.props.cartNum > 0 ? this.props.cartNum : '' },
              { title: this.props.cartNum > 0 ? '选好了' : '请先点餐' }
            ]}
            onClick={this.handleClick}
            current={this.state.tabBarCurrent}
          />
        </View>
        <AtActionSheet isOpened={this.state.footerOpened} title={this.footerTitle} onClose={this.handleClose}>
            <AtCheckbox 
              options={this.checkboxOption}
              selectedList={this.state.checkedList}
              onChange={this.handleChange}
            />
            <View className='select-item-container'>
              <AtButton onClick={this.payNow} type='primary'>去付款</AtButton>
            </View>
        </AtActionSheet>
      </View>
    );
  }
}

export default FooterBar;