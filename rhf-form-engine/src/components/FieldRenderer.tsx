import { useWatch, UseFormRegister, Control } from 'react-hook-form';
import { evalVisible } from '@utils/visible.ts';
import type { FormSchema } from '../types/schema-types';

type Props<T> = {
  section: FormSchema['sections'][number];
  control: Control<T>;
  register: UseFormRegister<T>;
};

export default function FieldRenderer<T>({
  section,
  control,
  register,
}: Props<T>) {
  // MVP: 전체 값 구독(나중에 최적화 가능)
  const values = useWatch({ control }) as any;

  return (
    <div className="grid gap-3">
      {section.fields.map((f) => {
        if (!evalVisible(f.visibleWhen, values)) return null;

        if (f.type === 'text' || f.type === 'number') {
          return (
            <label key={f.id} className="grid gap-1">
              <span className="text-xs text-slate-600">{f.label}</span>
              <input
                type={f.type === 'number' ? 'number' : 'text'}
                {...register(f.path as any, {
                  valueAsNumber: f.type === 'number',
                })}
                className="border rounded-md px-2 py-1"
              />
            </label>
          );
        }

        if (f.type === 'checkbox') {
          return (
            <label key={f.id} className="inline-flex items-center gap-2">
              <input type="checkbox" {...register(f.path as any)} />
              <span className="text-sm">{f.label}</span>
            </label>
          );
        }

        return null;
      })}
    </div>
  );
}
