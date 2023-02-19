import './input.css';
const Input = ({fieldName, fieldType, inputHook}) => {
    return(
        <div className="inpt">
            <p>{fieldName}</p>
            <input type={fieldType} value={inputHook.value} onChange={inputHook.onChange}/>
        </div>
    );
}

export default Input;