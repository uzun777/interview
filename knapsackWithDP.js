function knapsackWithDP(W, weights, values) {
    const N = values.length
    const costTable = Array(N+1).fill(null).map(() => Array(W+1).fill(0))

    for(let i = 1; i<= values.length; i++) {
        for(let j=1; j<=W; j++) {
            if(weights[i-1]<=j) {
                costTable[i][j] = Math.max(costTable[i-1][j], values[i-1] + costTable[i-1][j-weights[i-1]])
            }
            else {
                costTable[i][j] = costTable[i-1][j]
            }
        }
    }

    return costTable[N][W]
}

console.log('knapsackWithDP ', knapsackWithDP(7, [1, 3, 4, 5], [1, 4, 5, 7]))