export default function getFirstTwoSentences(text: string): string {
    if (!text) {
        return '';
    }
    return text.slice(0, 200) + "...";
}
