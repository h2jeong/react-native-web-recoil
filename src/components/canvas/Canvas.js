import React from 'react'
import { StyleSheet, View } from 'react-native-web'
import CanvasBackground from './CanvasBackground';
import CanvasItem from './CanvasItem';
import Selection from './Selection';

export default function Canvas() {
    const setLayoutState = () => {};
    const onLayout = ({
        nativeEvent: {
            layout: { x, y, width, height }
        }
    }) => setLayoutState({ x, y, width, height })

    return (
        <View style={styles.root} onLayout={onLayout}>
            <View style={styles.container}>
                <CanvasBackground />
                <CanvasItem />
                <Selection />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
        overflow: 'visible',
        zIndex: 0
    },
    container: {
        flex: 1
    },
    svg: {
        flex: 1
    }
})
