/** Normalisation helpers for the command bar. */

export function normalizeQuery(raw: string): string {
	return raw.trim().replace(/\s+/g, " ").toLowerCase();
}

export function isBlank(raw: string): boolean {
	return normalizeQuery(raw).length === 0;
}

/** Returns the sum of two numbers. */
export function sum(a: number, b: number): number {
	return a + b;
}
