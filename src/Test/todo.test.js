import toDos from '../Store/ConfigureStore';
const stateBefore = [];
const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
}
const stateAfter = [
    {
        id: 0,
        text: 'Learn Redux',
        completed: false
    }
];

describe('my test', () => {
    it('some text',
        () => {
               expect(toDos(stateBefore, action)).toEqual(stateAfter);
        });
});