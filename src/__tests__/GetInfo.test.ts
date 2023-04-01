import { getInfo } from "../index";

import { SvelteInformation, Prop, Action, Slot } from "../functions/interfaces";

const listFiles = {
	component_JS: "src/__tests__/test_files/component_simple_js.svelte",
	component_TS: "src/__tests__/test_files/component_simple_ts.svelte",
	component_NO_SCRIPT:
		"src/__tests__/test_files/component_simple_no_script.svelte",
	component_MULTI: "src/__tests__/test_files/component_multi.svelte",
	component_BAD_FORMAT: "src/__tests__/test_files/component_bad_format.svelte"
};

// prettier-ignore
const listCheckValuesProps: Array<Prop> = [
    {
        name: `string_noType`,
        type: undefined,
        defaultValue: `a - no type`
    },
    {
        name: `string_yesType`,
        type: `string`,
        defaultValue: `a - yes type`
    },
    {
        name: `string_yesType_noValue`,
        type: `string`,
        defaultValue: undefined
    },
    {
        name: `number_noType`,
        type: undefined,
        defaultValue: `1`
    },
    {
        name: `number_yesType`,
        type: `number`,
        defaultValue: `2`
    },
    {
        name: `number_yesType_noValue`,
        type: `number`,
        defaultValue: undefined
    },
    {
        name: `boolean_noType`,
        type: undefined,
        defaultValue: `false`
    },
    {
        name: `boolean_yesType`,
        type: `boolean`,
        defaultValue: `true`
    },
    {
        name: `boolean_yesType_noValue`,
        type: `boolean`,
        defaultValue: undefined
    },
        {
        name: `array_string_noType`,
        type: undefined,
        defaultValue: `["name"]`
    },
        {
        name: `array_string_yesType`,
        type: `Array<string>`,
        defaultValue: `["yes type"]`
    },
    {
        name: `array_string_yesType_noValue`,
        type: `Array<string>`,
        defaultValue: undefined
    },
    {
        name: `array_number_noType`,
        type: undefined,
        defaultValue: `[1, 2, 3]`
    },
    {
        name: `array_number_yesType`,
        type: `Array<number>`,
        defaultValue: `[1, 2, 3]`
    },
    {
        name: `array_number_yesType_noValue`,
        type: `Array<number>`,
        defaultValue: undefined
    },
    {
        name: `object_noType`,
        type: undefined,
        defaultValue: `{ name: "no type" }`
    },
    {
        name: `object_yesType`,
        type: `object`,
        defaultValue: `{ name: "yes type" }`
    },
    {
        name: `object_yesType_noValue`,
        type: `object`,
        defaultValue: undefined
    },
        {
        name: `array_object_noType`,
        type: undefined,
        defaultValue: `[
    { name: "no type" },
    { name: "no type 2" },
    { name: "no type 3" },
  ]`
    },
    {
        name: `array_object_yesType`,
        type: `Array<object>`,
        defaultValue: `[
    { name: "yes type" },
    { name: "yes type 2" },
    { name: "yes type 3" },
  ]`
    },
    {
        name: `array_object_yesType_noValue`,
        type: `Array<object>`,
        defaultValue: undefined
    },
    {
        name: `object_complex_noType`,
        type: undefined,
        defaultValue: `{ name: "no type", value: "complex" }`
    },
    {
        name: `object_complex_yesType`,
        type: `object`,
        defaultValue: `{
    name: "yes type",
    value: "complex",
  }`
    },
    {
        name: `object_complex_yesType_noValue`,
        type: `object`,
        defaultValue: undefined
    },
    {
        name: `object_complex_object_noType`,
        type: undefined,
        defaultValue: `[
    { name: "no type", value: "complex", n: 1 },
    { name: "no type 2", value: "complex", n: 2 },
    { name: "no type 3", value: "complex", n: 3 },
  ]`
    },
    {
        name: `object_complex_object_yesType`,
        type: `object`,
        defaultValue: `[
    { name: "yes type", value: "complex", n: 1 },
    { name: "yes type 2", value: "complex", n: 2 },
    { name: "yes type 3", value: "complex", n: 3 },
  ]`
    },
    {
        name: `object_complex_object_yesType_noValue`,
        type: `object`,
        defaultValue: undefined
    },
        {
        name: `function_noType`,
        type: undefined,
        defaultValue: `() => "no type"`
    },
    {
        name: `function_yesType`,
        type: `Function`,
        defaultValue: `() => "yes type"`
    },
    {
        name: `function_yesType_noValue`,
        type: `Function`,
        defaultValue: undefined
    },
    {
        name: `string_literal_yesType`,
        type: `"a" | "b" | "c"`,
        defaultValue: `c`
    },
    {
        name: `string_literal_yesType_noValue`,
        type: `"a" | "b" | "c"`,
        defaultValue: undefined
    },
    {
        name: `string_literal_multiLine_yesType`,
        type: `
    | "bar"
    | "baz"
    | "qux"
    | "quux"
    | "corge"
    | "grault"
    | "garply"
`,
        defaultValue: `qux`
    },
    {
        name: `string_literal_multiLine_yesType_noValue`,
        type: `
    | "bar"
    | "baz"
    | "qux"
    | "quux"
    | "corge"
    | "grault"
    | "garply"
`,
        defaultValue: undefined
    }
];

const listCheckValueActions: Array<Action> = [
	{ name: "message" },
	{ name: "notify" },
	{ name: "calc" },
	{ name: "claps" },
	{ name: "click" },
	{ name: "mouse-enter" },
	{ name: "mouse-leave" }
];

const listCheckValueSlot: Array<Slot> = [
	{ name: undefined, anonymous: true },
	{ name: "header", anonymous: false },
	{ name: "footer", anonymous: false }
];

describe("Parse svelte files - SCRIPTS", () => {
	test("parse file with no script", () => {
		const result: SvelteInformation = getInfo(listFiles.component_NO_SCRIPT);
		expect(result.props.length).toBe(0);
	});

	test("parse file with only 1 prop (JS)", () => {
		const result: SvelteInformation = getInfo(listFiles.component_JS);
		expect(result.props.length).toBe(1);
	});

	test("parse file with only 1 prop (TS)", () => {
		const result: SvelteInformation = getInfo(listFiles.component_TS);
		expect(result.props.length).toBe(1);
	});

	test("parse file with 32 props (MULTI)", () => {
		const result: SvelteInformation = getInfo(listFiles.component_MULTI);
		expect(result.props.length).toBe(34);
	});

	test("parse file with 32 props (BAD FORMATS)", () => {
		const result: SvelteInformation = getInfo(listFiles.component_BAD_FORMAT);
		expect(result.props.length).toBe(34);
	});
});

describe("Parse Svelte - check props (MULTI)", () => {
	const result: SvelteInformation = getInfo(listFiles.component_MULTI);
	const props: Array<Prop> = result.props;
	props.forEach((prop: Prop, index: number) => {
		test(`check prop: name=${prop.name} - type=${prop.type}`, () => {
			expect(prop.name).toBe(listCheckValuesProps[index].name);
			expect(prop.type).toBe(
				listCheckValuesProps[index].type
					?.replace(/^\s*\|\s*|\s{2,}/gm, " ")
					.trim()
			);
			expect(prop.defaultValue?.replace(/(\r\n|\n|\r)/gm, "")).toBe(
				listCheckValuesProps[index].defaultValue
					?.trim()
					?.replace(/(\r\n|\n|\r)/gm, "")
			);
		});
	});
});

describe("Parse Svelte - check props (BAD FORMAT)", () => {
	const result: SvelteInformation = getInfo(listFiles.component_BAD_FORMAT);
	const props: Array<Prop> = result.props;
	props.forEach((prop: Prop, index: number) => {
		test(`check prop: name=${prop.name} - type=${prop.type}`, () => {
			expect(prop.name).toBe(listCheckValuesProps[index].name);
			expect(prop.type).toBe(
				listCheckValuesProps[index].type
					?.replace(/^\s*\|\s*|\s{2,}/gm, " ")
					.trim()
			);
			expect(prop.defaultValue?.replace(/(\r\n|\n|\r)/gm, "")).toBe(
				listCheckValuesProps[index].defaultValue
					?.trim()
					?.replace(/(\r\n|\n|\r)/gm, "")
			);
		});
	});
});

describe("Parse svelte files - ACTIONS", () => {
	test("parse file with no actions", () => {
		const result: SvelteInformation = getInfo(listFiles.component_NO_SCRIPT);
		expect(result.actions.length).toBe(0);
	});

	test("parse file with only 1 action (JS)", () => {
		const result: SvelteInformation = getInfo(listFiles.component_JS);
		expect(result.actions.length).toBe(1);
	});

	test("parse file with only 1 action (TS)", () => {
		const result: SvelteInformation = getInfo(listFiles.component_TS);
		expect(result.actions.length).toBe(1);
	});

	test("parse file with 7 actions (MULTI)", () => {
		const result: SvelteInformation = getInfo(listFiles.component_MULTI);
		expect(result.actions.length).toBe(7);
	});

	test("parse file with 7 actions (BAD FORMAT)", () => {
		const result: SvelteInformation = getInfo(listFiles.component_BAD_FORMAT);
		expect(result.actions.length).toBe(7);
	});
});

describe("Parse Svelte - check actions (MULTI)", () => {
	const result: SvelteInformation = getInfo(listFiles.component_MULTI);
	const actions: Array<Action> = result.actions;
	actions.forEach((action: Action, index: number) => {
		test(`check action: name=${action.name}`, () => {
			expect(action.name).toBe(listCheckValueActions[index].name);
		});
	});
});

describe("Parse Svelte - check actions (BAD FORMAT)", () => {
	const result: SvelteInformation = getInfo(listFiles.component_BAD_FORMAT);
	const actions: Array<Action> = result.actions;
	actions.forEach((action: Action, index: number) => {
		test(`check action: name=${action.name}`, () => {
			expect(action.name).toBe(listCheckValueActions[index].name);
		});
	});
});

describe("Parse svelte files - SLOTS", () => {
	test("parse file with no slot", () => {
		const result: SvelteInformation = getInfo(listFiles.component_NO_SCRIPT);
		expect(result.slots.length).toBe(0);
	});

	test("parse file with only 1 slot (JS)", () => {
		const result: SvelteInformation = getInfo(listFiles.component_JS);
		expect(result.slots.length).toBe(1);
	});

	test("parse file with only 1 slot (TS)", () => {
		const result: SvelteInformation = getInfo(listFiles.component_TS);
		expect(result.slots.length).toBe(1);
	});

	test("parse file with 3 slots (MULTI)", () => {
		const result: SvelteInformation = getInfo(listFiles.component_MULTI);
		expect(result.slots.length).toBe(3);
	});

	test("parse file with 3 slots (BAD FORMAT)", () => {
		const result: SvelteInformation = getInfo(listFiles.component_BAD_FORMAT);
		expect(result.slots.length).toBe(3);
	});
});

describe("Parse Svelte - check slots (MULTI)", () => {
	const result: SvelteInformation = getInfo(listFiles.component_MULTI);
	const slots: Array<Slot> = result.slots;
	slots.forEach((slot: Slot, index: number) => {
		test(`check slot: name=${slot.name}, anonymous=${slot.anonymous}`, () => {
			expect(slot.name).toBe(listCheckValueSlot[index].name);
			expect(slot.anonymous).toBe(listCheckValueSlot[index].anonymous);
		});
	});
});

describe("Parse Svelte - check slots (BAD FORMAT)", () => {
	const result: SvelteInformation = getInfo(listFiles.component_BAD_FORMAT);
	const slots: Array<Slot> = result.slots;
	slots.forEach((slot: Slot, index: number) => {
		test(`check slot: name=${slot.name}, anonymous=${slot.anonymous}`, () => {
			expect(slot.name).toBe(listCheckValueSlot[index].name);
			expect(slot.anonymous).toBe(listCheckValueSlot[index].anonymous);
		});
	});
});
