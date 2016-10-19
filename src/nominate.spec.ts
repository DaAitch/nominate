
import {nominate} from "./nominate";
describe('nominate', () => {

    it('should have anonymous function to have empty name', () => {
        expect((function() {}).name).toBe('');
    });

    it('should correctly nominate anonymous function', () => {
        const fn = nominate('myFunction', function(x: any, y: any, z: any) {
            return `${x}.${y}.${z}`;
        });

        expect(fn.name).toBe('myFunction');
        expect(fn(1, 5, 10)).toBe('1.5.10');
    });

});