import React from "react";
import DetailsSection from "./Components/DetailsSection";
import DisplayRepo from "./Components/DisplayRepo";
import ErrorBoundaries from "./Components/ErrorBoundaries";

function App() {
  return (
    <div className="container">
      <div className="card">
        <ErrorBoundaries>
          <DetailsSection />
        </ErrorBoundaries>

        <ErrorBoundaries>
          <DisplayRepo />
        </ErrorBoundaries>
      </div>
    </div>
  );
}

export default App;
