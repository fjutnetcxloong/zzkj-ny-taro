import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { AtButton, AtList, AtListItem } from 'taro-ui';
import img2 from '../../assets/images/quan.png';
import img1 from '../../assets/images/sq2.png';
import './index.less';

class OrderDetail extends Component {
  render() {
    return (
      <View className='order-detail-container'>
        <View className='order-detail-top'>
          <Image src={img2} style='width:100%;' mode='widthFix' />
          <View>
            <View className='time-out'>
              <Image src={img1} style='width: 50px' mode='widthFix' />
              <View style={{marginLeft: '10px'}}>
                <View className='timing-text1'>等待十五分钟</View>
                <View className='timing-text2'>超过十分钟未付款作废</View>
              </View>
            </View>
            <View className='btn-container'>
              <AtButton type='secondary'>取消订单</AtButton>
              <AtButton type='primary'>立即支付</AtButton>
            </View>
          </View>
        </View>
        <View className='order-detail-mid'>
          <AtList>
            <AtListItem title='壹号煎包' extraText='写点评' />
            <AtListItem title='猪肚汤' note='x1' extraText='￥9' />
            <AtListItem title='菜品价格' extraText='￥9' />
            <AtListItem title='订单编号：586468' note='下单时间：2019:02:08' />
          </AtList>
        </View>
        <View></View>
      </View>
    )
  }
}

export default OrderDetail;