// eslint-disable-next-line react/prop-types
const Button = ({ letter, counter, onClick }) => {
    return (
        <>
         <div>
         Opinion {letter} : {counter}
        <button onClick={onClick}>Vote</button></div>
        </>
    )
}

export default Button;