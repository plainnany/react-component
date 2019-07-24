import * as React from 'react'
import { Icon } from '../lib/index'
import './icon.example.scss'


export default function (props: any) {
  return (
    <div >
      <h2>图标</h2>
      <div className="icon-example">
        <Icon name="alipay" />
        <Icon name="wechat" />
      </div>
    </div>
  )
}