import { Box, Text } from "@mantine/core";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "Home | QuikCash" }];

export default function App() {
  return (
    <>
      <Text>Wow body content wow</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        distinctio culpa molestiae illum neque at autem. Sequi dolor, dicta
        doloribus provident reiciendis illo numquam quidem suscipit voluptate
        dolore ipsam aliquid.
      </Text>
      <Box h="1000px">Wow long content</Box>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet possimus
        sapiente ut aperiam odit harum quia at aspernatur, cum sint consequatur
        asperiores mollitia ipsa esse debitis ea dolorem perferendis inventore!
      </Text>
    </>
  );
}
