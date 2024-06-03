# Create Component

A **VERY opinionated** command-line utility to generate scaffolding for a minimal
TypeScript React component with an optional unit test, Storybook demo, and
module SCSS file.

> [!NOTE]  
> This is a work in progress and may change.

### Usage

To generate a new component, use the following command:

```bash
create-component <ComponentName> [/optional/component/path]
```

## Why?

I created this to reduce toil as I generally create the same scaffolding for the
presentational components I create in the React projects I work in.

### Installation

To install the `create-component` util globally, run:

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
