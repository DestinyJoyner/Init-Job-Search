import { BsFillCircleFill } from "react-icons/bs"

function ScrollArrow({ element }) {
  function homeScroll(index) {
    element.current.children[index].scrollIntoView();
  }

  return (
    <div className="home-scroll-container">
        <BsFillCircleFill 
        onClick={() => homeScroll(0)}
        />
        <BsFillCircleFill 
        onClick={() => homeScroll(1)}
        />
        <BsFillCircleFill 
        onClick={() => homeScroll(2)}
        />
        <BsFillCircleFill 
        onClick={() => homeScroll(3)}
        />
    </div>
  )
}

export default ScrollArrow;
