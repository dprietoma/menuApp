export class MenuResponse {
    meals: Meal[];
}

export class Meal {
    strMeal:      string;
    strMealThumb: string;
    idMeal:       string;
    strArea?:     string;
    strCategory?: string;
}
