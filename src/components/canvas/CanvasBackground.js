import React, { useCallback } from 'react'
import { StyleSheet, View } from 'react-native-web'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { backgroundColorState, selectedIdsState } from '../../recoil/atoms'

export default function CanvasBackground() {
    const backgroundColor = useRecoilValue(backgroundColorState);
    const setSelectedIds = useSetRecoilState(selectedIdsState);

    const handleClick = useCallback(() => {
        setSelectedIds([]);
    }, [setSelectedIds])

    return (
        <View style={[StyleSheet.absoluteFill, { backgroundColor }]} onClick={handleClick} />
    )
}
