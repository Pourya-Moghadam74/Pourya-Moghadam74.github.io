import { useRef } from "react";
import {
  Dialog,
  Portal,
  CloseButton,
  Text,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";

function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const closeRef = useRef(null);
  const isSuccess = type === "success" ;
  return (
    <Dialog.Root
      role="alertdialog"                     // v3: use Dialog with alert role
      open={isOpen}                          // v3: controlled open
      onOpenChange={(e) => {                 // v3: notify context when closed
        if (!e.open) onClose();
      }}
      placement="center"
      motionPreset="slide-in-bottom"
      closeOnInteractOutside={false}         // typical for alert dialogs
      initialFocusEl={() => closeRef.current}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            rounded="xl"
            shadow="xl"
            overflow="hidden"
            bg={type === 'success' ? '#81C784' : type === 'error' ? '#FF8A65' : "yellow.50"}
            color={type === 'success' ? "green.900" : type === 'error' ? "red.900" : "yellow.900"}
            p="0"
          >
            <Dialog.Header
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              px="6"
              py="4"
            >
              <Dialog.Title fontSize="lg" fontWeight="bold">
                {type === 'success' ? 'All good!' : type === 'error' ? 'Oops!' : 'Loading'}
              </Dialog.Title>
            <Dialog.CloseTrigger asChild>
                <CloseButton ref={closeRef} size="sm" />
            </Dialog.CloseTrigger>
            </Dialog.Header>

            <Dialog.Body px="6" pb="6">
              <Text>{message}</Text>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

export default Alert;
