import { useEffect } from "react";
import { useContextProvider } from "../../../../Providers/Provider";
import SearchBar from "../../SearchBar.js"
import "./JobsIndexDesktop.scss"

function JobsIndexDesktop(props) {
    const { setLoading, loading } = useContextProvider()
    useEffect(() => {
        setLoading(false)
      },[loading])

    return (
        !loading &&
        <div className='jobsIndexDesktop center'>
            <SearchBar />
            <div className="jobsIndexDesktop_two">profile card</div>
            <div className="jobsIndexDesktop_three">filter bar</div>
            <div className="jobsIndexDesktop_four">jobs lisings</div>
        </div>
    );
}

export default JobsIndexDesktop;