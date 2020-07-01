// Operations
import React from "react";
import { Flex, Text } from "rebass";
import { Appear } from "mdx-deck";
import { Root } from "../Intro";
import { Center } from "../Api";
import { Img } from "../Cover";

export const Operations = () => (
  <Root>
    <Center>
      <Flex flexDirection="column">
        <Flex mb="10px">
          <Text>
            Keep the control of your apis and show only major versions
          </Text>
        </Flex>
        <Appear>
          <Flex flexDirection="column">
            <Img src={"../img/http_verbs1.png"} />
            <Text fontSize='10px'>
              image: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
            </Text>
          </Flex>
        </Appear>
      </Flex>
    </Center>
  </Root>
);
