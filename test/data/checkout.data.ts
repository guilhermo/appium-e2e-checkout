export const CHECKOUT_DATA = {
    validUser: {
        name: 'Guilhermo Demarco',
        address: 'Av. Teste, 123',
        city: 'Winterfell',
        state: 'Trindade',
        zip: '88000-000',
        country: 'Westeros'
    },
    payment: {
        validCard: {
            cardNumber: '358 1265 7568 789',
            expirationData: '03/29',
            securityCode: '123'
        },
        invalidCard: {
            fullName:'1234',
            cardNumber: 'ABC',
            expirationData: '01/20',
            securityCode: 'abc'
        }
    }
}