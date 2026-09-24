import heroImg from './assets/hero.png'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from './assets/vite.svg'
import {nav, routes} from "./siteState.ts";


const element = `
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${typescriptLogo}" class="framework" alt="TypeScript logo"/>
    <img src="${viteLogo}" class="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Get started</h1>
    <p>Edit <code>src/main.ts</code> and save to test <code>HMR</code></p>
  </div>
    <button id="goto" type="button" class="counter">Go to counter page</button>
`

function onMount() {
    const goto = document.querySelector('#goto')!
    goto.addEventListener('click', () => {
        nav.path = 'counter'
    })
}


routes.set("", {
    element,
    onMount
})