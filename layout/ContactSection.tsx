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
  Avatar,
} from "@chakra-ui/react";
import Section from "../components/UI/Section";
import SectionHeading from "../components/UI/SectionHeading";
import { FormEvent, useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { useInView } from "react-hook-inview";

const ContactSection = ({
  colorMode,
  setScrollToPage,
}: {
  colorMode: "light" | "dark";
  setScrollToPage: (pageNum: number) => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const form = useRef<HTMLFormElement>(null);

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [nameInvalid, setNameInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [messageInvalid, setMessageInvalid] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (nameRef.current && nameRef.current.value.length < 3) {
      setNameInvalid(true);
    }
    if (messageRef.current && messageRef.current.value.length < 3) {
      setMessageInvalid(true);
    }

    if (
      emailRef.current &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailRef.current.value)
    ) {
      setEmailInvalid(true);
    } else if (form.current && !nameInvalid && !messageInvalid) {
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
        pos="relative"
      >
        <SectionHeading text="Contact" lastSection />

        <Flex justify="space-between" align="flex-start">
          <Flex>
            <Avatar
              name="Marc Meynet"
              src="img/contact/avatar.png"
              size="2xl"
              p={1}
            />

            <Flex mt={16} pos="relative" zIndex={999}>
              <Box
                w={0}
                h={0}
                pos="absolute"
                borderBottom="36px solid transparent"
                borderRight={
                  colorMode === "dark" ? "36px solid black" : "36px solid white"
                }
              />
              <Box
                pos="absolute"
                left="24px"
                whiteSpace="nowrap"
                _selection={{ bg: "black", color: "white" }}
                ref={ref}
                p={10}
                bg={colorMode === "dark" ? "black" : "white"}
                color={colorMode === "dark" ? "white" : "black"}
                rounded="12px"
                lineHeight="120%"
              >
                <Text transition="0.3s all 0.5s" opacity={inView ? 1 : 0}>
                  Wanna hire me or just wanna say hello ?
                </Text>
                <br />
                <Text transition="0.3s all 1s" opacity={inView ? 1 : 0}>
                  Send me a message and I&apos;ll make sure we get in touch !
                </Text>
              </Box>
            </Flex>
          </Flex>

          <form ref={form} onSubmit={sendEmail}>
            <FormControl w="400px" mr={16}>
              <FormLabel textTransform="uppercase">Name</FormLabel>
              <Input
                ref={nameRef}
                name="from_name"
                bg={nameInvalid ? "red.400" : "none"}
                type="text"
                outline={
                  colorMode === "dark" ? "2px solid black" : "2px solid white"
                }
                border="none"
                rounded="4px"
                _selection={
                  colorMode === "dark" ? { bg: "black", color: "white" } : {}
                }
                onChange={(e) => {
                  if (e.target.value.length >= 3) {
                    setNameInvalid(false);
                  }
                }}
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
                _selection={
                  colorMode === "dark" ? { bg: "black", color: "white" } : {}
                }
                ref={emailRef}
                onChange={(e) => {
                  if (
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                      e.target.value
                    )
                  ) {
                    setEmailInvalid(false);
                  }
                }}
                bg={emailInvalid ? "red.400" : "none"}
              />

              <FormLabel textTransform="uppercase" mt={4}>
                Message
              </FormLabel>
              <Textarea
                name="message"
                ref={messageRef}
                bg={messageInvalid ? "red.400" : "none"}
                outline={
                  colorMode === "dark" ? "2px solid black" : "2px solid white"
                }
                border="none"
                rounded="4px"
                _selection={
                  colorMode === "dark" ? { bg: "black", color: "white" } : {}
                }
                resize="none"
                h="240px"
                onChange={(e) => {
                  if (e.target.value.length >= 3) {
                    setMessageInvalid(false);
                  }
                }}
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

        <Flex justify="center" pos="relative" bottom={-12}>
          <Button
            bg="none"
            _hover={{ transform: "scale(1.1)" }}
            p={6}
            textTransform="uppercase"
            fontSize="20px"
            _active={{ transform: "scale(1.2)" }}
            onClick={() => setScrollToPage(0)}
          >
            Go back to top
          </Button>
        </Flex>
      </Box>
    </Section>
  );
};

export default ContactSection;
