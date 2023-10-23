import "./NavBarLinkDropDown.scss"

function NavBarLinkDropDown({dropdownLinks, setShowNavDropdown}) {
    const testLinks = ["view profile", "edit profile",  ]
    return (
        <div className="navBarLinkDropDown">
            {
                testLinks.map(el => <span>{el}</span>)
            }
            
        </div>
    );
}

export default NavBarLinkDropDown;