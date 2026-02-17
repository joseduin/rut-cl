import { clean } from "./clean"

/**
 * Calculates the verifier digit (DV) using modulo 11.
 *
 * Returns null if input is not strictly numeric.
 * Does NOT validate length.
 */
export function getVerifier(rut: string): string | null {
    const digits = clean(rut, { strict: false })
    if (!/^[0-9]+$/.test(digits)) {
        return null
    }

    let sum = 0
    let multiplier = 2

    for (let i = digits.length - 1; i >= 0; i--) {
        sum += Number(digits[i]) * multiplier
        multiplier = multiplier === 7 ? 2 : multiplier + 1
    }

    const result = 11 - (sum % 11)

    if (result === 11) return "0"
    if (result === 10) return "K"
    return String(result)
}
