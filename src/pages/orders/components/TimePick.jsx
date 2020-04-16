import Taro, { Component } from '@tarojs/taro';
import { View, Picker, Text } from '@tarojs/components';

class TimePick extends Component {
  state = {
    timeSel: '12:01',
  }

  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }

  render() {
    return (
      <View className='page-section' style={{display: 'flex', justifyContent: 'space-between', padding: '12px'}}>
        <Text>取餐时间</Text>
        <Picker mode='time' onChange={this.onTimeChange}>
          <View className='picker'>
            今天：{this.state.timeSel}
          </View>
        </Picker>
      </View>
    )
  }
}
export default TimePick;