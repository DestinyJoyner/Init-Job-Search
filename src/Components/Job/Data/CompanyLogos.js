import blackstoneLogo from "../../../Assets/companyLogos/blackstone.png";
import citiLogo from "../../../Assets/companyLogos/citi.png";
import ciscoLogo from "../../../Assets/companyLogos/cisco.png";
import noLogo from "../../../Assets/companyLogos/default-company.png";
import goldmanLogo from "../../../Assets/companyLogos/goldman-sachs.png";
import googleLogo from "../../../Assets/companyLogos/google.png";
import hubspotLogo from "../../../Assets/companyLogos/hubspot.png";
import nvidiaLogo from "../../../Assets/companyLogos/nvidia.png";
import shopifyLogo from "../../../Assets/companyLogos/shopify.png";

const companyLogoObject = {
  blackstone: blackstoneLogo,
  citi: citiLogo,
  cisco: ciscoLogo,
  goldmansachs: goldmanLogo,
  google: googleLogo,
  hubspot: hubspotLogo,
  nvidia: nvidiaLogo,
  shopify: shopifyLogo,
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
