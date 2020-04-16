import Taro, { Component } from "@tarojs/taro";
import { connect } from '@tarojs/redux';
import { View, Image, Text } from "@tarojs/components";
import img1 from "../../assets/images/sq2.png";
import './index.less';
import { add, minus, ret } from '../../actions/counter';

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add (data) {
    dispatch(add(data))
  },
  dec (data) {
    dispatch(minus(data))
  },
  ret () {
    dispatch(ret())
  }
}))
class Detail extends Component {
  state = {
    goodInfo: { title: "30个煎包", num: 10, price: 16, buyNum: 0 }
  };

  componentDidMount() {
    console.log(this.props.ret());
  }

  delCart = () => {
    const { goodInfo } = this.state;
    if (goodInfo.buyNum > 0) {
      goodInfo.buyNum--;
      this.setState({
        goodInfo
      });
      this.props.dec(goodInfo.price)
    }
  };

  addCart = () => {
    const { goodInfo } = this.state;
    goodInfo.buyNum++;
    this.setState({
      goodInfo
    });
    this.props.add(goodInfo.price)
  };

  render() {
    const { goodInfo } = this.state;
    return (
      <View className='goods-detail-container'>
        <View className='pane-item'>
          <View className='pane-item-left'>
            <Image style='width: 100px;' src={img1} mode='widthFix' />
          </View>
          <View className='pane-item-right'>
            <View style={{ fontSize: 20 }}>{goodInfo.title}</View>
            <View style={{ fontSize: 16 }}>销量：{goodInfo.num}</View>
            <View className='right-container'>
              <Text style={{ fontSize: 16 }}>{goodInfo.price}</Text>
              <View className='calc-container'>
                {/* <AtIcon value='subtract-circle' size='20' color='#F00' onClick={this.addCart}></AtIcon> */}
                <Text
                  className='calc-item calc-item-del'
                  onClick={() => this.delCart()}
                >
                  -
                </Text>
                <Text className='calc-item calc-item-num'>
                  {goodInfo.buyNum}
                </Text>
                {/* <AtIcon value='add-circle' size='20' color='#F00' onClick={this.delCart}></AtIcon> */}
                <Text
                  className='calc-item calc-item-add'
                  onClick={() => this.addCart()}
                >
                  +
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default Detail;
