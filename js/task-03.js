const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];


// const gallerysEl = document.querySelector(".gallery");
// console.log(gallerysEl);
// const result = images.map((image) => {
//     const galleryLi = document.createElement("li");
//     const galleryImg = document.createElement("img");
//     galleryImg.src = image.url;
//     galleryImg.alt = image.alt;
//     galleryLi.insertAdjacentHTML("afterbegin", galleryImg.outerHTML);
//     return galleryLi.outerHTML;
// });
// gallerysEl.innerHTML += result.join('')

const gallerysEl = document.querySelector("ul");
const element = images
    .map(function ({ url, alt }) {
        return `<li><img src = '${url}' alt = '${alt}' width="200"></li>`;
    })
    .join("");
gallerysEl.insertAdjacentHTML("afterbegin", element);

gallerysEl.style.cssText = `display: flex;
  align-items: center;
  gap: 10px;
  `;
