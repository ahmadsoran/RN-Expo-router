import "CORE/i18n/conf";
import React from "react";
import { Link } from "expo-router";
import { Button, Container, Text } from "CORE/components/Themed";
import { useColorScheme } from "nativewind";
export default function App() {
  const { setColorScheme } = useColorScheme();
  return (
    <Container useSafeArea>
      <Link href="/pages/home/modal">home</Link>
      <Text fontSize={20}>App</Text>
      <Button onPress={() => setColorScheme("dark")}>dark</Button>
      <Button
        className="bg-red-500 dark:bg-violet-950"
        onPress={() => setColorScheme("light")}>
        light
      </Button>
    </Container>
  );
}