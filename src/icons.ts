/** Shared icon size scale. Keep these in step with the design tokens. */
export const ICON_SIZES = {
	sm: 14,
	md: 16,
	lg: 20,
	xl: 24,
} as const;

export type IconSize = keyof typeof ICON_SIZES;

export function iconPx(size: IconSize): number {
	return ICON_SIZES[size];
}
