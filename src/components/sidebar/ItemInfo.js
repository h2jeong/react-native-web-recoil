import React from 'react'
import { StyleSheet, Text, View } from 'react-native-web'
import { useRecoilValue } from 'recoil'
import { itemWithId } from '../../recoil/selectors'

export default function ItemInfo({id}) {
    const itemState = useRecoilValue(itemWithId(id));
    const { label, x, y } = itemState;

    return (
        <View style={styles.root}>
            {label ? <Text style={styles.label}>{label}</Text> : null}
            <Text style={styles.subLabel}>{`(x = ${x} y = ${y})`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginBottom: 16
    },
    label: {
        fontWeight: 'bold',
    },
    subLabel: {}
})
