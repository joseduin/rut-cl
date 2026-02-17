# rut-cl

Validador y formateador de RUT (Rol Único Tributario) chileno para JavaScript y TypeScript.

* ✅ Sin dependencias
* ✅ Tree-shakable
* ✅ Compatible con ESM y CommonJS
* ✅ Soporte completo para TypeScript
* ✅ Implementación módulo 11 correcta
* ✅ Ultra liviano (< 1KB gzip)

---

🇪🇸 Español | [🇺🇸 English](./README.en.md)

---

## Instalación

```bash
npm install rut-cl
```

---

## Uso

### Validar un RUT

```ts
import { validate } from 'rut-cl'

validate('7.618.285-K') // true
```

---

### Formatear un RUT

```ts
import { format } from 'rut-cl'

format('7618285K')
// 7.618.285-K
```

Opciones:

```ts
format('7618285K', {
  withDots: false,
  withHyphen: false
})
```

---

### Limpiar un RUT

```ts
import { clean } from 'rut-cl'

clean('7.618.285-K')
// 7618285K
```

---

### Parsear un RUT

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

### Comparar RUTs

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

## Compatibilidad

Funciona en:

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

## Licencia

MIT
