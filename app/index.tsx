import "CORE/i18n/conf";
import React from "react";
import { Link } from "expo-router";
import { useColorScheme } from "nativewind";
import { Text } from "CORE/components/Themed";
import { Button } from "CORE/components/Themed";
import { Container } from "CORE/components/Themed";
import Icon from "test-react-native-remix-icon";
export default function App() {
  const { setColorScheme } = useColorScheme();
  return (
    <Container useSafeArea>
      <Link href="/pages/home">home</Link>
      <Text
        className="text-app-text dark:text-dark-app-text bg-pink-600"
        fontSize={100}>
        App
      </Text>
      <Button onPress={() => setColorScheme("dark")}>dark</Button>
      <Button
        className="bg-red-500 dark:bg-violet-950"
        onPress={() => setColorScheme("light")}>
        light
      </Button>
      <Icon name="AddLine" color="red" size={25} />
    </Container>
  );
}
