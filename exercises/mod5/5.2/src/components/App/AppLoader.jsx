import { CounterWrapper } from "../../contexts/counterContexts.jsx";
import App from "components/App/App.jsx";

const AppLoader= () => {
    return (
        <CounterWrapper >
            <App />

        </CounterWrapper >
    )
}

export default AppLoader;