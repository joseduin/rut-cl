import { describe, it, expect } from 'vitest'
import { compare } from '../src/compare'

describe('compare', () => {
    it('should compare two RUTs', () => {
        expect(compare('12345678-9', '12345678-9')).toBe(true)
        expect(compare('12.345.678-9', '12345678-9')).toBe(true)
        expect(compare('12.345.678-9', '12.345.678-9')).toBe(true)
        expect(compare('12345678-9', '12345678-k')).toBe(false)
        expect(compare('12345678-9', '12345678-9', { strict: true })).toBe(true)
        expect(compare('12345678-9', '12345678-k', { strict: true })).toBe(false)
    })
})