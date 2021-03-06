import React from 'react'
import './importAllIcons'
import './icon.scss'
import classnames from '../utils/classnames'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
}

const Icon: React.FunctionComponent<IconProps> = ({ className, name, ...restProps }) => {
  return (
    <span>
      <svg className={ classnames('icon', className) } { ...restProps }>
        <use xlinkHref={ `#${name}` } />
      </svg>
    </span>
  )
}

export default Icon