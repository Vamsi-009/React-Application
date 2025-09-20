
function Button(){

    const styles ={
        backgroundColor:"hsl(200, 100%, 25%)",
        color: "aqua",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"         
}
    return(
        <button className="button" style={styles}>Click me</button>
    );
}
export default Button