import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import Section from "../components/UI/Section";
import SectionHeading from "../components/UI/SectionHeading";

const ContactSection = () => {
  return (
    <Section bg="rgba(255, 255, 255, 1)" id="contact" color="black">
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
              rounded="4px"
            >
              Send
            </Button>
          </FormControl>
        </form>
      </Flex>
    </Section>
  );
};

export default ContactSection;
