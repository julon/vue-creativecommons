import LicenseService from "../License";
import mocks from "../../mocks/licenses.json";

const getLicense = LicenseService.getLicense;

describe("getLicense function", () => {
  it("should return correct license for each set of parameters", () => {
    mocks.forEach(mock => {
      const license = getLicense(
        mock.allowAdaptations,
        mock.allowCommercialUse
      );
      expect(license).toEqual(mock.result);
    });
  });
  it("should return null otherwise", () => {
    const license = getLicense();
    expect(license).toBeNull();
    const licenseWithRandomParameters = getLicense("test", "random");
    expect(licenseWithRandomParameters).toBeNull();
  });
});
