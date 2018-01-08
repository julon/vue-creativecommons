import options from "../mocks/options.json";

const iconUrl = (id, size) =>
  `https://i.creativecommons.org/l/${id}/4.0/${size}.png`;

export default {
  // allowAdaptations ['yes', 'no', 'share-alike']
  getLicense: (allowAdaptations, allowCommercialUse) => {
    // Retrieve corresponding options
    const adaptation = options.allowAdaptationsOptions[allowAdaptations];
    const commercialUse = options.allowCommercialUseOptions[allowCommercialUse];

    if (adaptation && commercialUse) {
      // Compute id and name
      const id = `by${commercialUse.appendId}${adaptation.appendId}`;
      const name = `Attribution${commercialUse.appendLabel}${
        adaptation.appendLabel
      }`;

      // Build License object
      return {
        id,
        name: `Creative Commons ${name} 4.0 International License`,
        link: `http://creativecommons.org/licenses/${id}/4.0/`,
        icon: {
          normal: iconUrl(id, "88x31"),
          compact: iconUrl(id, "80x15")
        }
      };
    } else {
      return null;
    }
  }
};
