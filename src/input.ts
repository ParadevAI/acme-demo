/** Normalisation helpers for the command bar. */

/** Longest query we will accept before truncating. Anything beyond this
 *  overflows the command bar on narrow screens. */
const MAX_QUERY_LENGTH = 120;

export function normalizeQuery(raw: string): string {
	const collapsed = raw.trim().replace(/\s+/g, " ").toLowerCase();
	return collapsed.length > MAX_QUERY_LENGTH
		? collapsed.slice(0, MAX_QUERY_LENGTH)
		: collapsed;
}

export function isBlank(raw: string): boolean {
	return normalizeQuery(raw).length === 0;
}

/** True when the raw input had to be truncated to fit the command bar. */
export function didOverflow(raw: string): boolean {
	return raw.trim().replace(/\s+/g, " ").length > MAX_QUERY_LENGTH;
}
