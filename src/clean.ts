export interface CleanOptions {
    /**
     * If true (default), removes everything except numbers and 'K'.
     * If false, only removes dots (.) and hyphens (-).
     */
    strict?: boolean
}

/**
 * Removes formatting characters from a RUT string.
 *
 * Does NOT validate structure.
 */
export function clean(rut: string, options: CleanOptions = { strict: true }): string {
    const { strict = true } = options
    const normalized = rut.trim().toUpperCase().replace(/^0+/, '')

    if (strict) {
        return normalized.replace(/[^0-9K]/g, '')
    }

    return normalized.replace(/[.,-]/g, '')
}
