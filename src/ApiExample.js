import React from "react";
import styled from "styled-components";
import { Flex, Text } from "rebass";
import { space, width, fontSize, color } from "styled-system";
import { Appear } from "mdx-deck";
import { Root } from "./Intro";
import { Img } from './Cover';

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ApiExample = () => (
  <Root>
    <Center>
      <Flex flexDirection="column">
        <Appear>
            <Img src={"./img/pub.jpg"} />
        </Appear>
      </Flex>
    </Center>
  </Root>
);
