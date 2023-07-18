import Strong from "./Strong";

const CityElection = ({ city = {} }) => {
  const { name, votingPopulation, absence, presence } = city;

  return (
    <div className="flex flex-column">
      <h2 className="text-2xl">Election in {name}</h2>
      <div className="flex flex-row justify-content-around flex-wrap my-2">
        <span>
          <Strong>Voting Population:</Strong> {votingPopulation.toLocaleString('en-US')}
        </span>
        <span><Strong>Absence:</Strong> {absence.toLocaleString('en-US')}</span>
        <span><Strong>Presence:</Strong> {presence.toLocaleString('en-US')}</span>
      </div>
    </div>
  );
};

export default CityElection;
