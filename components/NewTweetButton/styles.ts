import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.tint,
        width: 60,
        position: 'absolute',
        bottom: 20,
        right: 20,
        borderRadius: 30,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles;