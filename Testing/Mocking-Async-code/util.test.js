const { loadTitle }=require('./util')
//jest.mock('./http');

test('should print an uppercase text',()=>
{
    loadTitle().then(title => {
        expect(title).toBe('DELECTUS AUT AUTEM');
    });
// expect(printTitle()).toBe('DELECTUS AUT AUTEM');
})