import { describe, it, expect } from "vitest"
import { validate } from "../src/validate"

describe('validate', () => {
    it('valida RUT correcto', () => {
        expect(validate('12.345.678-5')).toBe(true)
    })

    it('detecta DV incorrecto', () => {
        expect(validate('12.345.678-9')).toBe(false)
    })

    it('detecta estructura inválida', () => {
        expect(validate('abc')).toBe(false)
    })

    it('soporta K minúscula', () => {
        expect(validate('11111111-1')).toBe(true)
    })

    it('Validar massivamente Ruts', () => {
        expect(validate('18585543-0')).toBe(true)
        expect(validate('18.585.543-0')).toBe(true)
        expect(validate('18.972.631-7')).toBe(true)
        expect(validate('18972631-7')).toBe(true)
        expect(validate('9.068.826-k')).toBe(true)
        expect(validate('9068826-k')).toBe(true)
        expect(validate('12.345.678-5')).toBe(true)
        expect(validate('18.972.631-7')).toBe(true)

        expect(validate('9.999.999-9')).toBe(false)
        expect(validate('18.972.631-0')).toBe(false)
        expect(validate('18,972,631-7')).toBe(false)
        expect(validate('18*972*631-7')).toBe(false)
        expect(validate('18-972-631-7')).toBe(false)
        expect(validate('error18.972.631-7')).toBe(false)
        expect(validate('9068826-1')).toBe(false)
        expect(validate('')).toBe(false)
        expect(validate('189726317')).toBe(false)
        expect(validate('9068826k')).toBe(false)
        expect(validate('12345678-0')).toBe(false)
        expect(validate('18.972.631-0')).toBe(false)
    })
})