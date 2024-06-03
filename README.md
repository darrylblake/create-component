# Create Component

A **VERY opinionated** command-line utility to generate scaffolding for a minimal
TypeScript React component with an optional unit test, Storybook demo, and
module SCSS file.

# Component Creator

A **VERY opinionated** command-line utility to generate scaffolding for a minimal
TypeScript React component with an optional unit test, Storybook demo, and
module SCSS file.

> [!NOTE]  
> This is a work in progress and may change.

## Why?

I created this to streamline the creation of TypeScript React components in the
way I build them by providing a consistent and minimal scaffolding structure. It
ensures that each component is accompanied by the necessary testing and
documentation files.

### Installation

To install the create-component globally, run:

```bash
npm install --global @darrylblake/create-component
```

> [!TIP]
> You may want to customize this tool to better suit your needs.

To customize and develop this utility further, clone the repository locally:

```bash
git clone https://github.com/darrylblake/create-component.git
cd create-component/
npm install
npm link
```

Re-generate the "ExampleComponent" with:

```bash
npm run test
```

### Output

You can find an example of the [generated output here](./ExampleComponent).

```
./ExampleComponent
├── index.ts
├── ExampleComponent.tsx
├── ExampleComponent.test.tsx
├── ExampleComponent.stories.tsx
└── ExampleComponent.module.scss
```

### Usage

To generate a new component, use the following command:

```bash
create-component <ComponentName> [/optional/component/path]
```
