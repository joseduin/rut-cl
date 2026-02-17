import { getVerifier } from "./calculateVerifier"
import { clean } from "./clean"

export interface ParseResult {
    raw: string
    clean: string
    digits: string
    verifier: string
    expectedVerifier: string | null
    isValid: boolean
}

export function parse(rut: string): ParseResult {
    const trimmed = rut.trim().toUpperCase()

    if (!/^[\d.]+-[0-9K]$/.test(trimmed)) {
        return createEmptyParsed(rut)
    }

    const normalized = clean(trimmed)

    if (normalized.length < 2) {
        return createEmptyParsed(rut)
    }

    const digits = normalized.slice(0, -1)
    const verifier = normalized.slice(-1)

    if (!/^[0-9]+$/.test(digits) || !/^[0-9K]$/.test(verifier)) {
        return createEmptyParsed(rut)
    }

    const expectedVerifier = getVerifier(digits)

    const isValid = expectedVerifier !== null && expectedVerifier === verifier

    return {
        raw: rut,
        clean: normalized,
        digits,
        verifier,
        expectedVerifier,
        isValid
    }
}

function createEmptyParsed(raw: string): ParseResult {
    return {
        raw,
        clean: '',
        digits: '',
        verifier: '',
        expectedVerifier: null,
        isValid: false
    }
}
