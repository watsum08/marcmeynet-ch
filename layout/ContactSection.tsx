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
        ref={ref}
      >
        <SectionHeading text="Contact" lastSection />

        <Flex
          justify="space-between"
          align={{ base: "center", xl: "flex-start" }}
          flexDir={{ base: "column", xl: "row" }}
          gap={4}
        >
          <Flex
            flexDir={{ base: "column", md: "row" }}
            ml={{ base: 0, md: -36, lg: -44, xl: 0 }}
          >
            <Avatar
              name="Marc Meynet"
              src="static/img/contact/avatar.png"
              size={{ base: "xl", xl: "2xl" }}
              mx={{ base: "auto", md: 0 }}
            />

            <Flex
              mt={{ base: 4, md: 16 }}
              pos="relative"
              zIndex={999}
              flexDir={{ base: "column", md: "row" }}
            >
              <Box
                w={0}
                h={0}
                left={{ base: 0, md: "32px" }}
                mx="auto"
                pos="relative"
                borderTop={{
                  base: "",
                  md:
                    colorMode === "dark"
                      ? "36px solid black"
                      : "36px solid white",
                }}
                borderLeft="36px solid transparent"
              />
              <Box
                pos="relative"
                left={{ base: 0, md: 6 }}
                _selection={{ bg: "black", color: "white" }}
                p={{ base: 4, sm: 6, md: 7, xl: 8 }}
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
            <FormControl
              w={{ base: "320px", md: "400px" }}
              mr={{ base: 0, xl: 12 }}
            >
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
                fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                h={{ base: "24px", sm: "28px", md: "32px", lg: "36px" }}
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
                fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                h={{ base: "24px", sm: "28px", md: "32px", lg: "36px" }}
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
                h={{ base: "100px", sm: "140px", md: "180px", lg: "240px" }}
                onChange={(e) => {
                  if (e.target.value.length >= 3) {
                    setMessageInvalid(false);
                  }
                }}
                fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              />

              <Flex w="full" justify={{ base: "center", xl: "flex-start" }}>
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
              </Flex>
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

        <Flex
          justify="center"
          pos="relative"
          bottom={{
            base: -4,
            sm: -6,
            md: -8,
            lg: -12,
            xl: -16,
            "2xl": -20,
            "3xl": -24,
          }}
        >
          <Button
            bg="none"
            _hover={{ transform: "scale(1.1)" }}
            p={{ base: 2, md: 4, lg: 6 }}
            textTransform="uppercase"
            fontSize={{ base: "16px", md: "18px", lg: "20px" }}
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
