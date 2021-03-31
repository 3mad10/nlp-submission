import { checkURL } from '../js/urlChecker'
const urlTest = "https://jestjs.io/docs/getting-started";

describe('test url checking functionality',()=>{
    test('ths should return true', () => {
        expect(checkURL).toBeDefined();
    });
    test('if a valid url is returning true', () => {
        expect(checkURL(urlTest)).toBeTruthy();
    });
    test('if an ivalid url is returning false', () => {
        expect(checkURL('urlTest')).toBeFalsy();
    });

})