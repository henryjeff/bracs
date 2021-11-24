const calculateK = (aRating: number, bRating: number) => {
    const average = (aRating + bRating) / 2
    if (average < 2100) return 32
    if (average > 2100 && average < 2400) return 24
    return 16
}

const expectedScore = (aRating: number, bRating:number) => {
    return 1 / (1 + 10.0**((bRating - aRating) / 400))
}

const playGame = (aRating: number, bRating: number, aWin: boolean) => {
    const aExpected = expectedScore(aRating, bRating)
    const bExpected = expectedScore(bRating, aRating)

    const lossScore = 0
    const winScore = 1

    const aScore = aWin ? winScore : lossScore
    const bScore = aWin ? lossScore : winScore

    const k = calculateK(aRating, bRating)
    const aNewRating = aRating + k * (aScore - aExpected)
    const bNewRating = bRating + k * (bScore - bExpected)

    return [Math.round(aNewRating), Math.round(bNewRating)]
}

export { playGame }