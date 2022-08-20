import "./index.css";

import { useRef, useState, useEffect } from "react";
import { NavigateNext, NavigateBefore } from "@mui/icons-material";

export default function HorizontalScrollList(props) {
    let element = useRef(null);
    const [leftNavigatorVisible, setLeftNavigatorVisible] = useState(true);
    const [rightNavigatorVisible, setRightNavigatorVisible] = useState(false);
    const [scrollVal, setScrollVal] = useState(0);

    // Update the navigators whenever scollVal changes
    useEffect(() => {
        let maximumScrollVal = element.current.scrollWidth - element.current.clientWidth;
        setRightNavigatorVisible(scrollVal < maximumScrollVal);
        setLeftNavigatorVisible(scrollVal > 0);
    }, [scrollVal]);

    // DOM update as well as scrollVal update
    const scroll = (direction) => {
        let maximumScrollVal = element.current.scrollWidth - element.current.clientWidth;
        let scrollOffset = element.current.children[1].offsetLeft-element.current.children[0].offsetLeft;
        element.current.scrollBy(scrollOffset*direction, 0);
        setScrollVal(direction > 0 ?
            Math.min(maximumScrollVal, scrollVal + scrollOffset*direction) :
            Math.max(0, scrollVal + scrollOffset*direction)
        );
    }

    return <div className="horizontal-scroll-list">
        <NavigateBefore
            className={"navigator previous clickable " + (leftNavigatorVisible ? "" : "hidden")}
            onClick={()=>{ scroll(-1) }}
        />
        <div className="list" ref={element}> {props.children} </div>
        <NavigateNext
            className={"navigator next clickable " + (rightNavigatorVisible ? "" : "hidden")}
            onClick={()=>{ scroll(1) }}
        />
    </div>
}