const obsydia = [
    {
        firstname : "Petra",
        lastname : "Gurin",
        height : 152,
        groupmembers : ["Selen" , "Rosemi"]
    } ,
    {
        firstname : "Selen", 
        lastname : "Tatsuki",
        height : 160,
        groupmembers : ["Petra" , "Rosemi"]
    } ,
    {
        firstname : "Rosemi",
        lastname : "Lovelock",
        height : 150,
        groupmembers : ["Petra" , "Selen"]
    } 
];

obsydia.forEach(function(obsydia) {
    console.log(obsydia.firstname)
}
);

obsydia.forEach(function(obsydia) {
    console.log(obsydia.groupmembers)
}
);


//:D? fix this tmr in class?? 
obsydia.filter(function(obsydia) {
    console.log(obsydia.groupmembers)
}
)
