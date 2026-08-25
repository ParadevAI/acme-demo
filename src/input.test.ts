import { describe, expect, it } from "vitest";
import { isBlank, normalizeQuery } from "./input";

describe("normalizeQuery", () => {
	it("collapses whitespace and lowercases", () => {
		expect(normalizeQuery("  Deploy   Logs ")).toBe("deploy logs");
	});

	it("detects blank input", () => {
		expect(isBlank("   ")).toBe(true);
	});
});
