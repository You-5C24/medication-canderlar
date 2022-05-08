export const rules = [
  [/^text-(\d+)$/, ([, d]) => ({ 'font-size': `${d}px` })],
  [/^m-(\d+)$/, ([, d]) => ({ margin: `${d}px` })],
  [/^mx-(\d+)$/, ([, d]) => ({ margin: `0 ${d}px 0 ${d}px` })],
  [/^my-(\d+)$/, ([, d]) => ({ margin: `${d}px 0 ${d}px 0` })],
  [/^mt-(\d+)$/, ([, d]) => ({ 'margin-top': `${d}px` })],
  [/^mb-(\d+)$/, ([, d]) => ({ 'margin-bottom': `${d}px` })],
  [/^ml-(\d+)$/, ([, d]) => ({ 'margin-left': `${d}px` })],
  [/^mr-(\d+)$/, ([, d]) => ({ 'margin-right': `${d}px` })],
  [/^p-(\d+)$/, ([, d]) => ({ padding: `${d}px` })],
  [/^pt-(\d+)$/, ([, d]) => ({ 'padding-top': `${d}px` })],
  [/^pb-(\d+)$/, ([, d]) => ({ 'padding-bottom': `${d}px` })],
  [/^pl-(\d+)$/, ([, d]) => ({ 'padding-left': `${d}px` })],
  [/^pr-(\d+)$/, ([, d]) => ({ 'padding-right': `${d}px` })]
];