{


    function countWordOccurrences(sentence: string, word: string) {
        const sentences = sentence.toLowerCase()
        const words = word.toLocaleLowerCase()
        const matches = sentences.split(words)
        return matches.length - 1
    }

   const result= countWordOccurrences("I love typescript", "typescript");
//    console.log(result);
   

}