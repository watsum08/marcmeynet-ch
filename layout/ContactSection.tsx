import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Spinner,
  Textarea,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import Section from "../components/UI/Section";
import SectionHeading from "../components/UI/SectionHeading";
import { FormEvent, useRef, useState } from "react";

import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const form = useRef<HTMLFormElement>(new HTMLFormElement());

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    onOpen();

    emailjs
      .sendForm(
        "service_vf7y90n",
        "template_k1j47p9",
        form.current,
        "EGN3La3ew3OJFWzIQ"
      )
      .then(
        (result) => {
          console.log(result);
          setIsLoading(false);
          setHasNoError(true);
        },
        (error) => {
          console.log(error);
          setIsLoading(false);
          setHasNoError(false);
        }
      );
  };

  const [isLoading, setIsLoading] = useState(false);
  const [hasNoError, setHasNoError] = useState<boolean | undefined>(undefined);

  return (
    <Section bg="rgba(255, 255, 255, 0.95)" id="contact" color="black">
      <SectionHeading text="Contact" lastSection />

      <Flex justify="space-between" align="flex-start" mt={16}>
        <Box
          px={12}
          fontSize="20px"
          _selection={{ bg: "black", color: "white" }}
        >
          Interested in hiring me or just wanna say hello ?
          <br />
          <br />
          Send me a message and I&apos;ll make sure we get in touch !
        </Box>

        <form ref={form} onSubmit={sendEmail}>
          <FormControl w="400px" mr={16}>
            <FormLabel textTransform="uppercase">Name</FormLabel>
            <Input
              name="from_name"
              type="text"
              outline="2px solid #050505"
              border="none"
              rounded="4px"
              _selection={{ bg: "black", color: "white" }}
            />

            <FormLabel textTransform="uppercase" mt={4}>
              Email
            </FormLabel>
            <Input
              name="reply_to"
              type="text"
              outline="2px solid #050505"
              border="none"
              rounded="4px"
              _selection={{ bg: "black", color: "white" }}
            />

            <FormLabel textTransform="uppercase" mt={4}>
              Message
            </FormLabel>
            <Textarea
              name="message"
              outline="2px solid #050505"
              border="none"
              rounded="4px"
              _selection={{ bg: "black", color: "white" }}
              resize="none"
              h="240px"
            />

            <Button
              type="submit"
              textTransform="uppercase"
              px={5}
              py={3}
              mt={4}
              h="auto"
              color="white"
              bg="#050505"
              rounded="2px"
              transition="0.3s all"
              _hover={{ bg: "#fff", color: "#000", outline: "2px solid #000" }}
              _active={{ bg: "#aaa" }}
              isDisabled={isLoading}
            >
              Send
            </Button>
          </FormControl>
        </form>
      </Flex>

      <Modal onClose={onClose} isOpen={isOpen} blockScrollOnMount={false}>
        <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
        <ModalContent
          color="black"
          rounded="4px"
          border="2px solid black"
          bg={
            hasNoError === undefined
              ? "#fff"
              : hasNoError === true
              ? "green.200"
              : "red.200"
          }
          transition="1s all"
        >
          <ModalCloseButton />
          <ModalBody textAlign="center" fontSize="20px" py="96px" px="32px">
            {isLoading ? (
              <Spinner size="lg" />
            ) : hasNoError ? (
              <Text fontSize="20px">
                Your message has been successfully sent.
              </Text>
            ) : (
              <Text fontSize="20px">
                We have encountered an error sending your message.
                <br />
                <br />
                Please try again.
              </Text>
            )}
          </ModalBody>

          <ModalFooter justifyContent="flex-start">
            <Button
              textTransform="uppercase"
              px={5}
              py={3}
              h="auto"
              color="white"
              bg="#050505"
              rounded="2px"
              transition="0.3s all"
              _hover={{
                bg: "#fff",
                color: "#000",
                outline: "2px solid #000",
              }}
              _active={{ bg: "#aaa" }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Section>
  );
};

export default ContactSection;
