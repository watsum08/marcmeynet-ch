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
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import Section from "../components/UI/Section";
import SectionHeading from "../components/UI/SectionHeading";

const ContactSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

        <form>
          <FormControl w="400px" mr={16}>
            <FormLabel textTransform="uppercase">Name</FormLabel>
            <Input
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
              onClick={(e) => {
                e.preventDefault();
                onOpen();
              }}
            >
              Send
            </Button>
          </FormControl>
        </form>
      </Flex>

      <Modal onClose={onClose} isOpen={isOpen} blockScrollOnMount={false}>
        <ModalOverlay bg="rgba(0, 0, 0, 0.8)"/>
        <ModalContent color="black" rounded="4px" border="2px solid black">
          <ModalCloseButton />
          <ModalBody textAlign="center" fontSize="20px" py="96px" px="32px">
            Your message has been successfully sent.
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
