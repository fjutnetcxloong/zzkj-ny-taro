import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { AtList, AtListItem, AtCard, AtTabBar } from 'taro-ui';
import iconImg from '../../assets/images/sq4.png';
import './index.less';
import TimePick from './components/TimePick';

class ConfirmOrder extends Component {
  render() {
    return (
      <View className='order-container'>
        <AtList>
          <AtListItem title='lung壹号煎包' note='上三路三亚大厦，1535号' />
          <AtListItem title='就餐方式' extraText='外带' />
          <TimePick />
        </AtList>
        <AtCard
          title='共1份菜品'
        >
          <View className='oreder-container-body'>
            <View className='oreder-body-left'>
              <View>
                <Image src={iconImg} style='width:50px;' mode='widthFix' />
              </View>
              <View style={{marginLeft: 10}}>
                <View>拌粉干</View>
                <View>
                  <Text>x1</Text>
                  <Text>花生酱</Text>
                  <Text>(大)</Text>
                </View>
              </View>
            </View>
            <View>￥9</View>
          </View>
        </AtCard>
        <AtTabBar
          fixed
          tabList={[
                { title: '应付：￥9' },
                { title: '确认下单' }
              ]}
          // onClick={this.handleClick}
          // current={this.state.tabBarCurrent}
        />
      </View>
    )
  }
}

export default ConfirmOrder;