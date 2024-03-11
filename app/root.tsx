import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

// Fonts
import "@fontsource-variable/plus-jakarta-sans/wght.css";

// Mantine
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import { resolver, theme } from "./theme";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript forceColorScheme="dark" />
      </head>
      <body>
        <MantineProvider
          forceColorScheme="dark"
          cssVariablesResolver={resolver}
          theme={theme}
        >
          {children}
          <ScrollRestoration />
          <Scripts />
        </MantineProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
