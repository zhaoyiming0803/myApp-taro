import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'

const util = require('../../utils/index')

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () {
    console.log('util.fn1(): ', util.fn1())
    // console.log('wx.env: ', wx.env) // 编译 ali 后，运行时报错，没有对 wx 做转换
    console.log('my.env: ', my.env)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
