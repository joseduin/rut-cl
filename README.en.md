# rut-cl

![npm version](https://img.shields.io/npm/v/rut-cl?style=for-the-badge)
![npm downloads](https://img.shields.io/npm/dm/rut-cl?style=for-the-badge)
![bundle size](https://img.shields.io/bundlephobia/minzip/rut-cl?style=for-the-badge)
![license](https://img.shields.io/npm/l/rut-cl?style=for-the-badge)
![typescript](https://img.shields.io/badge/typescript-supported-blue?style=for-the-badge)
![node](https://img.shields.io/node/v/rut-cl?style=for-the-badge)

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

The RUT must contain a hyphen `-` separating the body from the verifier digit. Dots are optional.

```ts
import { validate } from 'rut-cl'

validate('12.345.678-5') // true
validate('12345678-5')   // true
validate('123456785')    // false (hyphen is mandatory)
validate('12,345,678-5') // false (invalid characters)
```

---

### Format a RUT

```ts
import { format } from 'rut-cl'

format('123456785') // '12.345.678-5'
```

Options:

```ts
// Custom separators
format('12345678K', { dots: ',', hyphen: '/' }) // '12,345,678/K'

// No dots
format('123456785', { dots: false }) // '12345678-5'

// No hyphen
format('12345678K', { hyphen: false }) // '12.345.678K'

// Lowercase
format('12345678K', { uppercase: false }) // '12.345.678-k'
```

---

### Clean a RUT

Removes spaces and leading zeros by default.

```ts
import { clean } from 'rut-cl'

clean('00012.345.678-5') // '123456785'
```

Cleaning options:

```ts
// Strict mode (default): Removes everything except numbers and 'K'
clean('12*345*678-K') // '12345678K'

// Tolerant mode: Only removes dots, commas, and hyphens
clean('12.345.678-K', { strict: false }) // '12345678K'
```

---

### Get verifier digit

```ts
import { getVerifier } from 'rut-cl'

getVerifier('12345678') // '5'
getVerifier('7618285')  // 'K'
```

---

### Parse a RUT

```ts
import { parse } from 'rut-cl'

const res = parse('12.345.678-5')
/*
{
    raw: '12.345.678-5',
    clean: '123456785',
    digits: '12345678',
    verifier: '5',
    expectedVerifier: '5',
    isValid: true
}
*/
```

---

### Compare RUTs

Compares two RUTs ignoring format and casing.

```ts
import { compare } from 'rut-cl'

compare('12.345.678-5', '123456785') // true
compare('7618285-K', '7618285-k')     // true
```

---

## API

* `validate(rut: string): boolean`
* `format(rut: string, options?: FormatOptions): string`
* `clean(rut: string, options?: CleanOptions): string`
* `parse(rut: string): RutParsed`
* `compare(rut1: string, rut2: string, options?: CleanOptions): boolean`
* `getVerifier(rut: string): string | null`

---

## Compatibility
-
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="node" width="40" height="40"/> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vite/vite-original.svg" alt="vite" width="40" height="40"/> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="next" width="40" height="40"/> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nuxtjs/nuxtjs-original.svg" alt="nuxt" width="40" height="40"/> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-original.svg" alt="webpack" width="40" height="40"/> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="40" height="40"/> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" alt="vue.js" width="40" height="40"/> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" alt="angular" width="40" height="40"/> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg" alt="svelte" width="40" height="40"/> 

---

## License

MIT
