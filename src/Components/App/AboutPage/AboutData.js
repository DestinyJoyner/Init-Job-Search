import DJphoto from "../../../Assets/DJphoto.png"
import group from "../../../Assets/init-team.png";

export const team = {
  1: {
    id: 1,
    name: "Destiny Joyner",
    pronoun: "She/Her",
    img: DJphoto,
    role: "Full Stack Web Developer",
    bio:
    <>Born and raised in New York City, I've always had a flare for solving math and logic puzzles.<br/> She is intrigued by the vast opportunities that virtual augmentation enables users to experience. <br/> By continuously expanding her programming knowledge, Destiny aims to build immersive worlds inside of the virtual universe.
    </>,
    bio2: <>Born and raised in New York city, I am a software engineer specializing in full stack web development. I am an ethusiastic programmer intrigued by all the things made possible through connecting people all over the world with technology. <br/> Coming from a non-traditional training background, it was a hassle finding entry level tech opportunities.I built inIT to expedite the job search process by directly connecting recruiters looking to fill positions with entry level software developers looking to land their first role in the tech industry.
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
    bio:<>
    Many entry level developers aren't properly connected with opportunities at their skill level due to opportunites being misrepresented as entry level, but in fact require prior work experience. <br/><br/>For these developers, often with no on the job experience other than their training and a single portfolio project, this results in a demoralizing and daunting job search experience. <br/><br/><span className="about-init">inIT</span> aims to alleviate this process by connecting recent college and bootcamp  graduates with entry-level software engineering positions based on their technical skill set and all opportunities hosted on inIT require little or no prior work experience. In order to grow in the tech industry, you must first lay down some roots. Let inIT blossom your tech career!
    </>,
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