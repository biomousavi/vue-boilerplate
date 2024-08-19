import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // custom flat configs go here
  {
    rules: {
      "vue/no-setup-props-reactivity-loss": "off",
    },
  },
);
