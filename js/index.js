const list = document.querySelector('.comments-list');

function parseDate(date){
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear()

    return `${day}.${month}.${year}`
}


function createCommentMarkup({name, rating, text, date}) {
    let comment = document.createElement('div');
    comment.classList.add('comment');
    comment.innerHTML = ` <div class="comment__title">
                <p class="comment__person-name">${name}</p>
                <div class="comment__rating">
                    ${rating}/5
                </div>
            </div>
            <div class="comment__text">
                <p>${text}</p>
            </div>
            <div class="comment__date">
                <p>${parseDate(date)}</p>
            </div>`

    return comment
}

const comments = [
    {
        name: 'Саня',
        rating: 4,
        text: 'Some text1',
        date: new Date(2022, 0, 12)
    },
    {
        name: 'Миша',
        rating: 4,
        text: 'Some text2',
        date: new Date(2022, 0, 17)
    },
    {
        name: 'Никита',
        rating: 4,
        text: 'Some text3',
        date: new Date(2022, 0, 1)
    }, {
        name: 'Даня',
        rating: 4,
        text: 'Some text4',
        date: new Date(2021, 11, 13)
    }, {
        name: 'Какой-то лох',
        rating: 4,
        text: 'Some text5',
        date: new Date(2021, 11, 25)
    }
]

// for (let elem of comments){
//     console.log(elem)
// }

comments.forEach((comment) => {
    const markup = createCommentMarkup(comment);
    list.append(markup);
})
