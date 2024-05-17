import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.node },
    /*env: {
      es6: true,
      node: true,
    },*/
    rules: {

    }
  },
  pluginJs.configs.recommended,
];
