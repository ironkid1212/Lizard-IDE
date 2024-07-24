(function(Scratch) {
    'use strict';

    // Conversion function
    function convertToRoman(num) {
        if (isNaN(num)) return NaN;
        const romanNumerals = [
            ["S", 1000000],
            ["F", 500000],
            ["G", 100000],
            ["HG", 90000],
            ["P", 50000],
            ["HP", 40000],
            ["H", 10000],
            ["MH", 9000],
            ["NMMM", 8000],
            ["NMM", 7000],
            ["NM", 6000],
            ["N", 5000],
            ["MN", 4000],
            ["M", 1000],
            ["CM", 900],
            ["D", 500],
            ["CD", 400],
            ["C", 100],
            ["XC", 90],
            ["L", 50],
            ["XL", 40],
            ["X", 10],
            ["IX", 9],
            ["V", 5],
            ["IV", 4],
            ["I", 1]
        ];
        let result = '';
        for (let [roman, value] of romanNumerals) {
            while (num >= value) {
                result += roman;
                num -= value;
            }
        }
        return result;
    }

    class RomanNumeralExtension {
        getInfo() {
            return {
                id: 'romanNumeralExtension',
                name: 'Roman Numerals',
                "color1": "#0088ff",
                "color2": "#0063ba",
                "tbShow": true,
                blocks: [
                    {
                        opcode: 'convertToRoman',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'convert [NUMBER] to Roman numeral',
                        arguments: {
                            NUMBER: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1
                            }
                        }
                    }
                ]
            };
        }

        convertToRoman(args) {
            const number = args.NUMBER;
            return convertToRoman(number);
        }
    }

    Scratch.extensions.register(new RomanNumeralExtension());
})(Scratch);