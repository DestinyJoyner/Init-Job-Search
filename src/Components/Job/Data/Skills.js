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
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

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
};

const skillsColorObject = {
  91: (<SiPostgresql
    color ={"white"}
    style={{ backgroundColor: "#0064a5" }}
    key={uuidv4()}
    />),
  90: (<SiJsonwebtokens
    color ={"#F50057"}
    key={uuidv4()}
    />),
  0: (<SiCss3 
  color ={"#264de4"}
  key={uuidv4()}
  />),
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
};

export { skillsObject, skillsColorObject };
