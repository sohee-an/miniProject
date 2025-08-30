import jsonLogic from 'json-logic-js';

export function evalVisible(rule: unknown, values: any): boolean {
  if (!rule) return true;
  try {
    return !!jsonLogic.apply(rule as any, values);
  } catch {
    return true;
  }
}
