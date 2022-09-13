function renderNums(v) {
    const chunks = []
    for (let i = 0; i < v.length; i++) {
        const ci = Math.floor(i / 4)
        if (chunks.length < ci + 1) chunks.push('')
        chunks[ci] += v[i]
    }
    return chunks
}

console.log(renderNums('12343123123'))