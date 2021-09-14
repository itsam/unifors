import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export const AboutModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        rounded={"full"}
        size={"lg"}
        fontWeight={"normal"}
        px={6}
        rightIcon={<ArrowForwardIcon h={4} w={4} color={"gray.500"} />}
        onClick={onOpen}
      >
        About the project
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>About UNIFORS</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              UNIversities for Future wORk Skills 2020 brings together a strong
              partnership (5 universities from Poland, Romania, Belgium, Spain
              and Portugal and two SMEs one from Spain and one from Greece),
              aiming to increase students chances for a faster and better
              insertion on the labor market by improving their soft skills.
            </Text>
            <Text mt="5">
              The project will investigate employers, students and teaching
              staff perspective on specific soft skills gap and collect existing
              best practices in the field at EU level.
            </Text>
            <Text fontWeight="bold" mt="5">
              <a
                target="_blank"
                href="http://www.uwm.edu.pl/unifors2020/"
                rel="noopener noreferrer"
              >
                Visit the official UNIFORS page to learn more
              </a>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
