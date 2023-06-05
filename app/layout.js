import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider";

storyblokInit({
  accessToken: "Xfilj7M6tc1Pf0VWmhPAQQtt",
  use: [apiPlugin]
});

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  )
}