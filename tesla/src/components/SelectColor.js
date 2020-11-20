import { useState } from 'react';
import Button from './Button.js';
function SelectColor(props){
    const [colorActive, setColorActive] = useState = "enabled";
    const [colorNone, SetColorNone] = useState = "disabled";
    return(
        <div className = "btnColor">
            <Button title= 'Blanc nacré multicouche - ' price='0 €' />
            <Button title= 'Noir uni - ' price='1000 €' />
    </div>
    )
}
export default SelectColor;