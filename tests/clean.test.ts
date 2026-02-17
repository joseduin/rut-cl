import { describe, it, expect } from "vitest"
import { clean } from "../src/clean"

describe('clean', () => {
    it('remueve puntos y guión', () => {
        expect(clean('12.345.678-5')).toBe('123456785')
    })

    it('convierte k minúscula a mayúscula', () => {
        expect(clean('12345678-k')).toBe('12345678K')
    })

    it('remueve caracteres inválidos', () => {
        expect(clean('12a.345b678-5')).toBe('123456785')
        expect(clean('12*345*678*k')).toBe('12345678K')
        expect(clean('000189726317')).toBe('189726317')
    })

    it('retorna string vacío si no hay dígitos', () => {
        expect(clean('abc')).toBe('')
    })
})
