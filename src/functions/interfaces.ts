export interface Content {
    error: Reading
    content: Reading
}

export interface Reading {
    status: boolean
    content: string
}

export interface Prop {
    name: string
    type?: string
    defaultValue?: string
}

export interface Action {
    name: string
}

export interface Slot {
    anonymous: boolean
    name?: string
}

export interface CSS {
    name: string
}

export interface SvelteInformation {
    props: Array<Prop>
    actions: Array<Action>
    slots: Array<Slot>
    css: Array<CSS>
}
