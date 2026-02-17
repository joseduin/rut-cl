import { describe, it, expect } from 'vitest'
import { parse } from '../src/parse'

describe('parse', () => {
    it('parsea correctamente RUT válido', () => {
        const result = parse('12.345.678-5')

        expect(result.isValid).toBe(true)
        expect(result.digits).toBe('12345678')
        expect(result.verifier).toBe('5')
        expect(result.expectedVerifier).toBe('5')
    })

    it('marca inválido si DV incorrecto', () => {
        const result = parse('12.345.678-9')

        expect(result.isValid).toBe(false)
    })

    it('devuelve objeto vacío si no parseable', () => {
        const result = parse('abc')

        expect(result.isValid).toBe(false)
        expect(result.digits).toBe('')
    })

    it('retorna objeto vacío si digits contiene K', () => {
        const result = parse('KK')
        expect(result.isValid).toBe(false)
    })

    it('should return null for missing hyphen', () => {
        const result = parse('7618285K')
        expect(result.isValid).toBe(false)
    })

    it('should return null for invalid verifier character', () => {
        const result = parse('7.618.285-A')
        expect(result.isValid).toBe(false)
    })
})
