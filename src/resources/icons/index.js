import { Resolver } from 'react-native-mdcore'

import android from './android'
import ios from './ios'

export default Resolver.create(android, {
  android,
  ios
})
