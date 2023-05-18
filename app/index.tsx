import { Ionicons } from "@expo/vector-icons";
import "CORE/i18n/conf";
import { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Sheet,
  Stack,
  Text,
  TextArea,
} from "tamagui";

export default function App() {
  const [position, setPosition] = useState(0);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <Stack margin={10}>
      <Checkbox native>
        <Checkbox.Indicator backgrounded circular>
          <Text>Checkbox</Text>
        </Checkbox.Indicator>
      </Checkbox>
      <Form onSubmit={() => ""}>
        <Form.Trigger asChild>
          <Button
            onPress={() => {
              setModal(true);
              setOpen(true);
            }}>
            submit
          </Button>
        </Form.Trigger>
      </Form>
      <TextArea size="$4" borderWidth={2} />
      <Sheet
        forceRemoveScrollEnabled={open}
        modal={modal}
        open={open}
        onOpenChange={setOpen}
        snapPoints={[85, 50, 25]}
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}
        animation="lazy" // for the css driver
      >
        <Sheet.Overlay backgroundColor={"red"} />
        <Sheet.Handle />
        <Sheet.Frame
          flex={1}
          padding="$4"
          justifyContent="center"
          alignItems="center"
          space="$5"
          backgroundColor={"black"}>
          <Input width={200} />
        </Sheet.Frame>
      </Sheet>
    </Stack>
  );
}
