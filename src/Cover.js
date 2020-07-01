import React from "react";
import styled from "styled-components";
import { Flex } from "rebass";
import { space, width, fontSize, color } from "styled-system";

import { Root } from "./Intro";

export const Img = styled.img`
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

export const Cover = () => (
  <Root>
    <Center>
      <Flex flex={1} justifyContent="space-between">
        <Img src={"./img/nodejslogo.png"} width={200} />
        <Img src={"./img/koajs.png"} width={200} />
      </Flex>
      <Title mt={20}>Building Rest APIs with koa-js</Title>
      <MeName mt={100}>Danilo Assis</MeName>
    </Center>
  </Root>
);
