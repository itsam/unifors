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
  Link,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import { CheckIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import Image from "next/image";

export const AboutModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Link fontStyle="italic" fontWeight="black" onClick={onOpen}>
        UNIFORS project
      </Link>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>About UNIFORS</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Image
                src="/images/logo_unifors.png"
                width={250}
                height={250}
                alt="UNIFORS logo capital U"
              />
            </Center>
            <Text>
              UNIversities for Future wORk Skills 2020 brings together a strong
              partnership (five universities from Poland, Romania, Belgium,
              Spain and Portugal and two SMEs one from Spain and one from
              Greece), aiming to increase students chances for a faster and
              better insertion on the labor market by improving their soft
              skills.
            </Text>
            <Text mt="5">
              The project will investigate employers, students and teaching
              staff perspective on specific soft skills gap and collect existing
              best practices in the field at EU level.
            </Text>
            <Text mt="5">
              <Link
                href="http://www.uwm.edu.pl/unifors2020/"
                fontWeight="bold"
                isExternal
              >
                Visit the official UNIFORS page
                <ExternalLinkIcon mx="5px" mb="5px" />
              </Link>
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
