import DJphoto from "../../../Assets/DJphoto.png"
import group from "../../../Assets/init-team.png";

const team = {
  1: {
    id: 1,
    name: "Destiny Joyner",
    pronoun: "She/Her",
    img: DJphoto,
    role: "Full Stack Web Developer",
    bio:
    <>Born and raised in New York City, I've always had a flare for solving math and logic puzzles.<br/> She is intrigued by the vast opportunities that virtual augmentation enables users to experience. <br/> By continuously expanding her programming knowledge, Destiny aims to build immersive worlds inside of the virtual universe.
    </>,
    bio2: <>Born and raised in New York city, I am an aspiring mobile application developer with extensive training in full stack web development. I am an ethusiastic programmer intrigued by all the things made possible through connecting people all over the world with technology especially if this connection is made through the tap of a finger. <br/><br/> Coming from a non-traditional training background, it was a hassle finding entry level tech opportunities. I built inIT to expedite the job search process by directly connecting recruiters looking to fill positions, with entry level software developers looking to land their first role in the tech industry. <br /><br/> Through my drive for continuous learning, and keeping up to date with modern tech advancements I hope to contribute in strengthening the connection between people and the applications they use to improve the quality of their everyday lives. 
    </> ,
    links: [
      "https://github.com/DestinyJoyner",
      "https://www.linkedin.com/in/destinyjoyner/",
      "mailto:destinyjoyner@pursuit.org",
    ],
  },
 
  2: {
    id: 2,
    name: "About the Application",
    img: group,
    bio:<>inIT is the solution born from the frustration shared by countless entry-level developers navigating the labyrinthine landscape of job search portals and social media platforms cluttered with misleading opportunities. 
    <br /><br/>Too often, these platforms label positions as "entry-level," only to reveal hidden prerequisites for prior work experience. For budding developers fresh out of college or boot camps, armed solely with training and perhaps a single portfolio project, this revelation can be disheartening, casting a shadow over their job search journey. <br /><br/>Recognizing this challenge, inIT emerges as a beacon of clarity and opportunity, dedicated to connecting recent graduates with genuine entry-level software engineering positions tailored to their technical proficiency. 
    <br /><br/>Unlike many platforms, every opportunity hosted on inIT is meticulously curated to require little to no prior work experience. We believe that to flourish in the tech industry, one must first find fertile ground to grow, and inIT aims to be that fertile ground, nurturing and propelling your tech career forward.</>,
    bio2: <> inIt is a job search web engine  designed for recent college and boot camp graduates looking for their first role in tech. Some of inIT's features include a fully responsive web design, extensive search filtering options and a UX/UI that supports both recruiter and applicant roles</>,
    links: [1,2,3,90,91,0],
  },
};

/* 
In June 2023, I completed <a href="https://www.pursuit.org/mission-vision" target="_blank">Pursuit's</a>, full stack software engineering program where I honed my web development skills using JavaScript, NodeJs, and React. 
*/

/* 
<br/><br/> <span className="about-init">inIT's</span> frontend was developed using <span className="about-react">React</span> and <span className="about-css">CSS3</span>, with no other frameworks or libraries. <br/><br/> <span className="about-init">inIT</span> utilizes a custom API built in an <span className="about-express">Express/Node JS</span> environment, also using <span className="about-postgres">PostgreSQL</span> for the database structure, and requiring <span className="about-bcrypt">BCrypt</span> and <span className="about-jwt">JWT</span> packages for it's authentication processes.</>,
    bio2: <span> inIt is a job search web engine  designed for recent college and boot camp graduates looking for their first role in tech. Some of inIT's features include a fully responsive web design, extensive search filtering options, UX/UI that supports both recruiter and applicant roles with full CRUD functionality on both profile and job postings.</span>,
    build: <span>inIT is a PERN stack application styled using SCSS/CSS3. inIt further utilizes BCrypt and JWT packages for it's authentication processes.</span>,
*/

const desktopAboutInitTech = {
  fe: {
    header: "Front End Development",
    subheader: "A responsive JavaScript React web app, built from scratch with HTML, JSX, and SCSS for BEM styling. No external CSS frameworks, just sleek UX/UI design for an intuitive experience.",
    icons: [1,3,16]
  },
  be: {
    header:"Back End Development",
    subheader: "Powering inIT's functionality with a custom Express/Node.js API, PostgreSQL/SQL for robust database management, and fortified security through BCrypt and JWT authentication. Building a seamless foundation for data management and user protection.",
    icons: [19,90,2,]
  },
  ff: {
    header: "Future Features",
    subheader: <>
    <li>inIT is in the process of being developed into a mobile application for expanded accessibility</li>
    <li>inIT will be integrated with Google Maps API in order to accurately display available opportunities locally for its users</li><li>inIT will provide valuable resources to developers to keep their skills sharp while they seek employment</li></>
  }
}

export {
  team,
  desktopAboutInitTech
}