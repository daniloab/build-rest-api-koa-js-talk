import React from "react";
import styled from "styled-components";
import { Flex, Text } from "rebass";
import { space, width, fontSize, color } from "styled-system";
import { Appear } from "mdx-deck";
import { Root } from "./Intro";

const Img = styled.img`
  ${width}
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 40px;
  ${space}
`;

const Subtitle = styled.span`
  font-size: 40px;
  color: #fdaa4c;
  ${space}
`;

const MeName = styled.span`
  font-size: 30px;
  color: #25d7fd;
  ${space}
`;

export const Api = () => (
  <Root>
    <Center>
      <Flex flexDirection='column'>
        <li>Application Programming Interface</li>
        <li>Rest Architecture</li>
        <li>Resources</li>
        <li>Versioning</li>
        <li>Operations and HTTP Verbs</li>
      </Flex>
    </Center>
  </Root>
);
