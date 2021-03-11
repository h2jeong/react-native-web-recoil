import React from 'react'
import { StyleSheet, View } from 'react-native-web'
import { useRecoilValue } from 'recoil'
import { itemIdsState } from '../../recoil/atoms'
import ItemInfo from './ItemInfo'

export default function ItemInfoList() {
    const itemIds = useRecoilValue(itemIdsState);

    return (
        <View style={styles.root}>
            {itemIds.map(id => <ItemInfo key={`item-info-${id}`} id={id} />)}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        overflow: 'auto'
    }
})
