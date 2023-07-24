import appinventivLogo from "../../../Assets/companyLogos/appinventiv.png"
import appleLogo from "../../../Assets/companyLogos/apple.png"
import blackstoneLogo from "../../../Assets/companyLogos/blackstone.png";
import citiLogo from "../../../Assets/companyLogos/citi.png";
import ciscoLogo from "../../../Assets/companyLogos/cisco.png";
import noLogo from "../../../Assets/companyLogos/default-company.png";
import goldmanLogo from "../../../Assets/companyLogos/goldman-sachs.png";
import googleLogo from "../../../Assets/companyLogos/google.png";
import hubspotLogo from "../../../Assets/companyLogos/hubspot.png";
import nikeLogo from "../../../Assets/companyLogos/nike.png"
import nvidiaLogo from "../../../Assets/companyLogos/nvidia.png";
import pellSoftwareLogo from "../../../Assets/companyLogos/pellsoftware.png"
import pelotonLogo from "../../../Assets/companyLogos/peloton.png"
import salesforceLogo from "../../../Assets/companyLogos/salesforce.png"
import silverStarLogo from "../../../Assets/companyLogos/silverstar.jpeg"
import shopifyLogo from "../../../Assets/companyLogos/shopify.png";
import techItEasyLogo from "../../../Assets/companyLogos/techiteasy.png"
import umbrellaCorpLogo from "../../../Assets/companyLogos/umbrellacorporation.png"

const companyLogoObject = {
  blackstone: blackstoneLogo,
  citi: citiLogo,
  cisco: ciscoLogo,
  goldmansachs: goldmanLogo,
  google: googleLogo,
  hubspot: hubspotLogo,
  nvidia: nvidiaLogo,
  pellsoftware: pellSoftwareLogo,
  silverstartechnology: silverStarLogo,
  shopify: shopifyLogo,
  techiteasy : techItEasyLogo,
  umbrellacorporation : umbrellaCorpLogo,
  nike : nikeLogo,
  peloton: pelotonLogo,
  appinventiv: appinventivLogo,
  apple : appleLogo,
  salesforce : salesforceLogo
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
