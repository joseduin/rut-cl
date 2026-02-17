import { parse } from "./parse"

/**
 * Validates a Chilean RUT using formal domain rules.
 *
 * Returns false for:
 * - Invalid structure
 * - Non-numeric digits
 * - Incorrect verifier digit
 *
 * Never throws.
 */
export function validate(rut: string): boolean {
    return parse(rut).isValid
}
