import { Appearance, StyleSheet, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image } from "react-native";
import { Colors } from "@/constants/Colors";

export default function MenuScreen() {
    const useColorScheme = Appearance.getColorScheme()


    const theme = useColorScheme === 'dark' ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme)

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    return (
        <Container>
            <FlatList
                data={[]}>


            </FlatList>
        </Container >
    )
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({

    })
}