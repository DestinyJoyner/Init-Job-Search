import "./AppHeader.scss"

function AppHeader({header}) {

    return (
        <h1 className="app-header">
        {header}
        </h1>
    );
}

export default AppHeader;