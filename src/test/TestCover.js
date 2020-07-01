// TestCover
import React from "react";
import { Flex, Text } from "rebass";
import { Root } from "../Intro";
import { Center } from "../Api";
import { Img } from "../Cover";

export const TestCover = () => (
  <Root>
    <Center>
      <Flex flexDirection="column">
        <Flex justifyContent="center" mb="10px" alignItems='center'>
          <Img src={"../img/jest.png"} width={200} height={200} />
          <Img src={"../img/mongodb_logo.png"}  width={300} height={100}/>
        </Flex>
      </Flex>
    </Center>
  </Root>
);
