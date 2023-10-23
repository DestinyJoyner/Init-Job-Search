import { useState, useEffect } from "react";
import { useJobProvider } from "../../Providers/JobProvider";
import "./SearchResultsCounter.scss"

function SearchResultsCounter() {
    const { queryStart, searchResultCount, jobQuery} = useJobProvider()
    const [resultsShown, setResultsShown] = useState(false)
    
    useEffect(() => {
        if(jobQuery.length >  0 ) {
            setResultsShown(true)
        }
    }, [jobQuery])

    return (
        resultsShown &&
        <div className="searchResultsCounter">
            <span className="searchResultsCounter_text">Showing Results:</span>
            <span className="searchResultsCounter_range">{queryStart + 1} - {queryStart + jobQuery.length}</span>
        </div>
    );
}

export default SearchResultsCounter;