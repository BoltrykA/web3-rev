import {useEffect} from "react";

const Loading = ({ onFinishLoading }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onFinishLoading();
        }, 3000);

        return () => clearTimeout(timeout);
    }, [onFinishLoading]);

    return (
        <div>
            <h1>Loading...</h1>
        </div>
    );
};

export default Loading;