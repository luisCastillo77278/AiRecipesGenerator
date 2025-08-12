export interface INutrients {
  name: string,
  amount: number,
  unit: string,
  percentOfDailyNeeds: number
}

export interface IProperties {
  name: string,
  amount: number,
  unit: string
}

export interface IFlavonoids {
  name: string,
  amount: number,
  unit: string
}

export interface IIngredients {
  id: number,
  name: string,
  amount: number,
  unit: string,
  nutrients: INutrients[]
}


export interface INutrition {
  nutrients: INutrients[],
  properties: IProperties[],
  flavonoids: IFlavonoids[],
  ingredients: IIngredients[],
  caloricBreakdown: {
    percentCarbs: number,
    percentProtein: number,
    percentFat: number
  },
  weightPerServing: {
    amount: number,
    unit: string
  }
}

export interface IExtenIngredients {
  id: number,
  aisle: string,
  image: string,
  consistency: string,
  name: string,
  nameClean: string,
  original: string,
  originalName: string,
  amount: number,
  unit: string,
  meta: string[],
  measures: {
    us: {
      amount: number,
      unitLong: string,
      unitShort: string
    },
    metric: {
      amount: number,
      unitLong: string,
      unitShort: string
    }
  },
}

export interface IEquipament {
  id: number,
  name: string,
  localizedName: string,
  image: string
}

export interface IStep {
  number: number,
  step: string,
  ingredients: IExtenIngredients[],
  equipment: IEquipament[],
}

export interface IAnalyzedInstruction {
  name: string,
  steps: IStep[]
}

export interface Recipe {
  id: number,
  image: string,
  imageType: string,
  title: string,
  readyInMinutes: number,
  servings: number,
  sourceUrl: string,
  vegetarian: boolean,
  vegan: boolean,
  glutenFree: boolean,
  dairyFree: boolean,
  veryHealthy: boolean,
  cheap: boolean,
  veryPopular: boolean,
  sustainable: boolean,
  lowFodmap: boolean,
  weightWatcherSmartPoints: number,
  gaps: string,
  preparationMinutes: number | string | null;
  cookingMinutes: number | string | null;
  aggregateLikes: number,
  healthScore: number,
  creditsText: string,
  license: string,
  sourceName: string,
  pricePerServing: number,
  extendedIngredients: IExtenIngredients[],
  nutrition: INutrition,
  summary: string,
  cuisines: string[],
  dishTypes: string[],
  diets: string[],
  occasions: string[],
  instructions: string,
  analyzedInstructions: IAnalyzedInstruction[],
  originalId: null,
  spoonacularSourceUrl: string
  spoonacularScore: number,
}