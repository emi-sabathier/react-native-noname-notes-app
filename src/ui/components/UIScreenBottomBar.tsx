import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { UIText } from '../shared/UIText';
import { UITouchableOpacity } from '../shared/UITouchableOpacity';
import Modal from 'react-native-modal';

const ICON_SIZE = 30;

export const UIScreenBottomBar = () => {
    const [visible, setVisible] = useState(false);

    const close = () => {
        setVisible(false);
    };
    const handlePress = () => {
        setVisible(true);
    };

    return (
        <>
            <Modal
                isVisible={visible}
                swipeDirection="down"
                animationInTiming={600}
                animationOutTiming={600}
                useNativeDriver={true}
                onSwipeComplete={() => {
                    close();
                }}
                style={styles.bottomModal}>
                <View style={styles.modalContent}>
                    <View style={styles.iconsContainer}>
                        <View style={styles.swipeIconAlign}>
                            <Icon name="menu" size={ICON_SIZE} />
                        </View>
                        <UITouchableOpacity
                            onPress={() => {
                                close();
                            }}>
                            <Icon name="window-close" size={ICON_SIZE} />
                        </UITouchableOpacity>
                    </View>
                    <View>
                        <UIText type="LARGE">C'est kloug</UIText>
                    </View>
                </View>
            </Modal>
            <View style={styles.container}>
                <UITouchableOpacity onPress={() => handlePress()}>
                    <Icon name="format-color-fill" size={ICON_SIZE} />
                </UITouchableOpacity>
                <Icon name="dots-vertical-circle-outline" size={ICON_SIZE} />
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconsContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
    },
    swipeIconAlign: { flex: 1, alignItems: 'center' },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        height: 200,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    viewDoubleBar: {
        backgroundColor: 'green',
        top: 2,
        width: 30,
        padding: 2,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        borderBottomWidth: 2,
        borderTopColor: 'rgba(0, 0, 0, 0.2)',
        borderTopWidth: 2,
        alignSelf: 'center',
        marginBottom: 25,
    },
});