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
    <>Born and raised in New York City, Destiny always had a flare for solving math and logic puzzles.<br/> She is intrigued by the vast opportunities that virtual augmentation enables users to experience. <br/> By continuously expanding her programming knowledge, Destiny aims to build immersive worlds inside of the virtual universe.
    </>,
    bio2: <>As a full stack web developer from Harlem New York, my journey into coding began with customizing my Myspace page back in high school. This led me to attend the Rose Hulman Institute of Technology where I studied computer science. <br/>
    In June 2023, I completed Pursuit, an intensive Google funded, 1 year software engineering program where I honed my web development skills using JavaScript, NodeJs, and React. 
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
    <span className="about-init">inIT</span> is a mobile-first web application designed for recent college and boot camp graduates looking for their first role in tech. <br/><br/> <span className="about-init">inIT's</span> frontend was developed using <span className="about-react">React</span> and <span className="about-css">CSS3</span>, with no other frameworks or libraries. <br/><br/> <span className="about-init">inIT</span> utilizes a custom API built in an <span className="about-express">Express/Node JS</span> environment, also using <span className="about-postgres">PostgreSQL</span> for the database structure, and requiring <span className="about-bcrypt">BCrypt</span> and <span className="about-jwt">JWT</span> packages for it's authentication processes.</>,
    links: [1,2,3,90,91,0],
  },
};
