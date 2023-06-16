describe('Creating a message', () => {
    it('Displays the message in the list', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="messageText"]')
        .type('New message');

        cy.get('[data-testid="sendButton"]')
        .click();

        cy.get('[data-testid="messageText"]')
        .should('have.value', '');

        cy.contains('New message');
    })
})

/* The code describes the steps a user would take interacting with our app:

Visiting the web site
Entering the text "New message" into a message text field
Clicking a send button
Confirming that the message text field is cleared out
Confirming that the "New message" we entered appears somewhere on screen */