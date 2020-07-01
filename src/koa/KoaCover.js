// KoaCover
import React from "react";
import { Flex, Text } from "rebass";
import { Appear } from "mdx-deck";
import { Root } from "../Intro";
import { Center } from "../Api";
import { Img } from "../Cover";
import styled from "styled-components";

const KoaLogo = styled(Text)`
  font-family: "Italiana", sans-serif;
  font-size: 150px;
`;

export const KoaCover = () => (
  <Root>
    <Center>
      <Flex flexDirection="column">
        <Flex justifyContent="center" mb="10px">
          <KoaLogo>koa</KoaLogo>
        </Flex>
        <Text>next generation web framework for node.js</Text>
      </Flex>
      <Flex>
        <ul>
          <Appear>
            <li>builded by team behind express</li>
            <li>
              focused on be smaller, more expressive, and more robust foundation
              for web applications and APIs
            </li>
            <li>
              made for web developers build fast and scalable network
              applications
            </li>
          </Appear>
        </ul>
      </Flex>
    </Center>
  </Root>
);
