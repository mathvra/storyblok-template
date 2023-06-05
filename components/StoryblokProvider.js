"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: "Xfilj7M6tc1Pf0VWmhPAQQtt",
  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children }) {
  return children;
}