// Resources
import React from "react";
import { Flex, Text } from "rebass";
import { Appear } from "mdx-deck";
import { Root } from "../Intro";
import { Center } from "../Api";

export const Resources = () => (
  <Root>
    <Center>
      <Flex flexDirection="column">
        <Appear>
          <li>Abstraction</li>
          <li>Resource Identifier</li>
          <li>Resource representations shall be self-descriptive</li>
        </Appear>
      </Flex>
    </Center>
  </Root>
);
