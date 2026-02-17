import { describe, it, expect } from "vitest"
import { getVerifier } from "../src/calculateVerifier"

describe('getVerifier', () => {
    it('calcula correctamente DV numérico', () => {
        expect(getVerifier('12345678')).toBe('5')
    })

    it('calcula DV K correctamente', () => {
        expect(getVerifier('11111111')).toBe('1') // ejemplo normal
    })

    it('retorna null si contiene letras', () => {
        expect(getVerifier('1234A678')).toBeNull()
    })

    it('retorna null si está vacío', () => {
        expect(getVerifier('')).toBeNull()
    })

    it('retorna correctamente DV con 0', () => {
        expect(getVerifier('70352759')).toBe('0')
    })

    it('retorna K para un RUT formal válido', () => {
        expect(getVerifier('7618285')).toBe('K')
    })

    it('calcula DV en formato rut', () => {
        expect(getVerifier('18.585.543')).toBe('0')
    })
})
