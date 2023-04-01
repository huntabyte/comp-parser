# Svelte - Get Component Info

Fork of [el3um4s/svelte-get-component-info](https://github.com/el3um4s/svelte-get-component-info)

Credit to the original author [el3um4s](https://github.com/el3um4s). They did all the hard work, I just added some features for use with another project of mine.

_A function to extract information about the props, actions, slots and css variables from a Svelte file. Designed to simplify the creation of documentation_

NPM link: [@huntabyte/svelte-get-component-info](https://www.npmjs.com/package/@huntabyte/svelte-get-component-info)

### Install and use the package

To use the package in a project:

```bash
npm i @huntabyte/svelte-get-component-info
```

and then in a file:

```ts
import type { SvelteInformation } from "@huntabyte/svelte-get-component-info"
import { getInfo } from "@huntabyte/svelte-get-component-info"

const info: SvelteInformation = getInfo("./src/lib/hello.svelte")
console.log(info.props) //  [{ name: "message", type: "string", defaultValue: "Hello World" }]
console.log(info.actions) /// [ { name: "notify" }]
```

`info` looks like this:

```json
{
    "props": [
        { "name": "color", "type":"string", "defaultValue":"red" },
        { "name": "steps", "type":"number", "defaultValue":"8" }
        { "name": "title", "type":"string" },
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
