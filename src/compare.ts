import { clean, type CleanOptions } from "./clean"

export function compare(rut1: string, rut2: string, options: CleanOptions = { strict: false }): boolean {
    const cleanRut1 = clean(rut1, options)
    const cleanRut2 = clean(rut2, options)

    return cleanRut1 === cleanRut2
}