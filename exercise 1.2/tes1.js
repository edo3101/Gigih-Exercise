const song = [ {
    title: "remas",
    artists: [{
        name: "aldi T"
    }
    ],
    duration: 6969,
},
{
    title: "bujang",
    artists: [{
        name: "aldino"
    }
    ],
    duration: 9999,
}
]

const songPromise = time => new Promise(resolve => setTimeout(resolve, time));

songPromise(2000).then( () => console.log(son))
.catch(error => console.error("An ocured Error: ", error.message));