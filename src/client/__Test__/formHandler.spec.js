
import { handleSubmit } from '../js/formHandler'
import 'babel-polyfill'

const urlTest = "https://jestjs.io/docs/getting-started"

describe('test handle functionality',()=>{
    test('the function should be defined', () => {
        expect(handleSubmit).toBeDefined();
    });
})