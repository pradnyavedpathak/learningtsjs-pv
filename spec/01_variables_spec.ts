describe('variables and constants', () => {
    describe('declaring variables', () => {
        it('has a let keyword', () => {
            let x: number | string = 12;

            expect(x).toBe(12);

            x = 13;

            expect(x).toBe(13);

            let y;

            y = 18;
            expect(y).toBe(18);

            y = 'Tacos!';

            expect(y).toBe('Tacos!');

            //x = function () { console.log('Hello, World') }; 

        });

        it('using the const keyword', () => {
            const MIN_AGE = 13;
            //MIN_AGE = 14; => error

            const FAVORITE_NUMBERS = [9, 20, 108];
            FAVORITE_NUMBERS[0] = 10;

            const ACTOR = {
                name: 'Peter Mayhew',
                role: 'Chewbacca'
            };
            ACTOR.role = 'Chewie';
        });

        it('still has var but it is bad and you should feel bad if you use it', () => {
            const age = 22;
            if (age >= 21) {
                var oldEnhough = true; //JaveScript issues => this variable can be accessible to outside this scope but same is not true with let and const keyword.
            }
            expect(oldEnhough).toBe(true);
        });
    });

    describe('literals', () => {
        it('has numberic literals', () => {
            let first = 10;
            let second = 3.12;
            let salary = 10_001_0001;
            let hexNumber = 0xff;
            let binaryNum = 0b101010;
            let octal = 0o744;

        });

        it('has string literals', () => {
            let firstString = 'Hellow World';
            expect(firstString).toBe("Hellow World");

            let story = 'He said "oh my gosh"';
            let author = "Flanner O'Connel";

            expect("hi").toBe(`hi`);

            let lifeStory = `sdfsfsf....................
            sdfsfsffsf............
            wetrwer...`
            let name = "jeff", age = 35;
            let info = `His name is ${name} and his age is ${age}`;
            console.log(info);

        });

        it('has array literals', () => {
            const things = [];
            things[0] = 'Hello';
            things[1] = 35;
            things[998] = 'You went this far?';
            things[999] = things;
            expect(things[2]).toBeUndefined();
            //console.log(things);

            const luckyNumber: Array<number | string> = [];
            const friends: (string | number)[] = [];
            friends[0] = 'David';
            friends[1] = 'David1';
            friends[2] = 42;
            //friends[999] = 'David';
            console.log(friends);
        });

        it('making the case', () => {

            // public string FormatName(string first, string last) {}
            // interface NameResult {
            //     fullname: string;
            //     numberOfLetters: number;
            // }
            function add(a: number, b: number): number {
                return a + b;
            }

            interface NameFormattingResult { fullName: string, numberOfLetters: number };
            function formatName(first: string, last: string): NameFormattingResult {
                const fullName = `${last}, ${first}`;

                return {
                    fullName: fullName,
                    numberOfLetters: fullName.length
                }
            }

            const result = formatName('Han', 'Solo');
            expect(result.fullName).toBe('Solo, Han');
            expect(result.numberOfLetters).toBe(9);


        });

        it('the syntax', () => {
            let warren: [string, string, number];
            warren = ['Warren', 'Ellis', 56];

            //let first = warren[0];
            //let age = warren[2];
            let [first, , age] = warren;

            expect(first).toBe('Warren');
            expect(age).toBe(56);
        });

        it('Using a tuple', () => {

            type ThingWithLetterAndStuff = string;
            let xname: ThingWithLetterAndStuff;

            type FormatNameResult = [string, number];
            type NameInput = [string, string];
            function formatName(input: NameInput): FormatNameResult {
                const [first, last] = input;
                const fullName = `${last}, ${first}`;
                return [fullName, fullName.length];
            }
            const [name, len] = formatName(['Han', 'Solo']);
            expect([name, len]).toEqual(['Solo, Han', 9]);
            expect(name).toBe('Solo, Han');
            expect(len).toBe(9);
        });

        it('using destructuring on an array', () => {
            const friends = ['Reggie', 'Susan', 'Neil'];
            const [first, , last] = friends;
            expect(first).toBe('Reggie');

            const [firstFriend, ...restOfMyFriend] = friends;
            expect(firstFriend).toBe('Reggie');
            expect(restOfMyFriend).toEqual(['Susan', 'Neil']);
        });

        it('using the spread operator', () => {
            const friends = ['Susan', 'Neil'];
            const newFriends = ['Reggie', ...friends];
            expect(newFriends).toEqual(['Reggie', 'Susan', 'Neil']);
        });
    });

    describe('objects and destructuring of objects', () => {
        describe('object literals', () => {
            interface Movie { title: string, director: string };
            // const movie :{title: string, director: string } = {
            //     title: 'The Last Jedi',
            //     director: 'Rian Johnson'
            // }
            const movie: Movie = {
                title: 'The Last Jedi',
                director: 'Rian Johnson'
            };
            const movie2: Movie = {
                title: 'The Last Jedi1',
                director: 'Rian Johnson1'
            };
        });
        it('duck typing', () => {
            function doIt(thing: { message: string }) {
                console.log(thing.message);
            }
            doIt({ message: 'Call you dada' });

            const phoneCall = {
                from: 'Jenny',
                when: 'noon',
                callbackNumber: '867-5309',
                message: 'Pay me!'
            }

            doIt(phoneCall);

            interface PhoneCallType {
                message: string,
                from?: string
            }

            // doIt("Tacos");
            // doIt();
            // doIt({message: 'Call your mom'}, 1, 2, 3);
            doIt({ message: 'Call your mom' });

            const phoneCall1 = {
                from: 'Jenny',
                when: 'noon',
                callbackNumber: '867-5309',
                message: 'Pay me!'
            }

            doIt(phoneCall1);

            class PhoneCall implements PhoneCallType {
                constructor(public message: string, public from: string, private when: string) {
                    //
                }

                getInfo() {
                    return `Call from ${this.from}. Message ${this.message} at ${this.when}`;
                }
            }

            const pc1 = new PhoneCall('Wash Car', 'Carol', 'noon');
            console.log(pc1.getInfo());

            doIt(pc1);

            const pc2: PhoneCallType = {
                message: 'From Wify',
                from: 'test'
            };
        });

    });

});