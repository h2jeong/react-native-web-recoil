import React from 'react'
import { StyleSheet, View } from 'react-native'
import ItemInfo from './ItemInfo'

export default function ItemInfoList() {
    return (
        <View style={styles.root}>
            <ItemInfo />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        overflow: 'auto'
    }
})
