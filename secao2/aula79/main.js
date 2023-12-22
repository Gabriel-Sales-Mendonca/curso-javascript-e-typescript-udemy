//Funçâo recursiva

function recursiva(max) {
    if (max > 10) return
    console.log(max)
    max += 1
    recursiva(max)
}


recursiva(0)