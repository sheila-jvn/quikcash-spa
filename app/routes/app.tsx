import { Icon } from "@iconify-icon/react";
import {
  ActionIcon,
  Box,
  Container,
  Group,
  ScrollArea,
  TextInput,
  rem,
} from "@mantine/core";
import { Link, Outlet, type MetaFunction, useLocation } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "Home | QuikCash" }];

const MENUS = [
  { icon: "material-symbols:description", href: "/app" },
  { icon: "material-symbols:groups", href: "/app/savings" },
];

const inactiveVariant = (icon: string) => icon + "-outline";

export default function App() {
  const location = useLocation();
  const menusWithVariant = MENUS.map((menu) => ({
    ...menu,
    icon:
      location.pathname === menu.href ? menu.icon : inactiveVariant(menu.icon),
  }));

  return (
    <Container
      size="sm"
      h="100vh"
      p={0}
      display="grid"
      style={{
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Box bg="blue" py={16} px={24}>
        <TextInput placeholder="Search for mutations..." />
      </Box>
      <ScrollArea>
        <Box p={24}>
          <Outlet />
        </Box>
      </ScrollArea>
      <Group bg="background-grey.8" px={24} py={16} gap={32} pos="relative">
        {menusWithVariant.map((menu, index) => (
          <ActionIcon
            component={Link}
            to={menu.href}
            key={index}
            size={56}
            variant="subtle"
          >
            <Icon
              style={{
                height: rem(32),
                width: rem(32),
              }}
              height={32}
              width={32}
              icon={menu.icon}
            />
          </ActionIcon>
        ))}

        <Box
          pos="absolute"
          right={32}
          top={0}
          style={{ transform: "translateY(-50%)" }}
        >
          <ActionIcon size={56} c="background-grey.9">
            <Icon
              style={{
                height: rem(32),
                width: rem(32),
              }}
              height={32}
              width={32}
              icon="material-symbols:add"
            />
          </ActionIcon>
        </Box>
      </Group>
    </Container>
  );
}
