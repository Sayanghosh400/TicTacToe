import { View, Text } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

type IconProps = PropsWithChildren<{
    name: string;
}>

const Icons = ({name} : IconProps) => {
  switch (name) {
    case 'circle':
        return <Icon name="circle-thin" size={38} color="#8B78E6" />
        break;
    case 'cross':
        return <Icon name="times" size={38} color="#01CBC6" />
        break;
  
    default:
        return <Icon name="pencil" size={38} color="gray" />
        break;
  }
}

export default Icons