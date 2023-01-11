import { Box, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const MainContainer = ({ children }: { children: JSX.Element }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [addedScrollEvent, setAddedScrollEvent] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(100);

  useEffect(() => {
    if (windowHeight === 0) {
      setWindowHeight(innerHeight);
    }

    window.addEventListener(
      "resize",
      () => {
        setWindowHeight(innerHeight);
        console.log("new innerHeight: " + innerHeight);
      },
      false
    );
  }, []);

  useEffect(() => {
    if (!addedScrollEvent) {
      setAddedScrollEvent(true);
      window.addEventListener(
        "scroll",
        () => {
          setScrollPercentage(
            (document.body.offsetHeight -
              innerHeight -
              Math.ceil(scrollY) -
              1) /
              (document.body.offsetHeight - innerHeight)
          );
        },
        false
      );
    }
  }, [addedScrollEvent, windowHeight]);

  return (
    <Box
      bg={`rgba(0, 0, 0, ${scrollPercentage})`}
      transition="0.5s background-color"
    >
      <Container maxW="1600px">{children}</Container>
    </Box>
  );
};

export default MainContainer;
