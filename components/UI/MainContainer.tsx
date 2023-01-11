import { Box, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const MainContainer = ({
  children,
}: /*setBodyColor,*/
{
  children: JSX.Element | JSX.Element[];
  /*setBodyColor: (bg: string) => void;*/
}) => {
  /*const [windowHeight, setWindowHeight] = useState(0);
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

  useEffect(() => {
    const bodyColor = `hsl(0,0, ${scrollPercentage}%)`;
    
    setBodyColor(bodyColor);
  },[scrollPercentage, setBodyColor]); */

  return (
    <Box
      /*bg={`rgba(0, 0, 0, ${scrollPercentage})`}*/
      cursor="default"
    >
      <Container maxW="1440px">{children}</Container>
    </Box>
  );
};

export default MainContainer;
