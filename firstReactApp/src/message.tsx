
//Try use Pascal case for all function components
function Message() {
    const redirect = () => {
        window.location.href = "https://github.com/27226395-Luke-Achmad/JSdevelopmentPractice";
    };
    return <button onClick = {redirect}>
        Redirect
        </button>; 
}

export default Message;