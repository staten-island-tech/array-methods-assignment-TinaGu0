const obsydia = {
    members: [{
            firstname: "Petra",
            lastname: "Gurin",
            height: 152,
            groupmembers: ["Selen" , "Rosemi"]
        } ,
        {
            firstname: "Selen", 
            lastname: "Tatsuki",
            height: 160,
            groupmembers: ["Petra" , "Rosemi"]
        } ,
        {
            firstname: "Rosemi",
            lastname: "Lovelock",
            height: 150,
            groupmembers: ["Petra" , "Selen"]
        } 
    ]    
};


obsydia.members.forEach(function(members) {
    console.log(members.firstname)
});

obsydia.members.forEach(function(members) {
    members.groupmembers.forEach(function(groupmembers) {
    console.log(groupmembers)
    },
    )});

const obsydiafiltered = obsydia.members.filter(function(obsydia) {
    return obsydia.height < 155
});
console.log(obsydiafiltered)
