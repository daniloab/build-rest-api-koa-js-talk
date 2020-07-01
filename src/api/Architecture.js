import React from "react";
import { Flex, Text } from "rebass";
import { Appear } from "mdx-deck";
import { Root } from "../Intro";
import { Center } from "../Api";

export const Architecture = () => (
  <Root>
    <Center>
      <Flex flexDirection="column">
        <Appear>
          <li>Abstraction</li>
          <li>Resource Identifier</li>
          <li>Media Type to define the data type (JSON, XML)</li>
          <li>HTTP Verbs/Methods (GET, POST, PUT, DELETE) </li>
          <li>Stateless</li>
          <li>Cacheable</li>
        </Appear>
      </Flex>
    </Center>
  </Root>
);
