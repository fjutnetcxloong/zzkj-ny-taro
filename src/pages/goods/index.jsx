

import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { AtNoticebar, AtTabs, AtTabsPane, AtSearchBar, AtButton, AtFloatLayout } from 'taro-ui';
import { View } from '@tarojs/components'
import FooterBar from './components/FooterBar';
import GoodItem from './components/GoodItem';
import { add, minus } from '../../actions/counter';
import './index.less';

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add (data) {
    dispatch(add(data))
  },
  dec (data) {
    dispatch(minus(data))
  }
}))
class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      // isOpened: false,
      onceOpened: false,
      goodsInfo: [
        {
          title: '10个煎包', num: 10, price: 16, buyNum: 0, goodId: 123
        },
        {
          title: '20个煎包', num: 10, price: 16, buyNum: 0, goodId: 124
        },
        {
          title: '30个煎包', num: 10, price: 16, buyNum: 0, goodId: 125
        }
      ],
      cartNum: 0, //购物车商品数量
      cartTotalPrice: 0, //总价
    }
  }

  // componentWillReceiveProps (nextProps) {
  //   console.log(this.props, nextProps)
  // }
  componentWillMount() {
    // this.setState({
    //   onceOpened: true
    // })
  }
  // componentWillUnmount () { }

  // componentDidShow () { }

  // componentDidHide () { }

  config = {
    navigationBarTitleText: '购物'
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

   //购物车-1
   delCart = (index) => {
    const {goodsInfo, cartNum, cartTotalPrice} = this.state;
    let newCartNum = cartNum;
    let newCartTotalPrice = cartTotalPrice;
    if(goodsInfo[index].buyNum > 0) {
      newCartNum = cartNum - 1;
      goodsInfo[index].buyNum--;
      newCartTotalPrice -= goodsInfo[index].price
      this.props.dec(goodsInfo[index].price)
    }
    this.setState({
      goodsInfo,
      cartNum: newCartNum,
      cartTotalPrice: newCartTotalPrice
    })
  }

  //购物车+1
  addCart = (index) => {
    const {goodsInfo, cartNum, cartTotalPrice} = this.state;
    goodsInfo[index].buyNum++;
    console.log(goodsInfo[index].buyNum, 'dasdsa');
    const newCartNum = cartNum + 1;
    const newCartTotalPrice = cartTotalPrice + goodsInfo[index].price;
    this.setState({
      goodsInfo,
      cartNum: newCartNum,
      cartTotalPrice: newCartTotalPrice
    })
    this.props.add(goodsInfo[index].price)
  }
  //前往详情页
  goToDetail = () => {
    Taro.navigateTo({url: '/pages/goods/Detail'})
  }

  //订单详情页
  orderDetail = () => {
    Taro.navigateTo({url: '/pages/orders/OrderDetail'})
  }

  //搜索
  goSearch = () => {
    Taro.navigateTo({url: '/pages/search/searchPage'})
  }

  render () {
    return (
      <View className='index-container'>
          <View onClick={this.orderDetail}>
            <AtNoticebar className='notice-container'>您已下单，点击查看订单详情</AtNoticebar>
          </View>
          <View>
            <AtSearchBar onFocus={this.goSearch} />
          </View>
          <View className='tabs-container'>
            <AtTabs
              current={this.state.current}
              scroll
              height='400px'
              tabDirection='vertical'
              tabList={[
                { title: '标签页1' },
                { title: '标签页2' },
                { title: '标签页3' },
                { title: '标签页4' },
                { title: '标签页5' },
                { title: '标签页6' },
              ]}
              onClick={this.handleClick.bind(this)}
            >
              <AtTabsPane tabDirection='vertical' current={this.state.current} index={0}>
                <View className='pane-container'>
                  {this.state.goodsInfo.map((item, index) => <GoodItem addCart={this.addCart} goToDetail={this.goToDetail} delCart={this.delCart} key={item.goodId} goodsItem={item} goodsIndex={index} />)}
                </View>
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
                <View style='font-size:18px;text-align:center;height:200px;'>标签页二的内容</View>
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={this.state.current} index={2}>
                <View style='font-size:18px;text-align:center;height:200px;'>标签页三的内容</View>
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={this.state.current} index={3}>
                <View style='font-size:18px;text-align:center;height:200px;'>标签页四的内容</View>
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={this.state.current} index={4}>
                <View style='font-size:18px;text-align:center;height:200px;'>标签页五的内容</View>
              </AtTabsPane>
              <AtTabsPane tabDirection='vertical' current={this.state.current} index={5}>
                <View style='font-size:18px;text-align:center;height:200px;'>标签页六的内容</View>
              </AtTabsPane>
            </AtTabs>
          </View>
        <AtFloatLayout isOpened={this.state.onceOpened} className='float-mask-container' title='何时来取餐'>
          <View>
            <View>仓山镇对湖街三亚大厦</View>
            <View>步行156米到达</View>
          </View>
          <View className='time-container-fluid'>
            <View className='time-container'>
              <View className='time-item'>
                <View>14:20</View>
                <View>15分钟后</View>
              </View>
              <View className='time-item'>
                <View>14:20</View>
                <View>15分钟后</View>
              </View>
              <View className='time-item'>
                <View>14:20</View>
                <View>15分钟后</View>
              </View>
              <View className='time-item'>
                <View>14:20</View>
                <View>15分钟后</View>
              </View>
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <AtButton className='satrt-order' size='normal'>开始点餐</AtButton>
          </View>
        </AtFloatLayout>
        <FooterBar footer-bar-container='footer-bar-container' cartNum={this.props.counter.cartNum} cartTotalPrice={this.props.counter.cartTotalPrice} />
      </View>
    )
  }
}

export default Index;
