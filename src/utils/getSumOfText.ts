export default function getFirstTwoSentences(text: string): string {
    if (!text) {
        return '';
    }
    const sentencePattern = /[^.!?]+[.!?]+/g;
    const sentences = text.match(sentencePattern);
    if (sentences && sentences.length >= 4) {
        return sentences.slice(0, 2).join(' ');
    } else {
        return text;
    }
}
