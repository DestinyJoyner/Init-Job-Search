import DMphoto from "../../Assets/DMphoto.png";
import SMPhoto from "../../Assets/SMphoto.jpg";
import DJphoto from "../../Assets/DJphoto.png"
import group from "../../Assets/init-team.png";

export const team = {
  1: {
    id: 1,
    name: "Destiny Joyner",
    pronoun: "She/Her",
    img: DJphoto,
    bio: "Born and raised in New York City, Destiny always had a flare for solving math and logic puzzles. She wants to expand her coding knowledge aiming to build immersive worlds inside of the virtual universe. Destiny worked on the back end and front end development of inIT",
    links: [
      "https://github.com/DestinyJoyner",
      "https://www.linkedin.com/in/destinyjoyner/",
      "mailto:destinyjoyner@pursuit.org",
    ],
  },
  2: {
    id: 2,
    name: "Dan Mazzilli",
    pronoun: "He/Him",
    img: DMphoto,
    bio: "Daniel Mazzilli is originally from Italy. He has a passion for problem solving, sustainability, resource optimization, traveling, and analytics. When not coding, he enjoys playing soccer and cooking. He worked on the back-end and front-end components of the inIT application, and is now excited to start a career in tech!",
    links: [
      "https://github.com/Daniel-Mazzilli",
      "https://www.linkedin.com/in/mazzilli-daniel/",
      "mailto:danmazzilli@pursuit.org",
    ],
  },
  3: {
    id: 3,
    name: "Salina Malek",
    pronoun: "She/Her",
    img: SMPhoto,
    bio: "Born and raised in Brooklyn, Salina is a passionate full stack web developer with a deep love for technology. With her technical skills and knowledge, she aspires to make a positive impact on the world. She believes that technology can be a catalyst for change and strives to contribute to a brighter and more inclusive future.",
    links: [
      "https://github.com/Salinamalek",
      "https://www.linkedin.com/in/salina-malek/",
      "mailto:salinamalek@pursuit.org",
    ],
  },
  6: {
    id: 6,
    name: "Click on a developer's icon to view more about them!",
    img: group,
    bio: "inIT is an application designed for recent college and boot camp graduates looking for their first role in tech.\ninIT's frontend was developed using only React and CSS3, with no other frameworks or libraries. inIT utilizes a custom built API in an Express environment, postgreSQL for the database, only requiring BCrypt and JWT packages for it's authentication processes.",
    links: [1,2,3,90,91,0],
  },
};
