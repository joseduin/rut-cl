# rut-cl

Chilean RUT (Rol Único Tributario) validator and formatter for JavaScript and TypeScript.

* ✅ Zero dependencies
* ✅ Tree-shakable
* ✅ ESM and CommonJS support
* ✅ Full TypeScript support
* ✅ Correct modulo 11 implementation
* ✅ Ultra lightweight (< 1KB gzip)

---

[🇪🇸 Español](./README.md) | 🇺🇸 English

---

## Installation

```bash
npm install rut-cl
```

---

## Usage

### Validate a RUT

```ts
import { validate } from 'rut-cl'

validate('7.618.285-K') // true
```

---

### Format a RUT

```ts
import { format } from 'rut-cl'

format('7618285K')
// 7.618.285-K
```

Options:

```ts
format('7618285K', {
  withDots: false,
  withHyphen: false
})
```

---

### Clean a RUT

```ts
import { clean } from 'rut-cl'

clean('7.618.285-K')
// 7618285K
```

---

### Parse a RUT

```ts
import { parse } from 'rut-cl'

parse('7.618.285-K')

/*
{
  body: '7618285',
  verifier: 'K'
}
*/
```

---

### Compare RUTs

```ts
import { compare } from 'rut-cl'

compare('7.618.285-K', '7618285k')
// true
```

---

## API

* `validate(rut: string): boolean`
* `format(rut: string, options?): string`
* `clean(rut: string, options?): string`
* `parse(rut: string): ParsedRut | null`
* `compare(rut1: string, rut2: string): boolean`
* `calculateVerifier(body: string): string | null`

---

## Compatibility

Works with:

* Node.js
* Vite
* Next.js
* Nuxt
* Webpack
* React
* Vue
* Angular
* Svelte

---

## License

MIT
