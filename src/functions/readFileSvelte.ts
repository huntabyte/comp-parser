import { existsSync, readFileSync } from "fs";
import { trueCasePathSync } from "true-case-path";
import { toTry } from "@el3um4s/to-try";
import { format } from "prettier";

import { Content } from "./interfaces";

function readFileSvelte(fileName: string) {
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

	if (checkFileExist(fileName)) {
		const [result, error] = toTry(() => readFileSync(fileName));

		if (!error && result) {
			const rawContentString = result.toString();
			const formattedContentString = fileName.endsWith(".svelte")
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
		content.error.content = `File "${fileName}" not exist`;
	}

	return content;
}

function checkFileExist(fileName: string): boolean {
	try {
		const truePath = trueCasePathSync(fileName);
		return existsSync(truePath);
	} catch {
		return false;
	}
}

export { readFileSvelte, checkFileExist };
