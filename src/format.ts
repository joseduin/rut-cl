import { clean } from "./clean"
export interface FormatOptions {
    /**
     * Separator for thousands.
     * Use a string for a custom separator, or false to disable.
     * @default '.'
     */
    dots?: string | boolean
    /**
     * Separator for the verifier digit.
     * @default '-'
     */
    hyphen?: string | boolean

    /**
     * Whether to uppercase the verifier digit.
     * @default false
     */
    uppercase?: boolean
}

/**
 * Formats a Chilean RUT with custom separators.
 */
export function format(rut: string, options: FormatOptions = {}): string {
    const { dots = '.', hyphen = '-', uppercase = true } = options
    const normalized = clean(rut, { strict: true })

    if (normalized.length <= 1) {
        return normalized
    }

    const body = normalized.slice(0, -1)
    const verifier = normalized.slice(-1)

    const hyphenSeparator = typeof hyphen === 'string' ? hyphen : hyphen === false ? '' : '-'
    const dotSeparator = typeof dots === 'string' ? dots : dots === false ? '' : '.'
    const formattedBody = dotSeparator
        ? body.replace(/\d(?=(\d{3})+$)/g, `$&${dotSeparator}`)
        : body

    const result = `${formattedBody}${hyphenSeparator}${verifier}`;
    return uppercase ? result : result.toLowerCase()
}
