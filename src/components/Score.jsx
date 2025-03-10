export default function Score( { score, timeLeft, targetsLeft }){
    return (
        <div>
            <h1>Score: {score} </h1>
            <p> Time : {timeLeft}</p>
            <p> Target Left {targetsLeft} </p>
        </div>
    );
}