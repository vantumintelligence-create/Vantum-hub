import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { bindings } from "../bindings.server";

const leadInput = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional(),
  business: z.string().max(160).optional(),
  message: z.string().max(2000).optional(),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator(leadInput)
  .handler(async ({ data }) => {
    const { DB } = bindings();
    if (!DB) {
      throw new Error("Lead storage is not available right now.");
    }
    const id = crypto.randomUUID();
    await DB.prepare(
      `INSERT INTO leads (id, name, email, phone, business, message, created_at)
       VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)`,
    )
      .bind(
        id,
        data.name,
        data.email,
        data.phone ?? null,
        data.business ?? null,
        data.message ?? null,
        new Date().toISOString(),
      )
      .run();
    return { id };
  });
