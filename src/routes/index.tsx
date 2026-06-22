import { createFileRoute } from "@tanstack/react-router";
import App from "../App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FoodExpress - Fast Delivery, Fresh Food" },
      { name: "description", content: "Order fresh food delivered fast to your doorstep with FoodExpress." },
      { property: "og:title", content: "FoodExpress - Fast Delivery, Fresh Food" },
      { property: "og:description", content: "Order fresh food delivered fast to your doorstep with FoodExpress." },
    ],
  }),
  component: App,
});
