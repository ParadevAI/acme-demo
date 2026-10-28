/** Normalisation helpers for the command bar. */

export function normalizeQuery(raw: string): string {
	return raw.trim().replace(/\s+/g, " ").toLowerCase();
}

export function isBlank(raw: string): boolean {
	return normalizeQuery(raw).length === 0;
}

export function clamp(value: number, min: number, max: number): number {
	if (value < min) return min;
	if (value > max) return max;
	return value;
}
