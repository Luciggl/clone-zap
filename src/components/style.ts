import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../style/theme";

export const s = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between", 
        alignItems: "center",
        padding: 20,
        backgroundColor: "#232323",
    },
    text: {
        color: colors.gray[100],
        fontWeight: 'bold',
        fontSize: 18,
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginLeft: 10,
        color: "#fff"
    }
});
