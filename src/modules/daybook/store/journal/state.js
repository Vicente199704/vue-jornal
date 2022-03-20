

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime, //12323234
            date: new Date().toDateString, //Sat 23, july
            text: 'lorem ipsum blablablabla',
            picture: null,
        },
        {
            id: new Date().getTime + 1000, //12323234
            date: new Date().toDateString, //Sat 23, july
            text:'LOREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEM',
            picture: null,
        },
        {
            id: new Date().getTime + 300, //12323234
            date: new Date().toDateString, //Sat 23, july
            text: 'lorem TERCEROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO',
            picture: null,
        },
    ]
})
