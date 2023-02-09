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
import { useInView } from "react-hook-inview";

const ContactSection = ({ colorMode }: { colorMode: "light" | "dark" }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    onOpen();

    if (form.current) {
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
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const [hasNoError, setHasNoError] = useState<boolean | undefined>(undefined);

  const [ref, inView] = useInView();

  return (
    <Section
      bg={
        colorMode === "dark"
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(255, 255, 255, 0.05)"
      }
      id="contact"
      color="black"
    >
      <Box
        color={colorMode === "dark" ? "black" : "white"}
        transition="0.8s all ease-out"
        opacity={inView ? 1 : 0}
      >
        <SectionHeading text="Contact" lastSection />

        <Flex justify="space-between" align="flex-start" mt={16}>
          <Box
            fontSize="20px"
            _selection={{ bg: "black", color: "white" }}
            ref={ref}
          >
            <Text
              transition="0.3s all"
              transform={`translateX(${inView ? 0 : -2000}px)`}
            >
              Wanna hire me or just wanna say hello ?
            </Text>
            <br />
            <Text
              transition="0.3s all 0.6s"
              transform={`translateX(${inView ? 0 : -2000}px)`}
            >
              Send me a message and I&apos;ll make sure we get in touch !
            </Text>
          </Box>

          <form ref={form} onSubmit={sendEmail}>
            <FormControl w="400px" mr={16}>
              <FormLabel textTransform="uppercase">Name</FormLabel>
              <Input
                name="from_name"
                type="text"
                outline={
                  colorMode === "dark" ? "2px solid black" : "2px solid white"
                }
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
                outline={
                  colorMode === "dark" ? "2px solid black" : "2px solid white"
                }
                border="none"
                rounded="4px"
                _selection={{ bg: "black", color: "white" }}
              />

              <FormLabel textTransform="uppercase" mt={4}>
                Message
              </FormLabel>
              <Textarea
                name="message"
                outline={
                  colorMode === "dark" ? "2px solid black" : "2px solid white"
                }
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
                color={colorMode === "dark" ? "white" : "black"}
                bg={colorMode === "dark" ? "black" : "white"}
                rounded="2px"
                transition="0.3s all"
                _hover={{
                  bg: colorMode === "dark" ? "white" : "black",
                  color: colorMode === "dark" ? "black" : "white",
                  outline:
                    colorMode === "dark"
                      ? "2px solid black"
                      : "2px solid white",
                }}
                _active={{ bg: "#aaa" }}
                isDisabled={isLoading}
              >
                Send
              </Button>
            </FormControl>
          </form>
        </Flex>

        <Modal onClose={onClose} isOpen={isOpen} blockScrollOnMount={false}>
          <ModalOverlay
            bg={
              colorMode === "dark" ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.2)"
            }
          />
          <ModalContent
            color={colorMode === "dark" ? "black" : "white"}
            rounded="4px"
            border={
              colorMode === "dark" ? "2px solid black" : "2px solid white"
            }
            bg={
              hasNoError === undefined
                ? "#fff"
                : hasNoError === true
                ? "green.200"
                : "red.200"
            }
            transition="1s all"
          >
            <ModalCloseButton color="black" />
            <ModalBody
              textAlign="center"
              fontSize="20px"
              py="96px"
              px="32px"
              color="black"
            >
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
                color={colorMode === "dark" ? "white" : "black"}
                bg={colorMode === "dark" ? "black" : "white"}
                rounded="2px"
                transition="0.3s all"
                _hover={{
                  bg: colorMode === "dark" ? "white" : "black",
                  color: colorMode === "dark" ? "black" : "white",
                  outline:
                    colorMode === "dark"
                      ? "2px solid black"
                      : "2px solid white",
                }}
                _active={{ bg: "#aaa" }}
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Section>
  );
};

export default ContactSection;
