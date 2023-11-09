import React from "react";
import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "./context/DataContext";
import { useStoreState } from "easy-peasy";


const Home = ({fetchError, isLoading}) => {
  // const { searchResults, fetchError, isLoading } = useContext(DataContext);

  const searchResults = useStoreState(state => state.searchResults);

  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading Posts...</p>}
      {!isLoading && fetchError && <p className="statusMsg" style={{color:"red"}}>{fetchError}</p>}
      {!fetchError && !isLoading && (searchResults.length ? (
        <Feed posts={searchResults} />
      ) : (
        <p style={{ marginTop: "1.5rem" }}>no posts to display.</p>
      ))}
    </main>
  );
};

export default Home;
