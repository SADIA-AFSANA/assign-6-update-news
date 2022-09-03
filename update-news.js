
// const loadCategory = async () => {
//     const url = ` https://openapi.programming-hero.com/api/news/categories`
//     const res = await fetch(url);
//     const data = await res.json();
//     // displayCategory

//     displayCategoryList(data.data.news_category);

// }
// const displayCategoryList = categories => {
//     const categoriesList = document.getElementById('category');

//     for (const category of categories) {
//         const categoryDiv = document.createElement('li');
//         categoryDiv.innerHTML = `
//     <a onclick="categoryClick(${category.category_id})"href="">${category.category_name}</a>
//         `;
//         categoriesList.appendChild(categoryDiv);
//     }
//     console.log(category);
//     const categoryClick = (categoriId) => {

//     }
    // }
    // const displayCategoryList = async () => {
    //     const data = await loadCategory();
    //     const allCategories = document.getElementById('category');
    //     for (const category of data) {
    //         console.log(category.category_name);
    //         const li = document.createElement('li');

    //         li.innerHTML = `

    //              <button onclick="categoryClick('${category.category_id}','${category.category_name}')" >${category.category_name}</button>
    //               `;
    //         allCategories.appendChild(li);
    //     }

    //     console.log(category);

    // const categoryClick = async (_id) => {
    //     const url = `https://openapi.programming-hero.com/api/news/${_id}`;
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     console.log(data.data);
    // }

    // const categoryClick = (_id) => {
    //     const url = `https://openapi.programming-hero.com/api/news/${_id}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => console.log(data.item[0].category_id));
    // }
    // const categorypress = categoriees => {
    //     // console.log(category);
    //     const categoryDetails = document.getElementById('category-details');
    //     categoriees.forEach(category => {
    //         const categoryDiv = document.createElement('div')
    //         categoryDiv.classList.add('class');
    //         categoryDiv.innerHTML = `



    //             `;
    //         categoryDetails.appendChild(categoryDiv);
    //         console.log(category);
    //     })


    // }

    // const categorypress = categoryy => {
    //    

    //     console.log();
    // const categorypress = (_id) => {
    //     console.log(_id);
    //     const url = ` https://openapi.programming-hero.com/api/news/${_id}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => displayNewsDetails(data._id))

    // }
    // const displayNewsDetails = (data) => {
    //     console.log(data);
    // }
// }
// loadCategory()




