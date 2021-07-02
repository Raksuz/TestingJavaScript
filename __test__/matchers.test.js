describe('comparadores comunes',  () => {
    const user = {
        name: "Carlos",
        lastname: "Lopez"
    }
    const user2 = {
        name: "Carlos2",
        lastname: "Lopez2"
    }

    test('igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });

});