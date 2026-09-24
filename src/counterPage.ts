import {counter, routes} from "./siteState.ts";
import {counterApi} from "./api.ts";


const element = `
  <div class="hero">
    <h1>Time to count!</h1>
  </div>
  <button id="counter" type="button" class="counter"></button>
`


let unSub: Array<() => void> = []

function onMount() {
    if (counter.count === 0) counterApi.getCounter()

    const counterButter = document.querySelector<HTMLButtonElement>('#counter')!

    counterButter.addEventListener('click', () => {
        counter.count++
    })
    const counterUnSub = counter.sub(() => {
        counterButter.textContent = `Count is ${counter.count}`
    })

    const counterApiUnSub = counterApi.sub(() => {
        counterButter.disabled = counterApi.status === 'calling'
        if (counterApi.status === 'calling') counterButter.textContent = `Loading...`
    })

    unSub.push(counterUnSub, counterApiUnSub)
}

function onUnMount() {
    unSub.forEach((unSub) => unSub())
}

routes.set("counter", {
    element, onMount, onUnMount
})

