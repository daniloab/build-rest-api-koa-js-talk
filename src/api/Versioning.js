// Versioning
import React from "react";
import { Flex, Text } from "rebass";
import { Appear } from "mdx-deck";
import { Root } from "../Intro";
import { Center } from "../Api";

export const Versioning = () => (
  <Root>
    <Center>
      <Flex flexDirection="column">
        <Flex mb="10px">
          <Text>
            Keep the control of your apis and show only major versions
          </Text>
        </Flex>
        <Appear>
          <li>https://api/users/v1/user</li>
          <li>https://api/users/v2/user</li>
        </Appear>
      </Flex>
    </Center>
  </Root>
);
