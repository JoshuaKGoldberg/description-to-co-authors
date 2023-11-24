import { describe, expect, it } from "vitest";

import { commitToCoAuthors } from "./index.js";

describe("commitToCoAuthors", () => {
	it.each([
		["", []],
		["unrelated", []],
		["unrelated:", []],
		["@username", []],
		["unrelated: @username", []],
		["Co-authored-by:", []],
		["Co-authored-by: ", []],
		["co-authored-by: ShortName", [{ name: "ShortName" }]],
		["Co-authored-by: ShortName", [{ name: "ShortName" }]],
		["CO-AUTHORED-BY: ShortName", [{ name: "ShortName" }]],
		["Co-authored-by: Two Names", [{ name: "Two Names" }]],
		["Co-authored-by: Three Full Names", [{ name: "Three Full Names" }]],
		["Co-authored-by: @username", [{ username: "username" }]],
		["Co-authored-by: <abc@def.ghi>", [{ email: "abc@def.ghi" }]],
		[
			"Co-authored-by: @username <abc@def.ghi>",
			[{ email: "abc@def.ghi", username: "username" }],
		],
		[
			"Co-authored-by: ShortName <abc@def.ghi>",
			[{ email: "abc@def.ghi", name: "ShortName" }],
		],
		[
			"Co-authored-by: Two Names <abc@def.ghi>",
			[{ email: "abc@def.ghi", name: "Two Names" }],
		],
		[
			"Co-authored-by: Three Full Names <abc@def.ghi>",
			[{ email: "abc@def.ghi", name: "Three Full Names" }],
		],
	])("%s", (input, expected) => {
		expect(commitToCoAuthors(input)).toEqual(expected);
	});
});
