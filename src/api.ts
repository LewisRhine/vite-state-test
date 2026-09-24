import {newState} from "./state.ts";
import {counter} from "./siteState.ts";

type ApiStatus = 'uncalled' | 'calling' | 'failed' | 'success'

export const counterApi = newState({
    status: `uncalled` as ApiStatus,

    getCounter() {
        this.status = 'calling'
        try {
            setTimeout(() => {
                counter.count = 100
                this.status = 'success'
            }, 1000)
        } catch (e) {
            this.status = 'failed'
        }
    }
})
