import { z } from 'zod';

export const zField = z.object({
  id: z.string(),
  path: z.string(),
  type: z.enum(['text', 'number', 'checkbox', 'select']),
  label: z.string(),
  options: z.array(z.object({ label: z.string(), value: z.any() })).optional(),
  visibleWhen: z.any().optional(), //보일지 말지를 정하는거임
  rules: z
    .object({
      required: z.boolean().optional(),
      min: z.number().optional(),
      max: z.number().optional(),
      minLength: z.number().optional(),
      maxLength: z.number().optional(),
      pattern: z.string().optional(),
    })
    .optional(),
});

export const zSection = z.object({
  id: z.string(),
  title: z.string(),
  fields: z.array(zField).min(1),
});

export const zFormSchema = z.object({
  title: z.string().optional(),
  sections: z.array(zSection).min(1),
});

export type FormSchema = z.infer<typeof zFormSchema>;
