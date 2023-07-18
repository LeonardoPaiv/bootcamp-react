import Strong from "./Strong";

const CandidateCard = ({ candidate, winner }) => {
  const { name, username, votingPercent, votes } = candidate;
  return (
    <div
      className={`shadow-5 w-14rem p-2 m-2 flex flex-column
                  align-content-center justify-content-center text-center
                  border-1 ${
                    winner ? "border-green-400" : "border-yellow-400"
                  }`}
    >
      <div className="flex flex-row justify-content-around">
        <img
          src={`src\\assets\\profilePics\\${username}.png`}
          alt={username}
          className="w-7rem h-7rem border-circle"
        />
        <div className="flex flex-column justify-content-center align-content-center h-full">
          <span className={`${winner ? "text-green-400" : "text-yellow-400"} my-2`}>
            <Strong>{votingPercent} % </Strong>
          </span>
          <span>votes: {votes.toLocaleString("en-US")}</span>
        </div>
      </div>
      <span className="my-2">
        <Strong>{name}</Strong>
      </span>
      <span className={`${winner ? "text-green-400" : "text-yellow-400"}`}>
        <Strong>{winner ? "Elected" : "Not elected"}</Strong>
      </span>
    </div>
  );
};

export default CandidateCard;
