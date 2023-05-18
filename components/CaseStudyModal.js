import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Box,
  useDisclosure,
} from "@chakra-ui/react";

import { CheckIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import Image from "next/image";

export const CaseStudyModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        aria-label={`Open case study: ${props.name}`}
        variant="outline"
        size="sm"
        onClick={onOpen}
      >
        See case study
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.name} case study</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent="center" mt="5">
              <Box w="75%">{props.image}</Box>
            </Flex>

            {props.brief}
            {props.contact}
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
