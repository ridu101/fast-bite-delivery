import { createFileRoute } from "@tanstack/react-router";
import App from "../App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fooddio - Delicious Food Delivered Fast" },
      { name: "description", content: "Order delicious meals hot and fresh delivered to your doorstep with Fooddio." },
      { property: "og:title", content: "Fooddio - Delicious Food Delivered Fast" },
      { property: "og:description", content: "Order delicious meals hot and fresh delivered to your doorstep with Fooddio." },
    ],
  }),
  component: App,
});
