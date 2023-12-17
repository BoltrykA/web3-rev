import lis1 from './077450.jpg';
const Header = ({ course }) => {
    return (
        <div>
        <img src={lis1} width="500px" alt="lis1" />
        <h1>{course}</h1>
        </div>
    );
};


export default Header;