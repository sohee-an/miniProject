// buildValueZod.ts
import { z } from 'zod';
import type { FormSchema } from '../types/schema-types';

export function buildValueZodFromSchema(s: FormSchema) {
  const tree: Record<string, any> = {};

  for (const sec of s.sections) {
    for (const f of sec.fields) {
      let node: z.ZodTypeAny;

      if (f.type === 'number') {
        let n = z.coerce.number();
        if (f.rules?.min !== undefined) n = n.min(f.rules.min);
        if (f.rules?.max !== undefined) n = n.max(f.rules.max);
        node = n;
      } else if (f.type === 'checkbox') {
        node = z.boolean();
      } else {
        // text
        let t = z.string();
        if (f.rules?.minLength) t = t.min(f.rules.minLength);
        if (f.rules?.maxLength) t = t.max(f.rules.maxLength);
        if (f.rules?.pattern) t = t.regex(new RegExp(f.rules.pattern));
        node = t;
      }

      if (f.rules?.required) {
        node = node.refine((v) => {
          if (typeof v === 'string') return v.trim().length > 0;
          if (typeof v === 'number') return !Number.isNaN(v);
          if (typeof v === 'boolean') return v === true; // 체크박스 required
          return v != null;
        }, 'Required');
      } else {
        // required가 아니면 값 없을 때 통과 허용
        node = node.optional();
      }

      setPath(tree, f.path, node);
    }
  }

  return toZodObject(tree);
}

function setPath(obj: any, path: string, val: any) {
  const ks = path.split('.');
  const last = ks.pop()!;
  const base = ks.reduce((o, k) => (o[k] ??= {}), obj);
  base[last] = val;
}

function toZodObject(obj: any): any {
  if (obj?.parse) return obj; // 이미 Zod 노드
  const out: Record<string, any> = {};
  for (const [k, v] of Object.entries(obj)) out[k] = toZodObject(v);
  return z.object(out);
}
