
export default function Feedback({ feedback, total, positive }) {
    return <ul>
        <li>
            <p>Good: {feedback.good}</p>
        </li>
        <li>
            <p>Neutral: {feedback.neutral}</p>
        </li>
        <li>
            <p>Bad: {feedback.bad}</p>
        </li>
        <li>
            <p>Total: {total}</p>
        </li>
        <li>
            <p>Positive: {positive}%</p>
        </li>
    </ul>;
}