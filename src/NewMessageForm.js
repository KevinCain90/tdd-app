const NewMessageForm = () => {
    return (
        <>
            <input type="text" data-testid='messageText' />
            <button data-testid='sendButton'>Send</button>
        </>
    )
}

export default NewMessageForm;