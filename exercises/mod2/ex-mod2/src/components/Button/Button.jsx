const Button = ({ onClick, number, text }) => (
    <button data-delta={number} onClick={onClick}>
        {text}
    </button>
);

export default Button;