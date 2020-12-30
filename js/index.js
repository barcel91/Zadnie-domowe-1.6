const legs = {
    chicken: 2,
    cow: 4,
    pig: 4,
}

const farmer1 = {
    animal1: 2,
    animal2: 3,
    animal3: 5,
}

const farmer2 = {
    animal1: 1,
    animal2: 2,
    animal3: 3,
}

const farmer3 = {
    animal1: 5,
    animal2: 2,
    animal3: 8,
    }
const totalLegs = function (dupa){
    return (
        legs.chicken * dupa.animal1 +
        legs.cow * dupa.animal2 +
        legs.pig * dupa.animal3
    );
}

console.log(totalLegs(farmer1))
console.log(totalLegs(farmer2))
console.log(totalLegs(farmer3))