import { useEffect, useState } from "react";
import CandidateCard from "./components/CandidateCard";
import Card from "./components/Card";
import Header from "./components/Header";

import { getAllData } from "./services/electionsService";
import DropDown from "./components/DropDown";
import Loading from "./components/Loading";
import Button from "./components/Button";
import CityElection from "./components/CityElection";
import Strong from "./components/Strong";
import Error from "./components/Error";

function App() {
  const [candidates, setCandidates] = useState([]);
  const [cities, setCities] = useState([]);
  const [elections, setElections] = useState([]);
  const [selectedCity, setselectedCity] = useState("");
  const [filtredCandidates, setFiltredCandidates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const recoverData = async () => {
      setLoading(true);
      try {
        const [citiArray, candidatesArray, electionArray] = await getAllData();
        setCities(citiArray);
        setCandidates(candidatesArray);
        setElections(electionArray);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(e.message);
      }
    };

    recoverData();
  }, []);

  useEffect(() => {
    const filtredElections = elections.filter(
      (election) => election.cityId === selectedCity.id
    );
    let candidatesPerElection = [];
    // prettier-ignore
    for (let election of filtredElections) {
      let votingPercent = ((election.votes / selectedCity.presence) * 100).toFixed(2);
      let newCandidateData = {
        ...candidates.find((candidate) => candidate.id === election.candidateId),
        votes: election.votes,
        votingPercent,
      };
      candidatesPerElection.push(newCandidateData);
    }
    candidatesPerElection = candidatesPerElection.sort(
      (a, b) => b.votes - a.votes
    );
    setFiltredCandidates(candidatesPerElection);
  }, [selectedCity, elections, candidates]);

  const selectCityById = (id) => {
    setselectedCity(cities.find((city) => city.id === id));
  };

  return (
    <div className="flex flex-column w-full align-content-center text-center justify-content-center">
      <Header titulo="React Elections" backgroundColorClass="bg-green-300" />
      <div className="flex justify-content-center">
        <DropDown
          options={cities}
          id="city-selection"
          value={selectedCity.id}
          handleChange={selectCityById}
        >
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </DropDown>
      </div>
      <Card borderColorClass="border-green-100">
        {loading && <Loading />}
        {selectedCity && (
          <div className="w-full my-4">
            <CityElection city={selectedCity} />
            <Strong>{filtredCandidates.length} Candidates</Strong>
          </div>
        )}
        {filtredCandidates.length > 0 && (
          <>
            {filtredCandidates.map((candidate, index) => (
              <CandidateCard
                key={candidate.id}
                candidate={candidate}
                winner={index === 0}
              />
            ))}
          </>
        )}

        {filtredCandidates.length == 0 && !loading && !error  && (
          <div>
            <h2 className="text-xl m-3">
              Choose the municipality to see the results from election:
            </h2>
            {cities.map((city) => (
              <Button
                key={city.id}
                label={city.name}
                handleClick={() => selectCityById(city.id)}
              />
            ))}
          </div>
        )}

        {error !== "" && <Error>{error}</Error>}
      </Card>
    </div>
  );
}

export default App;
