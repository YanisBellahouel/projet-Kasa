import { useEffect } from "react";
import { useState } from "react";


function Slide ({visible, children}) {
    const [showChildren, setShowChildren] = useState(visible);

    useEffect(() => {
        if (visible) {
            setShowChildren(true);

        }else {
            const timer = setTimeout(() => {
                setShowChildren(false);
            }, 300);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [visible]);


    let className ='Slide';
    if (!visible) {
        className += ' out'
    }
    return (
        <div className={className}>{showChildren && children}</div>

    )
}

export default Slide