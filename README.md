# rut-cl

![npm version](https://img.shields.io/npm/v/rut-cl?style=for-the-badge)
![npm downloads](https://img.shields.io/npm/dm/rut-cl?style=for-the-badge)
![bundle size](https://img.shields.io/bundlephobia/minzip/rut-cl?style=for-the-badge)
![license](https://img.shields.io/npm/l/rut-cl?style=for-the-badge)
![typescript](https://img.shields.io/badge/typescript-supported-blue?style=for-the-badge)
![node](https://img.shields.io/node/v/rut-cl?style=for-the-badge)

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

El RUT debe contener un guion `-` separando el cuerpo del dígito verificador. Los puntos son opcionales.

```ts
import { validate } from 'rut-cl'

validate('12.345.678-5') // true
validate('12345678-5')   // true
validate('123456785')    // false (guion obligatorio)
validate('12,345,678-5') // false (caracteres inválidos)
```

---

### Formatear un RUT

```ts
import { format } from 'rut-cl'

format('123456785') // '12.345.678-5'
```

Opciones:

```ts
// Personalizar separadores
format('12345678K', { dots: ',', hyphen: '/' }) // '12,345,678/K'

// Sin puntos
format('123456785', { dots: false }) // '12345678-5'

// Sin guion
format('12345678K', { hyphen: false }) // '12.345.678K'

// Minúsculas
format('12345678K', { uppercase: false }) // '12.345.678-k'
```

---

### Limpiar un RUT

Elimina espacios y ceros a la izquierda por defecto.

```ts
import { clean } from 'rut-cl'

clean('00012.345.678-5') // '123456785'
```

Opciones de limpieza:

```ts
// Modo estricto (por defecto): Remueve todo excepto números y 'K'
clean('12*345*678-K') // '12345678K'

// Modo tolerante: Solo remueve puntos, comas y guiones
clean('12.345.678-K', { strict: false }) // '12345678K'
```

---

### Obtener el dígito verificador

```ts
import { getVerifier } from 'rut-cl'

getVerifier('12345678') // '5'
getVerifier('7618285')  // 'K'
```

---

### Parsear un RUT

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

### Comparar RUTs

Compara dos RUTs ignorando formato y mayúsculas.

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
