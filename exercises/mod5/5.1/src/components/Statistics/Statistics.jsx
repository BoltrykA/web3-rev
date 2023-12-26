import StatisticLine from "components/StatisticLine/StatisticLine.jsx";

const Statistics = ({ good, neutral, bad }) => {

        return (
            <div>
                <h2>Statistics</h2>
                <table>
                    <tbody>
                <StatisticLine text="Good" value={good}></StatisticLine>
                <StatisticLine text="Ok" value={neutral}></StatisticLine>
                <StatisticLine text="Bad" value={bad}></StatisticLine>
                    </tbody>
                    </table>
            </div>
        )

}

export default Statistics;