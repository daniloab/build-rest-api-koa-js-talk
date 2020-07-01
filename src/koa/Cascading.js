// Cascading
import React from "react";
import { Flex, Text } from "rebass";
import { Appear } from "mdx-deck";
import { Root } from "../Intro";
import { Center } from "../Api";

export const Cascading = () => (
  <Root>
    <Center>
      <Flex>
        <ul>
          <Appear>
            <li>avoid the use of callbacks</li>
            <li> friendly use of async functions</li>
            <li>downstream and upstream</li>
          </Appear>
        </ul>
      </Flex>
    </Center>
  </Root>
);
