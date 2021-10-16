function toClassName(value: unknown): string {
  let result = '';

  if (typeof value === 'string' || typeof value === 'number') {
    result += value;
  } else if (typeof value === 'object') {
    if (Array.isArray(value)) {
      result = value.map(toClassName).filter(Boolean).join(' ');
    } else {
      for (let key in value) {
        if (value[key]) {
          result && (result += ' ');
          result += key;
        }
      }
    }
  }

  return result;
}

export function classnames(...args: unknown[]): string {
  return args.map(toClassName).filter(Boolean).join(' ');
}

export const pipe = (...ops) => ops.reduce((a, b) => (n) => a(b(n)));
export const compose = (...ops) => ops.reduce((a, b) => (n) => b(a(n)));
export const VITAMIN = 'vtmn';
const namespace = (n:string) => (x:string):string => [n, x].join('-');
export const vitamin = namespace(VITAMIN);
const _property = (p:string) => (x:string):string => [x, p].join('_');
const _variant = (v:string) => (x:string):string => [x, v].join('--');
export const gen_variant = (comp:string, prop:string, vari:string):string =>
  compose(() => vitamin(comp), _property(prop), _variant(vari))();
export const random_id = ():string => Math.random().toString();
