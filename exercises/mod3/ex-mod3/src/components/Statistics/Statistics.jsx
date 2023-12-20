import StatisticLine from "components/StatisticLine/StatisticLine.jsx";
import Loading from "components/Loading/Loading.jsx";

const Statistics = ({ good, neutral, bad }) => {
    const total = (good + neutral + bad) || 0;
    const positivePercentage = Math.round((good / total) * 100) || 0;

    if (total === 0) {
        return (
            <div>
                <h2>Statistics</h2>
                <p>No feedback given</p>
            </div>
        )
    }

    else {
        return (
            <div>
                <Loading></Loading>
                <h2>Statistics</h2>
                <table>
                    <tbody>
                <StatisticLine text="Good" value={good}></StatisticLine>
                <StatisticLine text="Neutral" value={neutral}></StatisticLine>
                <StatisticLine text="Bad" value={bad}></StatisticLine>
                <StatisticLine text="Total" value={total}></StatisticLine>
                <StatisticLine text="Positive feedback percentage" value={positivePercentage}></StatisticLine>
                    </tbody>
                    </table>
            </div>
        )
    }
}

export default Statistics;