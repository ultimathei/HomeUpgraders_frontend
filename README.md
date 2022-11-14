# Home Upgraders website

Home Upgraders website is the code repository for the frontend web-application used by a family owned home renovation company called `Home Upgraders`.

The application is a simple website to showcase what the company is capable of.

:house: :house_with_garden: :hammer: :wrench: :muscle: :clap: :minibus:

# Prerequisites

Before you begin development, ensure you have met the following requirements:

- nvm 0.37.2
- npm 8.5.5 (You may need to install this specifically: `npm install -g npm@8.5.5`)
- install node v16.15.0 through nvm

## Technologies used

This project is being developed with `Vue 3` and `TypeScript` in `Vite`.

Using [Vue 3](https://vuejs.org/) `<script setup>` [Single File Components or SFCs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) ensures components are well separated, encapsulated and reusable.

[Vue router 4](https://router.vuejs.org) is used to handle client-side page routing. Routes are defined in `src/router/router.ts`.

[Histoire](https://histoire.dev/) is used to keep an up-to-date visual notebook of all the components. Configured in `histoire.config.ts`.

[Jest](https://jestjs.io/) is my choice of unit test frameworks using [Vue Test Utils](https://test-utils.vuejs.org/). Let's keep the unit tests close to the component (_see file structure notes_).

[SASS](https://sass-lang.com/) is my choice of css preprocessors. Let's use [CSS modules](https://vuejs.org/api/sfc-css-features.html#css-modules) either in the component or imported from a separate scss file from the same component folder.

[~~Vuex~~](https://vuex.vuejs.org/) [Pinia](https://pinia.vuejs.org/) State management `... TBD ...`

[ESlint]() Code quality `... TBD ...` [see blog](https://vueschool.io/articles/vuejs-tutorials/eslint-and-prettier-with-vite-and-vue-js-3/)

[Prettier]() `... TBD ...` [see blog](https://vueschool.io/articles/vuejs-tutorials/eslint-and-prettier-with-vite-and-vue-js-3/)

[CloudBees](https://docs.cloudbees.com/docs/cloudbees-feature-management/latest/) feature-flags `... TBD ...` [see blog](https://www.martinfowler.com/articles/feature-toggles.html)

# Installation

In the project root run:
```
npm install
```

# Development

To run the development setup, I recommend using the Terminals Manager extension. This will allow you to run all the required terminal instances with a single VSCode command:

1. `Cmnd` + `SHIFT` + `P` (MacOS) or `Ctrl` + `SHIFT` + `P` (Windows)
1. then simply type in: `Terminals: Run` and hit `Enter`
1. This should open up all the terminals defined in the `.vscode/terminals.json` file

## TDD + CDD = TCDD

The combination of a `Histoire` storybook and `Jest` unit tests allows for something I like to call `Tested Component Driven Development`. Dumb components can be fully developed and tested even without mounting them anywhere in the application.

## File Structure Notes

Brad Frost's [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/) is utilized across the project. `Atoms`, `Molecules`, `Organisms` and `Templates` are located in `src/components/`, grouped into separate folders. These I consider ['Dumb' or Presentational components](https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43), so the aim is to keep these as DRY as possible. They should only depend on their `props` and should only communicate to the outside of their bounderies by `emits`.

Pages are called `Views` in this project and are the largest entities of components, each representing a view or page of the application. They live outside of the components folder, in `src/views/`. These I consider ['Smart' or Container Components](https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43), this is where `data` and `emitted` events should be managed.

Each component should have their own folder with the same name as the component itself. Inside this folder let's use the following files (an example for an atomic component, but same idea for all other):

```
src/
├─ components/
│  ├─ atoms/
|  │  ├─ ComponentName/
|  │  |  |  # (optional) separated styles
|  │  |  ├─ ComponentName.module.scss
|  │  |  |  # array of props scenarios
|  │  |  ├─ ComponentName.scenarios.ts
|  │  |  |  # unit test suite
|  │  |  ├─ ComponentName.spec.ts
|  │  |  |  # histoire storybook component
|  │  |  ├─ ComponentName.story.vue
|  │  |  |  # vue SFC component
|  │  │  └─ ComponentName.vue
```

As the above structure shows, we want to keep component specific styles close to the template. Ideally we want to only include global css variables and css-reset rules in the `src/styles/` folder.

Static assets, such as images and font files should live under `src/assets/`.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Terminals Manager](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-terminals)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
