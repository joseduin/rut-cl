import { describe, it, expect } from 'vitest'
import { format } from '../src/format'

describe('format', () => {
    it('formatea correctamente', () => {
        expect(format('123456785')).toBe('12.345.678-5')
        expect(format('7618285k')).toBe('7.618.285-K')
        expect(format('7618285k', { uppercase: false })).toBe('7.618.285-k')
    })

    it('formatea aunque venga ya formateado', () => {
        expect(format('12.345.678-5')).toBe('12.345.678-5')
    })

    it('retorna limpio si es muy corto', () => {
        expect(format('1')).toBe('1')
        expect(format('12')).toBe('1-2')
        expect(format('123')).toBe('12-3')
        expect(format('1234')).toBe('123-4')
    })

    it('formatea aunque tenga caracteres especiales', () => {
        expect(format('12*345*678*5')).toBe('12.345.678-5')
    })

    it('permite personalizar separadores', () => {
        expect(format('123456785', { dots: ',', hyphen: '/' })).toBe('12,345,678/5')
    })

    it('permite desactivar los puntos', () => {
        expect(format('123456785', { dots: false })).toBe('12345678-5')
    })

    it('permite desactivar el guion y puntos', () => {
        expect(format('123456785', { hyphen: false, dots: false })).toBe('123456785')
    })

    it('should format without dots', () => {
        const result = format('7618285K', { dots: false })
        expect(result).toBe('7618285-K')
    })

    it('should format without hyphen', () => {
        const result = format('7618285K', { hyphen: false })
        expect(result).toBe('7.618.285K')
    })

    it('should format without dots and hyphen', () => {
        const result = format('7618285K', { dots: false, hyphen: false })
        expect(result).toBe('7618285K')
    })
})
