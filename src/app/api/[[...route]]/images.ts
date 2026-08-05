import { unsplash } from "@/lib/unsplash";
import { Hono } from "hono";

const DEFAULT_COUNT = 50;

const DEFAULT_COLLECTION_IDS = ["317099"];

const app = new Hono().get("/", async (c) => {
  const { data, error } = await unsplash.GET("/photos/random", {
    params: {
      query: {
        collections: DEFAULT_COLLECTION_IDS,
        count: DEFAULT_COUNT,
      },
    },
  });

  if (error || !data) {
    return c.json({ error: "something went wrong" }, 400);
  }

  const images = Array.isArray(data) ? data : [data];

  return c.json({ data: images });
});

export default app;
