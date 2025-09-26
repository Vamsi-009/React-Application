import { useEffect, useState } from "react";

function ScreenSZ(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log("Event Listener added");

        return() => {
            window.removeEventListener("resize", handleResize);
            console.log("event removed")
        }
    }, []);

    useEffect(() => {
        document.title = `size ${width} x ${height}`;
    }, [width, height]);

    function handleResize(){
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    return(<>
    <p>windows width: {width}px</p>
    <p>windows height: {height}px</p>
    </>)
}
export default ScreenSZ;