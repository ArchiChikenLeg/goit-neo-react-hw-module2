
export default function Options({update, total}){
    return <>
        <button onClick={() => update("good")} >Good</button>
        <button onClick={() => update("neutral")} >Neutral</button>
        <button onClick={() => update("bad")} >Bad</button>
        {total > 0 && (
            <button onClick={() => update("reset") } >Reset</button>
        )}
    </>;
}