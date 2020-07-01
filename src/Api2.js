import React from "react";
import styled from "styled-components";
import { Flex, Text } from "rebass";
import { space, width, fontSize, color } from "styled-system";
import { Appear } from "mdx-deck";
import { Root } from "./Intro";

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Api2 = () => (
  <Root>
    <Center>
      <Flex flexDirection="column">
        <Appear>
            <li>Application Programming Interface</li>
          <li>Systems integration</li>
          <li>Data security</li>
          <li>Information exchange</li>
          <li>Bridges</li>
        </Appear>
      </Flex>
    </Center>
  </Root>
);
