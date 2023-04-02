import { readFileSvelte } from "../functions/readFileSvelte";
import {
	hasProps,
	getProps_asInFile,
	hasActions,
	getActions_asInFile,
	hasSlots,
	getSlots_asInFile,
	hasCSS,
	getCSS_asInFile
} from "../functions/parseFileSvelte";
import type { Content } from "../functions/interfaces";

const listFiles = {
	component_JS: "src/__tests__/test_files/component_simple_js.svelte",
	component_TS: "src/__tests__/test_files/component_simple_ts.svelte",
	component_NO_SCRIPT:
		"src/__tests__/test_files/component_simple_no_script.svelte",
	component_MULTI: "src/__tests__/test_files/component_multi.svelte",
	component_BAD_FORMATS: "src/__tests__/test_files/component_bad_format.svelte"
};

describe("Parse Svelte - Checks Props", () => {
	it.concurrent("check has props JS", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_JS);
		const content: string = file.content.content;
		const props: boolean = hasProps(content);
		expect(props).toBeTruthy();
		const listProps: string[] = getProps_asInFile(content);
		expect(listProps.length).toBe(1);
		expect(listProps[0].trim()).toBe("export let propGeneric;");
	});

	it.concurrent("check has props TS", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_TS);
		const content: string = file.content.content;
		const props: boolean = hasProps(content);
		expect(props).toBeTruthy();
		const listProps: string[] = getProps_asInFile(content);
		expect(listProps.length).toBe(1);
		expect(listProps[0].trim()).toBe("export let propGeneric: string;");
	});

	it.concurrent("check has props NO SCRIPTS", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_NO_SCRIPT);
		const content: string = file.content.content;
		const props: boolean = hasProps(content);
		expect(props).toBeFalsy();
		const listProps: string[] = getProps_asInFile(content);
		expect(listProps.length).toBe(0);
	});

	it.concurrent("check has props MULTI", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_MULTI);
		const content: string = file.content.content;
		const props: boolean = hasProps(content);
		expect(props).toBeTruthy();
	});

	it.concurrent("check has props BAD FORMATS", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_BAD_FORMATS);
		const content: string = file.content.content;
		const props: boolean = hasProps(content);
		expect(props).toBeTruthy();
	});

	it.concurrent("count props in files", ({ expect }) => {
		const file_js = getProps_asInFile(
			readFileSvelte(listFiles.component_JS).content.content
		);
		expect(file_js.length).toBe(1);
		const file_ts = getProps_asInFile(
			readFileSvelte(listFiles.component_TS).content.content
		);
		expect(file_ts.length).toBe(1);
		const file_no = getProps_asInFile(
			readFileSvelte(listFiles.component_NO_SCRIPT).content.content
		);
		expect(file_no.length).toBe(0);
		const file_multi = getProps_asInFile(
			readFileSvelte(listFiles.component_MULTI).content.content
		);
		expect(file_multi.length).toBe(34);
		const file_bad_formats = getProps_asInFile(
			readFileSvelte(listFiles.component_BAD_FORMATS).content.content
		);
		expect(file_bad_formats.length).toBe(34);
	});
});

describe("Parse Svelte - Checks Actions", () => {
	it.concurrent("check has actions JS", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_JS);
		const content: string = file.content.content;
		const actions: boolean = hasActions(content);
		expect(actions).toBeTruthy();
		const listActions: string[] = getActions_asInFile(content);
		expect(listActions.length).toBe(1);
		expect(listActions[0].trim()).toBe(`"message"`);
	});

	it.concurrent("check has actions TS", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_TS);
		const content: string = file.content.content;
		const actions: boolean = hasActions(content);
		expect(actions).toBeTruthy();
		const listActions: string[] = getActions_asInFile(content);
		expect(listActions.length).toBe(1);
		expect(listActions[0].trim()).toBe(`"message"`);
	});

	it.concurrent("check has actions NO ACTIONS", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_NO_SCRIPT);
		const content: string = file.content.content;
		const actions: boolean = hasActions(content);
		expect(actions).toBeFalsy();
		const listActions: string[] = getActions_asInFile(content);
		expect(listActions.length).toBe(0);
	});

	it.concurrent("check has actions MULTI", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_MULTI);
		const content: string = file.content.content;
		const actions: boolean = hasActions(content);
		expect(actions).toBeTruthy();
	});
	it.concurrent("check has actions BAD FORMATS", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_BAD_FORMATS);
		const content: string = file.content.content;
		const actions: boolean = hasActions(content);
		expect(actions).toBeTruthy();
	});

	it.concurrent("count actions in files", ({ expect }) => {
		const file_js = getActions_asInFile(
			readFileSvelte(listFiles.component_JS).content.content
		);
		expect(file_js.length).toBe(1);
		const file_ts = getActions_asInFile(
			readFileSvelte(listFiles.component_TS).content.content
		);
		expect(file_ts.length).toBe(1);
		const file_no = getActions_asInFile(
			readFileSvelte(listFiles.component_NO_SCRIPT).content.content
		);
		expect(file_no.length).toBe(0);
		const file_multi = getActions_asInFile(
			readFileSvelte(listFiles.component_MULTI).content.content
		);
		expect(file_multi.length).toBe(9);

		const file_bad_formats = getActions_asInFile(
			readFileSvelte(listFiles.component_BAD_FORMATS).content.content
		);
		expect(file_bad_formats.length).toBe(9);
	});
});

describe("Parse Svelte - Checks Slots", () => {
	it.concurrent("check has slots JS", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_JS);
		const content: string = file.content.content;
		const slots: boolean = hasSlots(content);
		expect(slots).toBeTruthy();
		const listSlots: string[] = getSlots_asInFile(content);
		expect(listSlots.length).toBe(1);
		expect(listSlots[0].trim()).toBe(`<slot />`);
	});

	it.concurrent("check has slots TS", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_TS);
		const content: string = file.content.content;
		const slots: boolean = hasSlots(content);
		expect(slots).toBeTruthy();
		const listSlots: string[] = getSlots_asInFile(content);
		expect(listSlots.length).toBe(1);
		expect(listSlots[0].trim()).toBe(`<slot />`);
	});

	it.concurrent("check has slots NO ACTIONS", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_NO_SCRIPT);
		const content: string = file.content.content;
		const slots: boolean = hasSlots(content);
		expect(slots).toBeFalsy();
		const listSlots: string[] = getSlots_asInFile(content);
		expect(listSlots.length).toBe(0);
	});

	it.concurrent("check has slots MULTI", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_MULTI);
		const content: string = file.content.content;
		const slots: boolean = hasSlots(content);
		expect(slots).toBeTruthy();
	});

	it.concurrent("check has slots BAD FORMATS", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_BAD_FORMATS);
		const content: string = file.content.content;
		const slots: boolean = hasSlots(content);
		expect(slots).toBeTruthy();
	});

	it.concurrent("count slots in files", ({ expect }) => {
		const file_js = getSlots_asInFile(
			readFileSvelte(listFiles.component_JS).content.content
		);
		expect(file_js.length).toBe(1);
		const file_ts = getSlots_asInFile(
			readFileSvelte(listFiles.component_TS).content.content
		);
		expect(file_ts.length).toBe(1);
		const file_no = getSlots_asInFile(
			readFileSvelte(listFiles.component_NO_SCRIPT).content.content
		);
		expect(file_no.length).toBe(0);
		const file_multi = getSlots_asInFile(
			readFileSvelte(listFiles.component_MULTI).content.content
		);
		expect(file_multi.length).toBe(6);
	});
});

describe("Parse Svelte - Checks CSS VARIABLES", () => {
	it.concurrent("check has CSS VARIABLES JS", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_JS);
		const content: string = file.content.content;
		const css: boolean = hasCSS(content);
		expect(css).toBeTruthy();
		const listCss: string[] = getCSS_asInFile(content);
		expect(listCss.length).toBe(1);
		expect(listCss[0].trim()).toBe(`--color-background`);
	});

	it.concurrent("check has CSS VARIABLES TS", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_TS);
		const content: string = file.content.content;
		const css: boolean = hasCSS(content);
		expect(css).toBeTruthy();
		const listCss: string[] = getCSS_asInFile(content);
		expect(listCss.length).toBe(1);
		expect(listCss[0].trim()).toBe(`--color-background`);
	});

	it.concurrent("check has CSS VARIABLES NO VARIABLES", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_NO_SCRIPT);
		const content: string = file.content.content;
		const css: boolean = hasCSS(content);
		expect(css).toBeFalsy();
		const listCss: string[] = getCSS_asInFile(content);
		expect(listCss.length).toBe(0);
	});

	it.concurrent("check has CSS VARIABLES MULTI", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_MULTI);
		const content: string = file.content.content;
		const slots: boolean = hasCSS(content);
		expect(slots).toBeTruthy();
	});

	it.concurrent("check has CSS VARIABLES BAD FORMATS", ({ expect }) => {
		const file: Content = readFileSvelte(listFiles.component_BAD_FORMATS);
		const content: string = file.content.content;
		const slots: boolean = hasCSS(content);
		expect(slots).toBeTruthy();
	});

	it.concurrent("count CSS VARIABLES in files", ({ expect }) => {
		const file_js = getCSS_asInFile(
			readFileSvelte(listFiles.component_JS).content.content
		);
		expect(file_js.length).toBe(1);
		const file_ts = getCSS_asInFile(
			readFileSvelte(listFiles.component_TS).content.content
		);
		expect(file_ts.length).toBe(1);
		const file_no = getCSS_asInFile(
			readFileSvelte(listFiles.component_NO_SCRIPT).content.content
		);
		expect(file_no.length).toBe(0);
		const file_multi = getCSS_asInFile(
			readFileSvelte(listFiles.component_MULTI).content.content
		);
		expect(file_multi.length).toBe(16);

		const file_bad_formats = getCSS_asInFile(
			readFileSvelte(listFiles.component_BAD_FORMATS).content.content
		);
		expect(file_bad_formats.length).toBe(16);
	});
});
