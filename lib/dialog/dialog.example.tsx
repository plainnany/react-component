import React, { useState } from 'react'
import Dialog from './dialog'

export default () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>button</button>
      <Dialog visible={visible}>dialog</Dialog>
    </div>
  )
}