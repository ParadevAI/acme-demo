/** Normalisation helpers for the command bar. */

export function normalizeQuery(raw: string): string {
	return raw.trim().replace(/\s+/g, " ").toLowerCase();
}

export function isBlank(raw: string): boolean {
	return normalizeQuery(raw).length === 0;
}

/**
 * Clamps a number to the inclusive range [min, max].
 *
 * @throws {RangeError} If min is greater than max.
 */
export function clamp(value: number, min: number, max: number): number {
	if (min > max) {
		throw new RangeError("min cannot be greater than max");
	}
	if (value < min) return min;
	if (value > max) return max;
	return value;
}
