let data = [
    {
        name: 'Mateo',
        age: '30'
    },
    {
        name: 'Sarah',
        age: '27'
    },
    {
        name: 'Paco',
        age: '32'
    },
    {
        name: 'Julian',
        age: '47'
    },
    {
        name: 'Truchita',
        age: '94'
    },
    {
        name: 'Ola',
        age: '21'
    },
    {
        name: 'Sancho',
        age: '56'
    },
    {
        name: 'Tomas',
        age: '97'
    },
];

const info = document.querySelector('#info')

let details = data.map(function (item) {
    return (
        '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>'
    )
});

info.innerHTML = details.join('\n');