import { v4 as uuidv4 } from "uuid";
import {
  SiNodedotjs,
  SiJavascript,
  SiReact,
  SiPython,
  SiRuby,
  SiCplusplus,
  SiMysql,
  SiSwift,
  SiGo,
  SiPhp,
  SiTypescript,
  SiCss3,
  SiJsonwebtokens,
  SiPostgresql,
  SiCsharp,
  SiKotlin,
  SiHtml5,
  SiBootstrap,
  SiMongodb,
  SiSqlite,
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  // SiCli,
  // SiIde,
  // SiCicd,
  // SiSdlc,
  SiLinux,
  SiWindows,
  SiOop,
  SiJest,
  // SiAws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiApache,
  SiNginx,
  SiAngular,
  SiVuedotjs,
  SiExpress,
  SiDjango,
  SiSpringboot,
  SiFlask,
} from "react-icons/si";

import { FaJava, FaAws } from "react-icons/fa";
import { HiMiniCommandLine } from "react-icons/hi2";

const skillsObject = {
  1: [<SiJavascript key={uuidv4()} id={1} />, false],
  2: [<SiNodedotjs key={uuidv4()} id={2} />, false],
  3: [<SiReact key={uuidv4()} id={3} />, false],
  4: [<SiPython key={uuidv4()} id={4} />, false],
  5: [<FaJava key={uuidv4()} id={5} />, false],
  6: [<SiCplusplus key={uuidv4()} id={6} />, false],
  7: [<SiRuby key={uuidv4()} id={7} />, false],
  8: [<SiMysql key={uuidv4()} id={8} />, false],
  9: [<SiSwift key={uuidv4()} id={9} />, false],
  10: [<SiGo key={uuidv4()} id={10} />, false],
  11: [<SiTypescript key={uuidv4()} id={11} />, false],
  12: [<SiPhp key={uuidv4()} id={12} />, false],
  13: [<SiCsharp key={uuidv4()} id={13} />, false],
  14: [<SiKotlin key={uuidv4()} id={14} />, false],
  15: [<SiHtml5 key={uuidv4()} id={15} />, false],
  16: [<SiCss3 key={uuidv4()} id={16} />, false],
  17: [<SiBootstrap key={uuidv4()} id={17} />, false],
  18: [<SiMysql key={uuidv4()} id={18} />, false],
  19: [<SiPostgresql key={uuidv4()} id={19} />, false],
  20: [<SiMongodb key={uuidv4()} id={20} />, false],
  21: [<SiSqlite key={uuidv4()} id={21} />, false],
  22: [<SiGit key={uuidv4()} id={22} />, false],
  23: [<SiGithub key={uuidv4()} id={23} />, false],
  24: [<SiGitlab key={uuidv4()} id={24} />, false],
  25: [<SiBitbucket key={uuidv4()} id={25} />, false],
  26: [<HiMiniCommandLine key={uuidv4()} id={26} />, false],
  // 27: [<SiIde key={uuidv4()} id={27} />, false],
  // 28: [<SiCicd key={uuidv4()} id={28} />, false],
  // 29: [<SiSdlc key={uuidv4()} id={29} />, false],
  30: [<SiLinux key={uuidv4()} id={30} />, false],
  31: [<SiWindows key={uuidv4()} id={31} />, false],
  // 32: [<SiOop key={uuidv4()} id={32} />, false],
  33: [<SiJest key={uuidv4()} id={33} />, false],
  34: [<FaAws key={uuidv4()} id={34} />, false],
  35: [<SiMicrosoftazure key={uuidv4()} id={35} />, false],
  36: [<SiGooglecloud key={uuidv4()} id={36} />, false],
  37: [<SiDocker key={uuidv4()} id={37} />, false],
  38: [<SiKubernetes key={uuidv4()} id={38} />, false],
  39: [<SiApache key={uuidv4()} id={39} />, false],
  40: [<SiNginx key={uuidv4()} id={40} />, false],
  41: [<SiAngular key={uuidv4()} id={41} />, false],
  42: [<SiVuedotjs key={uuidv4()} id={42} />, false],
  43: [<SiExpress key={uuidv4()} id={43} />, false],
  44: [<SiDjango key={uuidv4()} id={44} />, false],
  45: [<SiSpringboot key={uuidv4()} id={45} />, false],
  46: [<SiFlask key={uuidv4()} id={46} />, false],
};

const skillsColorObject = {
  // 91: (
  //   <SiPostgresql
  //     color={"white"}
  //     style={{ backgroundColor: "#0064a5" }}
  //     key={uuidv4()}
  //   />
  // ),
  90: <SiJsonwebtokens color={"#F50057"} key={uuidv4()} />,
  // 0: (<SiCss3
  // color ={"#264de4"}
  // key={uuidv4()}
  // />),
  1: (
    <SiJavascript
      color={"#f0db4f"}
      style={{ backgroundColor: "black" }}
      key={uuidv4()}
    />
  ),
  2: <SiNodedotjs color={"#3c873a"} key={uuidv4()} />,
  3: [
    <SiReact
      color={"#61DBFB"}
      style={{ backgroundColor: "black" }}
      key={uuidv4()}
    />,
  ],
  4: [
    <SiPython
      color={"#306998"}
      style={{ backgroundColor: "#FFE873" }}
      key={uuidv4()}
    />,
  ],
  5: [
    <FaJava
      color={"white"}
      style={{ backgroundColor: "#5382a1" }}
      key={uuidv4()}
    />,
  ],
  6: [<SiCplusplus color={"#044F88"} key={uuidv4()} />],
  7: [<SiRuby color={"#CC0000"} key={uuidv4()} />],
  8: [
    <SiMysql
      color={"#00758F"}
      style={{ backgroundColor: "#F29111" }}
      key={uuidv4()}
    />,
  ],
  9: [<SiSwift color={"#F05138"} key={uuidv4()} />],
  10: [<SiGo color={"black"} key={uuidv4()} />],
  11: [
    <SiTypescript
      color={"#007acc"}
      style={{ backgroundColor: "white" }}
      key={uuidv4()}
    />,
  ],
  12: [
    <SiPhp
      color={"#787CB5"}
      style={{ backgroundColor: "black" }}
      key={uuidv4()}
    />,
  ],

  // AI generated imports
  13: <SiCsharp color={"#178600"} key={uuidv4()} />,
  14: <SiKotlin color={"#7F52B0"} key={uuidv4()} />,
  15: <SiHtml5 color={"#E34F26"} key={uuidv4()} />,
  16: <SiCss3 color={"#1572B6"} key={uuidv4()} />,
  17: <SiBootstrap color={"#563D7C"} key={uuidv4()} />,
  18: <SiMysql color={"#4479A1"} key={uuidv4()} />,
  19: <SiPostgresql color={"#336791"} key={uuidv4()} />,
  20: <SiMongodb color={"#47A248"} key={uuidv4()} />,
  21: <SiSqlite color={"#003B57"} key={uuidv4()} />,
  22: <SiGit color={"#F05032"} key={uuidv4()} />,
  23: <SiGithub color={"#181717"} key={uuidv4()} />,
  24: <SiGitlab color={"#E84A2A"} key={uuidv4()} />,
  25: <SiBitbucket color={"#0052CC"} key={uuidv4()} />,
  26: <HiMiniCommandLine color={"#F7DF1E"} key={uuidv4()} />,
  // 27: <SiIde color={"#4B8BBE"} key={uuidv4()} />,
  // 28: <SiCicd color={"#00BFFF"} key={uuidv4()} />,
  // 29: <SiSdlc color={"#FF5733"} key={uuidv4()} />,
  30: <SiLinux color={"#FCC624"} key={uuidv4()} />,
  31: <SiWindows color={"#0078D7"} key={uuidv4()} />,
  // 32: <SiOop color={"#FF4500"} key={uuidv4()} />,
  33: <SiJest color={"#C21325"} key={uuidv4()} />,
  34: <FaAws color={"#FF9900"} key={uuidv4()} />,
  35: <SiMicrosoftazure color={"#0089D6"} key={uuidv4()} />,
  36: <SiGooglecloud color={"#4285F4"} key={uuidv4()} />,
  37: <SiDocker color={"#2496ED"} key={uuidv4()} />,
  38: <SiKubernetes color={"#326CE5"} key={uuidv4()} />,
  39: <SiApache color={"#D22128"} key={uuidv4()} />,
  40: <SiNginx color={"#009639"} key={uuidv4()} />,
  41: <SiAngular color={"#DD0031"} key={uuidv4()} />,
  42: <SiVuedotjs color={"#42B883"} key={uuidv4()} />,
  43: <SiExpress color={"#000000"} key={uuidv4()} />,
  44: <SiDjango color={"#092E20"} key={uuidv4()} />,
  45: <SiSpringboot color={"#6DB33F"} key={uuidv4()} />,
  46: <SiFlask color={"#000000"} key={uuidv4()} />,
};

function desktopSkillIconAndName(skillArrOfObj) {
  const skillNameAndIcon = skillArrOfObj.map((obj) => {
    const [key, value] = Object.entries(obj)[0];
    const skillIcon = skillsColorObject[key];
    return { name: value, icon: skillIcon };
  });
  return skillNameAndIcon;
}

export { skillsObject, skillsColorObject, desktopSkillIconAndName };
