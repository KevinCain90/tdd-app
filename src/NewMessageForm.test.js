import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewMessageForm from './NewMessageForm';

const getForm = () => {
    render(<NewMessageForm />);
}

describe('<NewMessageForm />', () => {  
    it('clears the text field', async () => {
    getForm ();

    await userEvent.type(screen.getByTestId('messageText'), 'New message');

    userEvent.click(screen.getByTestId('sendButton'));

    expect(screen.getByTestId('messageText').value).toEqual('');
    });
})