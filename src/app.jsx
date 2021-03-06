import 'taro-ui/dist/style/index.scss'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import Search from './pages/search/searchPage'
// import Index from './pages/index'

import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {
  componentDidMount () {}
  config = {
    pages: [
      'pages/goods/index',
      'pages/goods/Detail',
      'pages/orders/OrderDetail',
      'pages/orders/index',
      'pages/index/index',
      'pages/search/searchPage',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Search />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
