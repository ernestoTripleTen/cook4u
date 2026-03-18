const MEAL_API_BASE_URL = 'www.themealdb.com/api/json/v1/1/search.php?s=';

export const fetchMeals = async (query) => {
    return fetch(`${MEAL_API_BASE_URL}${query}`)
        .then(res =>{ if (!res.ok) {
            throw new Error('Meal not Found')
        } 
        return res.json()
    });       
}