import "./NoSearchResults.scss";

function NoSearchResults() {
  return (
    <div className="noSearchResults grid-center">
      <h2 className="noSearchResults_header">
        No Jobs Returned From Search
      </h2>
      <p className="noSearchResults_text">
        Alter Your Search Options and Try Again
      </p>
    </div>
  );
}

export default NoSearchResults;
