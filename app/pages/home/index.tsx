import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View>
      <Link href="/pages/home/modal" asChild>
        <Text>Home</Text>
      </Link>
    </View>
  );
}
