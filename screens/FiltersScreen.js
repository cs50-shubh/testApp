import React from 'react'
import {Veiw, Text, StyleSheet} from 'react-native'

const FiltersScreen = props =>{
    return (
        <Veiw style={styles.screen}>
            <Text>Filters Screen</Text>
        </Veiw>
    )
}
const styles = StyleSheet.create({
screen: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center"
}
})
export default FiltersScreen;