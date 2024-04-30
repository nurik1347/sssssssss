let arr = [
    {
        id: 1,
        vidio: 'https://i.ytimg.com/vi/e3bswcippP0/maxresdefault.jpg',
        title: 'Real & Barsa',
        description: 'Barsa xorlandi',
        prosmotr: '4,8 млн просмотров',
        qoyilgan: '1 год назад'

    },

    {
        id: 2,
        vidio: 'https://allornothing.uz/image/cache/catalog/T-shirts/Merch/massaaonsblack3-722x722.jpg',
        title: 'massa',
        description: 'Obuna boling',
        prosmotr: '1,2 млн просмотров',
        qoyilgan: '1 год назад'

    },

    {
        id: 3,
        vidio: 'https://cdn1.img.sputniknews.uz/img/07e5/0c/03/21635571_138:40:809:543_1920x0_80_0_0_98569a822d1108eaac6f7e6bc0762317.jpg',
        title: 'munisa',
        description: 'Obuna boling',
        prosmotr: '4,6 млн просмотров',
        qoyilgan: '2 год назад'

    },

    {
        id: 4,
        vidio: 'https://repost.uz/storage/uploads/23-1682931493-avto11-post-material.jpeg',
        title: 'ummon',
        description: 'Obuna boling',
        prosmotr: '4 млн просмотров',
        qoyilgan: '8 год назад'

    },

    {
        id: 5,
        vidio: 'https://yt3.googleusercontent.com/bFycUqZ_v5gaPYvpcIJuhbIlOVaQwL5IFS38BI91bKsrwORlr9jT0-CgzGUmxI12hpnCkjeEzw=s900-c-k-c0x00ffffff-no-rj',
        title: 'lolo',
        description: 'Obuna boling',
        prosmotr: '1 млн просмотров',
        qoyilgan: '1 месяц назад'

    },


    {
        id: 6,
        vidio: 'https://yt3.googleusercontent.com/3YUAB5rUdYiPbSGVMogq8SWhZAyGJqy2kznYVNljgevY3asHBLDbg-qmYZMAGYI0E4UQN2OasQ=s900-c-k-c0x00ffffff-no-rj',
        title: 'consta',
        description: 'Obuna boling',
        prosmotr: '1 млн просмотров',
        qoyilgan: '1 месяц назад'

    },


    {
        id: 7,
        vidio: 'https://i.ytimg.com/vi/6Tr_c0_Fnuo/maxresdefault.jpg',
        title: 'Shohruxon',
        description: 'Obuna boling',
        prosmotr: '1 млн просмотров',
        qoyilgan: '1 месяц назад'

    },


    {
        id: 8,
        vidio: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRR0skGwf-8wwnISe4JOfxeJjkpra3_rSe99GLBvMrIzPlbVoyy',
        title: 'Sherali Joraev',
        description: 'Obuna boling',
        prosmotr: '1 млн просмотров',
        qoyilgan: '1 месяц назад'

    },



]

let wrapper = document.querySelector('.wrapper');
let input = document.querySelector('.input');

const CreateCard = (data) => {
    wrapper.innerHTML = '';
    data.forEach((v) => {
        let card = document.createElement('div');
        card.innerHTML = `<img width='360' height='350' src='${v.vidio}'/> <h3>${v.title}</h3> <p>${v.description}</p> <p>${v.prosmotr}</p> <p>${v.qoyilgan}</p>`;
        wrapper.appendChild(card);
    });
};

CreateCard(arr);

input.addEventListener("input", () => {
    let result = arr.filter((v) => v.title.includes(input.value));
    CreateCard(result);
});