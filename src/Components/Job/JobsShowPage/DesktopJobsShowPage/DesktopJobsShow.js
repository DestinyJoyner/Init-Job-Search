import { useEffect } from "react";
import { useJobProvider } from "../../../../Providers/JobProvider";
import { useContextProvider } from "../../../../Providers/Provider";
import "./DesktopJobsShow.scss"

function DesktopJobsShow(props) {
    const {loading, setLoading} = useContextProvider()

    useEffect(() => {
        setLoading(false)
    },[])

    return (
        !loading &&
        <div className="desktopJobShow">
            desktop
        </div>
    );
}

export default DesktopJobsShow;