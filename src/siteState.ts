import {newState, persist} from "./state.ts";

interface Nav {
    path: string | null
}

export const nav = newState<Nav>({
    path: null,
})

export interface Page {
    element: string
    onMount?: () => void
    onUnMount?: () => void
}

export const routes = new Map<string, Page>()


export const counter = newState({
    count: 0
})

persist({counter})