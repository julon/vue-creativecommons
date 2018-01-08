import LicenseService from "@/services/License";
import OptionValidatorService from "../services/OptionValidator";

const validator = OptionValidatorService.getOptionValidator;

export default {
  props: {
    allowAdaptations: {
      type: String,
      required: true,
      validator: validator("allowAdaptationsOptions")
    },
    allowCommercialUse: {
      type: String,
      required: true,
      validator: validator("allowCommercialUseOptions")
    }
  },
  computed: {
    license() {
      return LicenseService.getLicense(
        this.allowAdaptations,
        this.allowCommercialUse
      );
    }
  }
};
