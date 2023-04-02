import { existsSync, readFileSync } from "fs";
import { trueCasePathSync } from "true-case-path";
import { toTry } from "@el3um4s/to-try";
import { format } from "prettier";
import { Content } from "./interfaces";

export function readFileSvelte(nameFile: string) {
	const content: Content = {
		error: {
			status: true,
			content: "file not read"
		},
		content: {
			status: false,
			content: ""
		}
	};

	if (checkFileExist(nameFile)) {
		const [result, error] = toTry(() => readFileSync(nameFile));

		if (!error && result) {
			const rawContentString = result.toString();
			const formattedContentString = nameFile.endsWith(".svelte")
				? format(rawContentString, {
						parser: "svelte",
						pluginSearchDirs: ["./node_modules"],
						plugins: ["prettier-plugin-svelte"]
				  })
				: rawContentString;
			content.error = {
				status: false,
				content: ""
			};
			content.content = {
				status: true,
				content: formattedContentString
			};
		}
	} else {
		content.error.content = `File "${nameFile}" not exist`;
	}

	return content;
}

export function checkFileExist(nameFile: string): boolean {
	try {
		const truePath = trueCasePathSync(nameFile);
		return existsSync(truePath);
	} catch {
		return false;
	}
}
