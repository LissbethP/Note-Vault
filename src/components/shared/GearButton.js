import React from 'react';
import {Text,Dimensions, TouchableOpacity, View, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import theme from "../../theme";
export default function GearButton({...rest}) {
    return (
        <TouchableOpacity {...rest}>
            <View>
                <FontAwesome name={"gear"} style={styles.icon} size={32} color={theme.colors.purple} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon:{
        fontWeight: 'bold',
        paddingRight: 20,
    }
})


