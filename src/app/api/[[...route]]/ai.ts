import { z } from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { replicate } from "@/lib/replicate";

const app = new Hono().post(
  "/generate-image",
  zValidator(
    "json",
    z.object({
      prompt: z.string(),
    })
  ),
  async (c) => {
    const { prompt } = c.req.valid("json");
    console.log("prompt", prompt);

    // const input = {
    //   cfg: 3.5,
    //   steps: 28,
    //   prompt: prompt,
    //   aspect_ratio: "3:2",
    //   output_format: "webp",
    //   output_quality: 90,
    //   negative_prompt: "",
    //   prompt_strength: 0.85,
    // };

    // const output = await replicate.run("stability-ai/stable-diffusion-3", {
    //   input,
    // });

    const input = {
      prompt:
        'The photo: Create a cinematic, photorealistic medium shot capturing the nostalgic warmth of a late 90s indie film. The focus is a young woman with brightly dyed pink-gold hair and freckled skin, looking directly and intently into the camera lens with a hopeful yet slightly uncertain smile, she is slightly off-center. She wears an oversized, vintage band t-shirt that says "Replicate" (slightly worn) over a long-sleeved striped top and simple silver stud earrings. The lighting is soft, golden hour sunlight streaming through a slightly dusty window, creating lens flare and illuminating dust motes in the air. The background shows a blurred, cluttered bedroom with posters on the wall and fairy lights, rendered with a shallow depth of field. Natural film grain, a warm, slightly muted color palette, and sharp focus on her expressive eyes enhance the intimate, authentic feel',
      image_size: "1K",
      aspect_ratio: "16:9",
      output_format: "jpg",
      safety_filter_level: "block_medium_and_above",
    };

    const output = await replicate.run("google/imagen-4", { input });
    const res = output as Array<string>;

    return c.json({ data: res[0] });
  }
);

export default app;
