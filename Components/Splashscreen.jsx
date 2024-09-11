import { View , Text, StyleSheet , Image} from "react-native"; 
import Tarvel from '@/assets/images/orangesplash.jpg'

function Splashscreen() {
    return(
        <View style={styles.contain}>
            <View>
            <Image source={Tarvel} style={styles.splashimage}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    splashimage: {
        width: '100%',
        height: '100%',
        resizeMode:'contain'

    }
})

export default Splashscreen