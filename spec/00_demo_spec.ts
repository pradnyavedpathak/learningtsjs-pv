describe('Writing basic Specs', () => {
    it('Can add two numbers', () => {
        // Given (Arrange)
        const a = 10, b = 20;
        //When (Act)
        const answer = a + b;
        //Then (assert)
        expect(answer).toBe(30);
    });
});