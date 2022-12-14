import * as React from 'react';
import { ReactElement } from 'react';
import { UITouchableOpacity } from '../sharedComponents/UITouchableOpacity';
import { deleteNote } from '../../store/notesSlice';
import { colorScheme } from '../../constants/colorScheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppDispatch } from '../../store/hooks';
import { StyleSheet } from 'react-native';
import { notesCloudDatabase } from '../../api/CloudDatabaseService';

const ICON_SIZE = 26;

export const UIDeleteButton = ({ id }: Record<'id', string>): ReactElement => {
    const dispatch = useAppDispatch();
    return (
        <UITouchableOpacity
            style={styles.iconsAlign}
            onPress={async () => {
                await notesCloudDatabase.deleteDocument(id);
                dispatch(deleteNote(id));
            }}>
            <Icon name="trash-can-outline" size={ICON_SIZE} color={colorScheme.grey700} />
        </UITouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconsAlign: {
        alignSelf: 'flex-end',
    },
});
