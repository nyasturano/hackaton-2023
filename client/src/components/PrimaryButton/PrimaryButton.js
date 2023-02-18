import './primaryButton.css'

const PrimaryButton = ({text, click}) => {
    return(
        <button className="primary-btn" onClick={() => click()}>{text}</button>
    );
}

export default PrimaryButton;