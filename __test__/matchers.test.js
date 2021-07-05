describe('comparadores comunes',  () => {
    const user = {
        name: "Carlos",
        lastname: "Lopez"
    }
    const user2 = {
        name: "Carlos2",
        lastname: "Lopez2"
    }
    test('no son completamente iguales', () => {
        expect(user).not.toEqual(user2);
    });

});