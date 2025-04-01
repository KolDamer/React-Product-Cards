function VotingResults({name, netVotes, key}){

    return (
        <>
            <ul className="flex justify-between">
                <li>{key}▶️ {name}</li>
                <span>{netVotes}</span>
            </ul>
        </>
    )
}
export default VotingResults;