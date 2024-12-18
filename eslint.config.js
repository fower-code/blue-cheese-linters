import jsdoc from 'eslint-plugin-jsdoc';
import tsPlugin from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser";

import jsdocRules from './lib/configs/jsdoc.js';

const config = [
  {
    files: ['src/**/*.js'],
    plugins: {
      jsdoc
    },
    languageOptions: {
      ecmaVersion: 2023,
    },
    rules: {
      ...jsdocRules
    }
  },
  {
    files: ['src/**/*.ts'],
    plugins: {
      jsdoc,
      tsPlugin
    },
    languageOptions: {
      ecmaVersion: 2023,
      parser: tsParser
    },
    rules: {
      ...jsdocRules
    },
    settings: {
      jsdoc: {
        mode: 'typescript'
      }
    }
  }
];

export default config;
