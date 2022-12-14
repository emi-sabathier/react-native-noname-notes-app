import React, { ReactElement } from 'react';
import { NativeSyntheticEvent, StyleProp, TextInput, TextInputFocusEventData, TextStyle } from 'react-native';
import { colorScheme } from '../../constants/colorScheme';

type UITextInputProps = {
    style?: StyleProp<TextStyle>;
    onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    placeholder?: string;
    length?: number;
    onChangeText: (text: string) => void;
    value?: string;
    color?: string;
};

export const UITextInput = ({
    style,
    length,
    onFocus,
    placeholder,
    onChangeText,
    value,
    color = colorScheme.grey700,
}: UITextInputProps): ReactElement => {
    return (
        <TextInput
            multiline={true}
            style={style}
            maxLength={length}
            placeholder={placeholder}
            placeholderTextColor={color}
            onFocus={onFocus}
            onChangeText={onChangeText}
            value={value}
        />
    );
};
