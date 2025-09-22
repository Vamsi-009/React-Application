
function Button(){

    // const handleClick = () => console.log("OUCH");

    // const handleClick2 = (name) =>console.log(`${name} stop clicking me`)

    // return(<button onClick={handleClick2}>Click Me </button>)

    //sythetic bace event.....

    const handleClick = (e) => e.target.textContent = "ouch..";
    return(<button onDoubleClick = {(e) => handleClick(e)}>Click Me </button>);


}
export default Button