//import { formatName as fn } from "../src/formatters";
import * as formatters from "../src/formatters";
describe('functions', () => {
    describe('function literals', () => {
        it('has a couple of kinds', () => {
            //Named Function
            function add(a: number, b: number) {
                return a + b;
            }
            expect(add(1, 2)).toBe(3);
            //Anonymous functions
            const subtract = function (a: number, b: number) {
                return b - a;
            }
            expect(subtract(1, 2)).toBe(1);

            const mutliply = (a: number, b: number) => a * b;
            expect(mutliply(3, 2)).toBe(6);

            const divide = (a: number, b: number) => {
                if (b <= 0) {
                    throw new Error('You almost destroyed the universe');
                } else {
                    return b / a;
                }
            }
            const age = 21;
            const message = age >= 21 ? "Old Enough" : "Too Young";

        });

        it('passing arguments to functions', () => {

            function formatName(first: string, last: string, mi?: string): string {
                let fullName = `${last}, ${first}`;
                if (mi) { //=> this is same as if(mi != "" && mi != null && mi != 0)
                    fullName += ` ${mi}.`;
                }
                return fullName;
            }
            expect("dog").toBeTruthy();
            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
        });

        it('using rest parameters', () => {
            function add(a: number, b: number, ...rest: number[]) {
                const firstTwo = a + b;
                return rest.reduce((s, n) => s + n, firstTwo);
            }
            expect(add(2, 2)).toBe(4);
            expect(add(2, 2, 2)).toBe(6);
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);

        });
    });

    describe('higher order functions', () => {
        /* 
       * - takes one or more functions as arguments (i.e. procedural parameters),
       *-  returns a function as its result. 
       */
        it('takes a function as an argument', () => {
            //            const answer = fn('Han', 'Solo');         

            const answer = formatters.formatName('Han', 'Solo');
            expect(answer).toBe('Solo, Han');
            expect(formatters.PI).toBe(3.1415);

            expect(formatters.formatName('Han', 'Solo', (x) => x.toUpperCase())).toBe('SOLO, HAN');
            const wrapInStars = wrap('***');
            expect(wrapInStars('Tacos')).toBe('***Tacos***');
            expect(formatters.formatName('Han', 'Solo', wrapInStars)).toBe('***Solo, Han***');

            //const wrapInCarots: formatters.Transform = (x) => `^^^${x}^^^`;
            const wrapInCarots = wrap('^^^');
            expect(formatters.formatName('Han', 'Solo', wrapInCarots)).toBe('^^^Solo, Han^^^');

            // function wrapInStars(what: string): string {
            //     return `***${what}***`;
            // }

            function wrap(chars: string): formatters.Transform {
                return (x) => `${chars}${x}${chars}`;
            }
        });
    });

    describe('array methods', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        it('taking a look at every member of an array', () => {
            numbers.forEach((x) => console.log(x));
        });

        describe('methods that return new array', () => {
            it('has a filter', () => {
                function isEven(n: number): boolean {
                    return n % 2 === 0;
                }
                //const evens = numbers.filter(n=>n%2 === 0);
                const evens = numbers.filter(isEven);
                expect(evens).toEqual([2, 4, 6, 8]);
                expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
            });

            it('map', () => {
                const doubled = numbers.map(n => n * 2);
                expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18])
            });
            it('do a practice', () => {
                interface Vehicle {
                    vin: string;
                    makeAndModel: string;
                    mileage: number;
                }
                const vehicles: Vehicle[] = [
                    { vin: '9999', makeAndModel: 'Chevy Tahoe', mileage: 182000 },
                    { vin: 'aka92', makeAndModel: 'Toyota Prius', mileage: 89999 },
                    { vin: 'kduwi', makeAndModel: 'Ford Explorer', mileage: 99998 }
                ];
                // add your code to this line.
                const lowMileageVehicles = vehicles
                    .filter(x => x.mileage < 100000)
                    .map(x => x.makeAndModel); // like select in C# linq

                expect(lowMileageVehicles).toEqual(['Toyota Prius', 'Ford Explorer']);
            });
        });
        describe('methods that produce a single (scalar) value', () => {
            it('has methods that check the membership of an array', () => {
                expect(numbers.some(n => n > 8)).toBe(true);
                expect(numbers.every(n => n % 2 === 0)).toBe(false);
            });
            it('has reduce', () => {
                expect(numbers.reduce((s, n) => s + n)).toBe(45);
                expect(numbers.reduce((s, n) => s + n, 100)).toBe(145);
            });
        });

        describe('a demo', () => {
            it('using reduce for something "real"', () => {
                interface Vehicle {
                    vin: string;
                    makeAndModel: string;
                    mileage: number;
                }
                const vehicles: Vehicle[] = [
                    { vin: '9999', makeAndModel: 'Chevy Tahoe', mileage: 182000 },
                    { vin: 'aka92', makeAndModel: 'Toyota Prius', mileage: 89999 },
                    { vin: 'kduwi', makeAndModel: 'Ford Explorer', mileage: 99998 }
                ];

                interface HighestMileageVehicle {
                    vin: string;
                    mileage: number;
                }

                const seed: HighestMileageVehicle = {
                    vin: null,
                    mileage: -1
                };

                const answer = vehicles.reduce((p, n) => {
                    if (n.mileage > p.mileage) {
                        return {
                            vin: n.vin,
                            mileage: n.mileage
                        };
                    } else {
                        return p
                    }

                }, seed);

                expect(answer).toEqual({
                    vin: '9999',
                    mileage: 182000
                });
            });


        });
    });
});