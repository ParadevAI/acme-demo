import { describe, expect, it } from "vitest";
import { didOverflow, isBlank, normalizeQuery } from "./input";

describe("normalizeQuery", () => {
	it("collapses whitespace and lowercases", () => {
		expect(normalizeQuery("  Deploy   Logs ")).toBe("deploy logs");
	});

	it("detects blank input", () => {
		expect(isBlank("   ")).toBe(true);
	});
});

describe("overflow handling", () => {
	it("truncates queries past the maximum length", () => {
		const long = "a".repeat(200);
		expect(normalizeQuery(long)).toHaveLength(120);
	});

	it("reports whether the input overflowed", () => {
		expect(didOverflow("a".repeat(200))).toBe(true);
		expect(didOverflow("deploy logs")).toBe(false);
	});
});
