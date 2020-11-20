import Button from './Button.js';
function SelectCar (props){

    return (
        <div className = "btnCar">
            <Button title= 'Grande autonomie - ' price='90 700 €' />
            <Button title= 'Performance - ' price='106 700 €' />
        </div>
    )
}
export default SelectCar;
