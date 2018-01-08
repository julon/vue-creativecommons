import CreativeCommonsIcon from "./components/CreativeCommonsIcon";
import CreativeCommonsLabel from "./components/CreativeCommonsLabel";

const LibraryModule = {
  CreativeCommonsIcon,
  CreativeCommonsLabel,

  install(Vue) {
    // Register components with vue
    Vue.component("cc-icon", CreativeCommonsIcon);
    Vue.component("cc-label", CreativeCommonsLabel);
  }
};

// Export library
export default LibraryModule;

// Export components
export { CreativeCommonsIcon, CreativeCommonsLabel };
