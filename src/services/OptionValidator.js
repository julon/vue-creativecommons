import options from "../mocks/options.json";

export default {
  getOptionValidator: optionName => value => {
    // retrieve available options
    const optionKeys = Object.keys(options[optionName]);

    // return true if value exist in the available options
    return optionKeys.indexOf(value) !== -1;
  }
};
