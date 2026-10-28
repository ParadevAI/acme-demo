import { describe, expect, it } from "vitest";
import { clamp, isBlank, normalizeQuery } from "./input";

describe("normalizeQuery", () => {
	it("collapses whitespace and lowercases", () => {
		expect(normalizeQuery("  Deploy   Logs ")).toBe("deploy logs");
	});

	it("detects blank input", () => {
		expect(isBlank("   ")).toBe(true);
	});
});

describe("clamp", () => {
	it("returns value when in range", () => {
		expect(clamp(5, 0, 10)).toBe(5);
	});

	it("returns min when below", () => {
		expect(clamp(-3, 0, 10)).toBe(0);
	});

	it("returns max when above", () => {
		expect(clamp(42, 0, 10)).toBe(10);
	});

	it("handles boundaries", () => {
		expect(clamp(0, 0, 10)).toBe(0);
		expect(clamp(10, 0, 10)).toBe(10);
	});
});
