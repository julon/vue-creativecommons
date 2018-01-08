import ModuleLibrary from "../index";

describe("index.js", () => {
  it("Should register all components when installed", () => {
    const component = jest.fn();
    const Vue = { component };

    ModuleLibrary.install(Vue);

    // Test if a particular component was registered
    expect(component).toBeCalledWith("cc-icon", expect.any(Object));
    expect(component).toBeCalledWith("cc-label", expect.any(Object));

    // Test how many times component got registered
    const totalOfComponents = 2;
    expect(component).toHaveBeenCalledTimes(totalOfComponents);
  });
});
