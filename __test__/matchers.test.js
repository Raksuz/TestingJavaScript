describe('comparadores comunes',  () => {
    const user = {
        name: "Carlos",
        lastname: "Lopez"
    }
    const user2 = {
        name: "Carlos",
        lastname: "Lopez"
    }

    test('igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });

});