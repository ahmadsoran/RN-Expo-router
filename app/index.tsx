import "CORE/i18n/conf";
import React from "react";
import { Link } from "expo-router";
import { Container } from "CORE/components/Themed";
export default function App() {
  return (
    <Container useSafeArea>
      <Link href="/pages/home/9">home</Link>
    </Container>
  );
}
