import React from "react";
import { Stack } from "expo-router";
import { t } from "CORE/i18n/conf";

export default function Layout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{
          // Hide the header for all other routes.
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
          headerBackButtonMenuEnabled: true,
          title: t("title"),
        }}
      />
    </Stack>
  );
}
