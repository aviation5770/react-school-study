import dummy from "../DB/data.json";
export default function Day() {
    // dummy.words
    const day = 4;
    const wordList = dummy.words.filter(word => (
        word.day == day
    ))
    console.log(wordList)
    
    return (
        <>
        <table>
            <tbody>
                {wordList.map(word => (
                    <tr key = {word.id}>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}