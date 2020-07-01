// ErrorHandlingOverview
import React from "react";
import { Flex, Text } from "rebass";
import { Root } from "../Intro";
import { Center } from "../Api";

export const ErrorHandlingOverview = () => (
  <Root>
    <Center>
      <Flex>
        <Text>
          In Express, you caught errors by adding an middleware with a (err,
          req, res, next) signature as one of the last middleware. In contrast,
          in koa you add a middleware that does try catch as one of the first
          middleware. It is also recommended that you emit an error on the
          application itself for centralized error reporting, retaining the
          default behaviour in Koa.
        </Text>
      </Flex>
    </Center>
  </Root>
);
