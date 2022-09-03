const loadCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    return data.data.news_category;
}
const categoriesList = async () => {
    const data = await loadCategories();
    const allCategoriesList = document.getElementById('category');
    for (const category of data) {
        // console.log(category.category_name);
        const li = document.createElement('li');
        li.innerHTML = `
        <button onclick="displaynews('${category.category_id}','${category.category_name}')">${category.category_name}</button>
        `;
        allCategoriesList.appendChild(li);
    }
    // console.log(category);
}
categoriesList()
const displaynews = async (catId) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${catId}`;
    const res = await fetch(url);
    const data = await res.json();
    newsDetails(data.data)
}
const newsDetails = newes => {
    // console.log(newes);
    const categoryContainer = document.getElementById('category-container');
    newes.forEach(news => {
        // console.log(news);
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
        <div class="card w-100 p-3">
        <img src="${news.thumbnail_url}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
        <h5 class="card-title">${news.title}</h5>
        <p class="card-text">${news.details.slice(0, 260)}...</p>
        
        <img src="${news.author.img}" class="img-fluid w-25 rounded p-2">

        <div class="d-flex justify-content-between px-2">
        <p class="fw-bolder">${news.author.name}</p>
        <p><span class="text-bold text-primary">views:</span>${news.total_view}M</p>
        </div>
        <button type="button" class="btn btn-primary">Details</button>
        </div>
        </div>
        `;
        categoryContainer.appendChild(newsDiv)
    });
}
// const displaynews = categories => {
//     const categoryContainer = document.getElementById('category-container');
//     categories.forEach(category => {
//         const categoryDiv = document.createElement('div');
//         categoryDiv.classList.add('row');
//         categoryDiv.innerHTML = `
//             <figure><img src="https://placeimg.com/400/400/arch" alt="Album"></figure>
//                     <div class="card-body">
//                         <h2 class="card-title">New album is released!</h2>
//                         <p>Click the button to listen on Spotiwhy app.</p>
//                         <div class="card-actions justify-end">
//                             <button class="btn btn-primary">Listen</button>
//                         </div>
//                     </div>
//             `;
//         categoryContainer.appendChilda(categoryDiv);
//     })
// }
// const displaynews = categories => {
//     console.log(id);
//     const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     // console.log(data.data.category_id);
//     const categoryContainer = document.getElementById('category-container');
//     categories.forEach(category => {
//         const categoryDiv = document.createElement('div');
//         categoryDiv.classList.add('row');
//         categoryDiv.innerHTML = `
//     <figure><img src="https://placeimg.com/400/400/arch" alt="Album"></figure>
//             <div class="card-body">
//                 <h2 class="card-title">New album is released!</h2>
//                 <p>Click the button to listen on Spotiwhy app.</p>
//                 <div class="card-actions justify-end">
//                     <button class="btn btn-primary">Listen</button>
//                 </div>
//             </div>
//     `;
//         categoryContainer.appendChilda(categoryDiv);
//     });
//     console.log(category);

// }

// displaynews()

loadCategories()