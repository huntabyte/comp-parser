<div align="center">
<h1>comp-parser📃</h1>

<p>Extract props, actions, slots and css variables from a Svelte file.</p>
</div>

---

This is a fork is a fork of [svelte-get-component-info](https://github.com/el3um4s/svelte-get-component-info). Credit to the original author [el3um4s](https://github.com/el3um4s) for doing all the hard work. I forked this project to add additional features necessary for another library I'm working on and may not align with the original author's vision for this project.

Features added:

- Support for multiline types
- Format code string before parsing (format your components however you like, this library will handle them all the same)

## The problem

You want to document your Svelte components, but you don't want to manually write the documentation for each component. You want to extract the information from the component itself.

## This solution

This library provides a single function that takes a path to a Svelte file and returns an object with the props, actions, slots and css variables.

At the moment, it only works with local Svelte files, however, it may eventually be extended to work with remote files.

## Installation

This module is distributed via [npm](https://www.npmjs.com/comp-parser) and should be installed as one of your project's `dependencies`:

```
npm i comp-parser
```

```
pnpm i comp-parser
```

## Usage

```typescript
import { getInfo, type SvelteInformation } from "comp-parser";

const info: SvelteInformation = getInfo("./src/lib/hello.svelte");
```

`info` will be an object with the following structure:

```json
{
    "props": [
        { "name": "color", "type":"", "defaultValue": "red" },
        { "name": "steps", "type": "number", "defaultValue": "8" }
        { "name": "title", "type": "string" },
        { "name": "variant", "type": "'success' | 'error' | 'warning'", "defaultValue": "success"}
        { "name": "description"}
    ],
    "actions": [
        { "name": "click" },
        { "name": "hover" },
        { "name": "customAction" }
    ],
    "slots": [
        { "anonymous": true },
        { "name": "header", "anonymous": false },
        { "name": "footer", "anonymous": false }
    ],
    "css": [
      { "name": "--color-primary" },
      { "name": "--color-secondary" }
    ]
}
```
