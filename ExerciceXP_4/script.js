//Copy and paste the above object to your Javascript file.
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

//the number of floors in the building .
console.log(building.numberOfFloors);


//number of apartments on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);

//the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.nameOfTenants[1]);

//
 sarahAndDavidRent = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
 danRent = building.numberOfRoomsAndRent.dan[1];

 if (sarahAndDavidRent > danRent) {
    danRent += 1200
 }