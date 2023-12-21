import Part from "components/Part/Part.jsx";

const Content = ({ parts }) => {
    return (
        <>
        <h2>Content</h2>
        <div>
            {parts.map((part, index) => <Part key={index} part={part}/>)}
        </div>
        </>
    );
};


export default Content;