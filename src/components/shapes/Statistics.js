import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native-web'
import Element from './Element'

export default function Statistics({ id, series, status, ...others}) {
    let content;

    if (status === 'loading') {
        content = <ActivityIndicator size="large" />
    } else {
        content = (
            <View style={styles.container}>
                {series.map((serie, i) => (
                    <View key={`serie-${i}`} style={[styles.bar, {height: serie * 100}]} />
                ))}
            </View>
        )
    }
    return (
        <Element {...others} style={styles.root}>{content}</Element>
    )
}

const styles = StyleSheet.create({
    root: {},
    container: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 8,
        alignItems: 'flex-end'
    },
    bar: {
        marginHorizontal: 4,
        backgroundColor: '#1189c7',
        width: 20
    }
})
