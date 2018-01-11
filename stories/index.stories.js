import { storiesOf } from "@storybook/vue";
import licenses from "../src/mocks/licenses.json";

const iconTemplate = (allowAdaptations, allowCommercialUse, iconSize) => `
  <cc-icon 
    allow-adaptations="${allowAdaptations}" 
    allow-commercial-use="${allowCommercialUse}" 
    icon-size="${iconSize}">
  </cc-icon>
  `;

const labelTemplate = (allowAdaptations, allowCommercialUse) => `
  <cc-label 
    allow-adaptations="${allowAdaptations}" 
    allow-commercial-use="${allowCommercialUse}">
  </cc-label>
  `;

// Add icons stories
licenses.forEach(license => {
  const iconNormal = "normal";
  const iconCompact = "compact";
  storiesOf(`CreativeCommons - Icon ${iconNormal} size`, module).add(
    `${license.result.name}`,
    () => ({
      template: iconTemplate(
        license.allowAdaptations,
        license.allowCommercialUse,
        iconNormal
      )
    })
  );
  storiesOf(`CreativeCommons - Icon ${iconCompact} size`, module).add(
    `${license.result.name}`,
    () => ({
      template: iconTemplate(
        license.allowAdaptations,
        license.allowCommercialUse,
        iconCompact
      )
    })
  );
  storiesOf(`CreativeCommons - Label`, module).add(
    `${license.result.name}`,
    () => ({
      template: labelTemplate(
        license.allowAdaptations,
        license.allowCommercialUse
      )
    })
  );
});
