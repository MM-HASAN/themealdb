
//html in javascript
const searchArea = document.getElementById('search-area')
const searchMeal = document.getElementById('search-meal')
const submitMil = document.getElementById('submit-meal')



submitMil.addEventListener('click', mealList);

function mealList(){
  const searchMilValue = document.getElementById('search-meal').value.trim();
  const displayMeal = document.getElementById('display-meal')

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMilValue}`)
  .then( res=>res.json())
  .then( data=>{
    let getHtml = "";
    //get meals with search input 
    
    if(data.meals){
      data.meals.forEach(element => {
        getHtml = `
            <div onclick="getGradients('${element.strMeal}')" class="meals">
              <img src = "${element.strMealThumb}" alt = "">
              <h2>${element.strMeal}</h2>
            </div>    
          `
      });
    }else{
      getHtml = `<h1 class="error"> nothing is matching what are you searching </h1>`
    }
    displayMeal.innerHTML = getHtml;
  })

}

//get meal details with gradient name
const getGradients= (mealName) =>{
  const gradientList = document.getElementById('gradient-List')
  const gradientLink = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
  fetch(gradientLink)
  .then(res=>res.json())
  .then( data=>{
   
    const gradientHtml = `
    <div class="meals">
    <ul class="gradientList">
        <li><span> id==>  </span> ${data.meals[0].idMeal} </li>
        <li><span> Area ==>  </span> ${data.meals[0].strArea} </li>
        <li><span> Category ==> </span> ${data.meals[0].strCategory} </li>
        <li><span> Ingredient1 ==>  </span> ${data.meals[0].strIngredient1} </li>
        <li><span> Ingredient2 ==>  </span> ${data.meals[0].strIngredient2} </li>
        <li><span> Ingredient3 ==> </span> ${data.meals[0].strIngredient3}  </li>
        <li><span> Ingredient4 ==> </span> ${data.meals[0].strIngredient4} </li>
        <li><span> Ingredient5==>  </span> ${data.meals[0].strIngredient5} </li>
        <li><span> Ingredient6==>  </span> ${data.meals[0].strIngredient6} </li>
      </ul>
    </div>
    `
    gradientList.innerHTML = gradientHtml;
  })
}

