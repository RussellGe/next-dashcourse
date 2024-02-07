import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import React from "react";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome to our platform!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">
              Hi {name}, welcome to our platform! We're excited to have you on
              board.
            </Text>
            <Link href="https://www.google.com">Click here to get started</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default WelcomeTemplate;
