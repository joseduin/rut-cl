import { describe, it, expect } from 'vitest'
import { clean, format, parse, validate, calculateVerifier, compare } from '../src/index'

describe('index exports', () => {
    it('should export all public API functions', () => {
        expect(typeof clean).toBe('function')
        expect(typeof format).toBe('function')
        expect(typeof parse).toBe('function')
        expect(typeof validate).toBe('function')
        expect(typeof calculateVerifier).toBe('function')
        expect(typeof compare).toBe('function')
    })

    it('validate coincide con parse.isValid', () => {
        const rut = '12.345.678-5'

        expect(validate(rut)).toBe(parse(rut).isValid)
    })
})
