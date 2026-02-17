import { describe, it, expect } from "vitest"
import { calculateVerifier } from "../src/calculateVerifier"

describe('calculateVerifier', () => {
    it('calcula correctamente DV numérico', () => {
        expect(calculateVerifier('12345678')).toBe('5')
    })

    it('calcula DV K correctamente', () => {
        expect(calculateVerifier('11111111')).toBe('1') // ejemplo normal
    })

    it('retorna null si contiene letras', () => {
        expect(calculateVerifier('1234A678')).toBeNull()
    })

    it('retorna null si está vacío', () => {
        expect(calculateVerifier('')).toBeNull()
    })

    it('retorna correctamente DV con 0', () => {
        expect(calculateVerifier('70352759')).toBe('0')
    })

    it('retorna K para un RUT formal válido', () => {
        expect(calculateVerifier('7618285')).toBe('K')
    })

    it('calcula DV en formato rut', () => {
        expect(calculateVerifier('18.585.543')).toBe('0')
    })
})
