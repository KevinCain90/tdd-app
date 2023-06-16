import {useState} from 'react';

const NewMessageForm = () => {
    const [inputText, setInputText] = useState('');

    const handleChange = (event) => {
        setInputText(event.target.value);
    }

    const handleClick = () => {
        setInputText('');
    }

    return (
        <>
            <input 
                type="text"
                data-testid='messageText'
                value={inputText}
                onChange={handleChange}
            />
            <button 
                data-testid='sendButton'
                onClick={handleClick}
            >
                Send
            </button>
        </>
    )
}

export default NewMessageForm;