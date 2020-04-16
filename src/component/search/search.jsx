import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtInput} from 'taro-ui'
import "./search.less"

function Search() {
    return (
        <View className='search-box'>
            <View className='input-box'>
            <View className='at-icon at-icon-search'></View>

                <AtInput
                  className='input'
                  placeholder='请输入您的菜品名'
                  placeholderClass='place'
                  maxLength={20}
                />
                <View className='del'>取消</View>
            </View>
        </View>
    )
}

export default Search