import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NewImageButton from './NewImageButton'
import NewRectangleButton from './NewRectangleButton'
import NewStatisticsButton from './NewStatisticsButton'

export default function ToolBar() {
    return (
        <View style={styles.root}>
            <NewRectangleButton style={styles.button} />
            <NewImageButton style={styles.button} />
            <NewStatisticsButton style={styles.button} />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        marginBottom: 16
    },
    button: {
        marginRight: 8
    }
})
