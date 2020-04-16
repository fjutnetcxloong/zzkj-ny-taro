import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtList, AtListItem, AtSearchBar } from 'taro-ui';
import "./searchPage.less";

class SearchPage extends Component {
    state = {
        searchList: [
            { title: '一个煎包', text: 'fds佛挡杀', id: 1 },
            { title: '三个鸡蛋', text: 'fds佛挡杀', id: 2 },
            { title: '七个牛奶', text: 'fds佛挡杀', id: 3 },
            { title: '一个苹果', text: 'fds佛挡杀', id: 4 },
            { title: '五个个煎包', text: 'fds佛挡杀', id: 5 },
            { title: '一个汉堡', text: 'fds佛挡杀', id: 6 }
        ],
        filterList: []
    }

    onChange = (value) => {
        const { searchList } = this.state;
        const newList = searchList.filter(item => item.title.indexOf(value) > -1)
        this.setState({
            filterList: newList
        })
    }

    render() {
        const { searchList, filterList } = this.state;
        return (
            <View className='search-container'>
                <View>
                    <AtSearchBar
                      showActionButton
                      value={this.state.value}
                      placeholder='请输入菜品'
                      actionName='取消'
                      focus
                      onChange={this.onChange}
                    //   onActionClick={this.onActionClick.bind(this)}
                    />
                </View>
                <View className='search-content'>
                    <AtList className='content-list'>
                        <AtListItem title='热搜菜品推荐' className='list-title' />
                        {
                            ((filterList.length > 0 && filterList) || searchList).map(item => <AtListItem title={item.title} extraText={item.text} key={item} />)
                        }
                    </AtList>
                </View>
            </View>
        )
    }
}

export default SearchPage
