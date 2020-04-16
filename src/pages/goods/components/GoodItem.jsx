import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image} from '@tarojs/components';
// import { AtIcon } from 'taro-ui';
import img1 from '../../../assets/images/sq2.png';
import './GoodItem.less';

class GoodItem extends Component {
  render() {
    const { goodsItem, goodsIndex, addCart, delCart, goToDetail } = this.props;
    return (
      <View className='pane-item' key={goodsItem.goodId}>
        <View className='pane-item-left' onClick={() => goToDetail(goodsItem, goodsIndex)}>
          <Image
            style='width:100px;'
            src={img1}
            mode='widthFix'
          />
        </View>
        <View className='pane-item-right'>
          <View style={{fontSize: 20}}>{goodsItem.title}</View>
          <View style={{fontSize: 16}}>销量：{goodsItem.num}</View>
          <View className='right-container'>
            <Text style={{fontSize: 16}}>{goodsItem.price}</Text>
            <View className='calc-container'>
              {/* <AtIcon value='subtract-circle' size='20' color='#F00' onClick={() => delCart(goodsIndex)}></AtIcon> */}
                <Text className='calc-item calc-item-del' onClick={() => delCart(goodsIndex)}>-</Text>
                <Text className='calc-item calc-item-num'>{goodsItem.buyNum}</Text>
              {/* <AtIcon value='add-circle' size='20' color='#F00' onClick={() => addCart(goodsIndex)}></AtIcon> */}
                <Text className='calc-item calc-item-add' onClick={() => addCart(goodsIndex)}>+</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default GoodItem;