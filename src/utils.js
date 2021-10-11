export const VITAMIN = 'vtmn';

function toClassName(value) {
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

export function classnames(...args) {
  return args.map(toClassName).filter(Boolean).join(' ');
}

export const pipe = (...ops) => ops.reduce((a, b) => (n) => a(b(n)));
export const compose = (...ops) => ops.reduce((a, b) => (n) => b(a(n)));

const namespace = (n) => (x) => [n, x].join('-');
export const vitamin = namespace(VITAMIN);
const _property = (p) => (x) => [x, p].join('_');
const _variant = (v) => (x) => [x, v].join('--');

export const variant = (comp, prop, vari) =>
  compose(() => vitamin(comp), _property(prop), _variant(vari))();
