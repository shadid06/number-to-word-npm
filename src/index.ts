export function numberToWord(n: number) {
    if (n < 0)
        return false;
    const single_digit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
    const double_digit = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
    const below_hundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']

    if (n === 0) return 'Zero'

    function translate(num: number): string {
        let word = "";

        if (num < 10) {
            word = single_digit[num] + ' ';
        } else if (num < 20) {
            word = double_digit[num - 10] + ' ';
        } else if (num < 100) {
            const rem = translate(num % 10);
            word = below_hundred[Math.floor(num / 10) - 2] + ' ' + rem;
        } else if (num < 1000) {
            word = single_digit[Math.floor(num / 100)] + ' Hundred ' + translate(num % 100);
        } else if (num < 1000000) {
            word = translate(parseInt(String(num / 1000))) + ' Thousand ' + translate(num % 1000);
        } else if (num < 1000000000) {
            word = translate(parseInt(String(num / 1000000))) + ' Million ' + translate(num % 1000000);
        } else {
            word = translate(parseInt(String(num / 1000000000))) + ' Billion ' + translate(num % 1000000000);
        }

        return word;
    }

    const result = translate(n);
    return result.trim();
}
