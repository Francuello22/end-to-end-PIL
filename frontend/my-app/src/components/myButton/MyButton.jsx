

const MyButton = ({text}) => {

    const handleClickButton = (title) => {
        console.log("Hiciste Click: ", title)
    };

    return (
    <button onClick= {() => handleClickButton (text)}> {text} </button>
    
    )};

export default  MyButton;

