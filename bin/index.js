#!/usr/bin/env node

import { Command } from "commander";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import handlebars from "handlebars";
import inquirer from "inquirer";

const program = new Command();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatesPath = path.join(__dirname, "..", "templates");

program
  .argument("<componentName>", "name of the component")
  .argument("[componentPath]", "optional path for the component")
  .action((componentName, componentPath) => {
    promptForActions(componentName, componentPath || process.cwd());
  });

program.parse(process.argv);

async function promptForActions(componentName, componentPath) {
  const answers = await inquirer.prompt([
    {
      message: "Create a unit test for this component?",
      name: "createTest",
      type: "confirm",
      default: true,
    },
    {
      message: "Create a Storybook demo for this component?",
      name: "createStory",
      type: "confirm",
      default: true,
    },
    {
      message: "Create a module.scss file for this component?",
      suffix: " (this will also include a style import in the component file)",
      name: "createScssModule",
      type: "confirm",
      default: true,
    },
  ]);

  await generateIndex(componentName, componentPath);
  await generateComponent(
    componentName,
    componentPath,
    answers.createScssModule
  );

  if (answers.createTest) {
    await generateUnitTest(componentName, componentPath);
  }
  if (answers.createStory) {
    await generateStorybook(componentName, componentPath);
  }
  if (answers.createScssModule) {
    await generateScssModule(componentName, componentPath);
  }
}

// Utils to generate files

const generateIndex = async (componentName, componentPath) => {
  const componentDir = path.join(componentPath, componentName);
  const indexFile = path.join(componentDir, "index.ts");
  const componentTemplatePath = path.join(templatesPath, "index.hbs");

  const templateContent = await fs.readFile(componentTemplatePath, "utf-8");
  const template = handlebars.compile(templateContent);
  const componentContent = template({ componentName });

  await fs.ensureDir(componentDir);
  await fs.writeFile(indexFile, componentContent);
};

const generateComponent = async (
  componentName,
  componentPath,
  createScssModule
) => {
  const componentDir = path.join(componentPath, componentName);
  const componentFile = path.join(componentDir, `${componentName}.tsx`);
  const componentTemplatePath = path.join(templatesPath, "react-component.hbs");

  const templateContent = await fs.readFile(componentTemplatePath, "utf-8");
  const template = handlebars.compile(templateContent);
  const componentContent = template({ componentName, createScssModule });

  await fs.ensureDir(componentDir);
  await fs.writeFile(componentFile, componentContent);
};

const generateUnitTest = async (componentName, componentPath) => {
  const componentDir = path.join(componentPath, componentName);
  const testFile = path.join(componentDir, `${componentName}.test.tsx`);
  const testTemplatePath = path.join(
    templatesPath,
    "react-component-unit-test.hbs"
  );

  const templateContent = await fs.readFile(testTemplatePath, "utf-8");
  const template = handlebars.compile(templateContent);
  const testContent = template({ componentName });

  await fs.writeFile(testFile, testContent);
};

const generateStorybook = async (componentName, componentPath) => {
  const componentDir = path.join(componentPath, componentName);
  const storybookFile = path.join(componentDir, `${componentName}.stories.tsx`);
  const storybookTemplatePath = path.join(templatesPath, "react-storybook.hbs");

  const templateContent = await fs.readFile(storybookTemplatePath, "utf-8");
  const template = handlebars.compile(templateContent);
  const storyContent = template({ componentName });

  await fs.writeFile(storybookFile, storyContent);
};

const generateScssModule = async (componentName, componentPath) => {
  const componentDir = path.join(componentPath, componentName);
  const styleFile = path.join(componentDir, `${componentName}.module.scss`);
  const styleTemplatePath = path.join(templatesPath, "scss-module.hbs");

  const templateContent = await fs.readFile(styleTemplatePath, "utf-8");
  const template = handlebars.compile(templateContent);
  const styleContent = template({ componentName });

  await fs.writeFile(styleFile, styleContent);
};
