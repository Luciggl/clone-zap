import { View, Text } from "react-native";
import { IconCamera, IconDotsVertical } from '@tabler/icons-react';
import { s } from "./style";

export function NavBar() {
    return (
        <View style={s.container}>
            <Text style={s.text}>
                CloneZap
            </Text>

            <View style={s.iconContainer}>
                <IconCamera stroke={2} color="#fff" style={s.icon} />
                <IconDotsVertical stroke={2} color="#fff" style={s.icon} />
            </View>
        </View>
    )
}
