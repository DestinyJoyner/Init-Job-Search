import appinventivLogo from "../../../Assets/companyLogos/appinventiv.png"
import appleLogo from "../../../Assets/companyLogos/apple.png"
import blackstoneLogo from "../../../Assets/companyLogos/blackstone.png";
import citiLogo from "../../../Assets/companyLogos/citi.png";
import ciscoLogo from "../../../Assets/companyLogos/cisco.png";
import noLogo from "../../../Assets/companyLogos/default-company.png";
import geeksandfriesLogo from "../../../Assets/companyLogos/geeksandfries.jpeg"
import goldmanLogo from "../../../Assets/companyLogos/goldman-sachs.png";
import googleLogo from "../../../Assets/companyLogos/google.png";
import hatchworksLogo from "../../../Assets/companyLogos/hatchworks.png"
import hubspotLogo from "../../../Assets/companyLogos/hubspot.png";
import nikeLogo from "../../../Assets/companyLogos/nike.png"
import njpathLogo from "../../../Assets/companyLogos/path.png"
import nvidiaLogo from "../../../Assets/companyLogos/nvidia.png";
import patternedLearningLogo from "../../../Assets/companyLogos/patterned-learning.png"
import pellSoftwareLogo from "../../../Assets/companyLogos/pellsoftware.png"
import pelotonLogo from "../../../Assets/companyLogos/peloton.png"
import salesforceLogo from "../../../Assets/companyLogos/salesforce.png"
import silverStarLogo from "../../../Assets/companyLogos/silverstar.jpeg"
import shopifyLogo from "../../../Assets/companyLogos/shopify.png";
import willcodeforfoodLogo from "../../../Assets/companyLogos/techIteasyCode.png"
import umbrellaCorpLogo from "../../../Assets/companyLogos/umbrellacorporation.png"

const companyLogoObject = {
  blackstone: blackstoneLogo,
  citi: citiLogo,
  cisco: ciscoLogo,
  goldmansachs: goldmanLogo,
  google: googleLogo,
  hatchworks : hatchworksLogo,
  hubspot: hubspotLogo,
  njpath : njpathLogo,
  nvidia: nvidiaLogo,
  patternedlearning : patternedLearningLogo,
  pellsoftware: pellSoftwareLogo,
  silverstartechnology: silverStarLogo,
  shopify: shopifyLogo,
  techiteasy : willcodeforfoodLogo,
  umbrellacorporation : umbrellaCorpLogo,
  nike : nikeLogo,
  peloton: pelotonLogo,
  appinventiv: appinventivLogo,
  apple : appleLogo,
  salesforce : salesforceLogo,
  geeksandfries : geeksandfriesLogo,
  willcodeforfood: willcodeforfoodLogo
};

const defaultCompany = noLogo;

function findCompanyLogo(companyName) {
  for (const key in companyLogoObject) {
    if (key.includes(companyName)) {
      return companyLogoObject[key];
    }
  }
  return defaultCompany;
}

export default function convertCompanyForLogo(str) {
  const removeSpaces = str.replaceAll(" ", "");
  const combineCompanyName = removeSpaces.split("").join("");
  
  return findCompanyLogo(combineCompanyName);
}
