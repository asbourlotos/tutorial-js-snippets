function beer() {
    var bottlesOfBeer = 99
    while (bottlesOfBeer >=3) {
        console.log(bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer. Take 1 down, pass it around, " + (bottlesOfBeer - 1) + " bottles of beer on the wall.");
        bottlesOfBeer--;
    }
    if (bottlesOfBeer === 2) {
        console.log(bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer. Take 1 down, pass it around, " + (bottlesOfBeer - 1) + " bottle of beer on the wall.");
        bottlesOfBeer--;
    }
    if (bottlesOfBeer === 1) {
        console.log(bottlesOfBeer + " bottle of beer on the wall, " + bottlesOfBeer + " bottle of beer. Take 1 down, pass it around, " + " no more bottles of beer on the wall.");
        bottlesOfBeer--;
    } else if (bottlesOfBeer === 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the stoer and buy some more, 99 bottles of beer on the wall.");
        bottlesOfBeer = 99;
    }
}

beer();