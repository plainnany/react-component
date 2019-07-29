import React from 'react'

interface Prop {
  visible: boolean
}

const Dialog: React.FunctionComponent<Prop> = (props) => {
  return (
    props.visible ?
      <div>dialog</div>
      : null
  )
}

export default Dialog