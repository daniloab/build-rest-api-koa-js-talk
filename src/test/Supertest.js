import React from "react";
import { Flex, Text } from "rebass";
import { Root } from "../Intro";
import { Center } from "../Api";
import { Appear } from "mdx-deck";

export const Supertest = () => (
  <Root>
    <Center>
      <Flex flexDirection="column">
        <ul>
          <Appear>
            <li>High and low level of abstration</li>
            <li>Simple to use/implement</li>
            <li>https://github.com/visionmedia/supertest</li>
          </Appear>
        </ul>
      </Flex>
    </Center>
  </Root>
);
