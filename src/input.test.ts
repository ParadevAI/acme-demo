import { describe, expect, it } from "vitest";
import { isBlank, normalizeQuery, sum } from "./input";

describe("normalizeQuery", () => {
	it("collapses whitespace and lowercases", () => {
		expect(normalizeQuery("  Deploy   Logs ")).toBe("deploy logs");
	});

	it("detects blank input", () => {
		expect(isBlank("   ")).toBe(true);
	});
});

describe("sum", () => {
	it("adds positive numbers", () => {
		expect(sum(2, 3)).toBe(5);
	});

	it("adds negative numbers", () => {
		expect(sum(-2, -3)).toBe(-5);
	});

	it("handles mixed signs and zero", () => {
		expect(sum(-2, 3)).toBe(1);
		expect(sum(0, 0)).toBe(0);
		expect(sum(7, 0)).toBe(7);
	});
});
