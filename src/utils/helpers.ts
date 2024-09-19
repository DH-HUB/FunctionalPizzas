//convertir un string de date en objet Date pour calculs
export const parseDate = (dateString: string): Date => {
    return new Date(dateString);
  };
  
  // calculer la différence en minutes entre deux dates
  export const calculateTimeDifferenceInMinutes = (start: string, end: string): number => {
    const startDate = parseDate(start);
    const endDate = parseDate(end);
    return (endDate.getTime() - startDate.getTime()) / 60000; 
  };
  
  // calculer la moyenne d'un tableau de nombres
  export const calculateAverage = (numbers: number[]): number => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return numbers.length === 0 ? 0 : sum / numbers.length;
  };
  
  //trouver les occurrences d'éléments dans un tableau pour compter les pizzas commandées
  export const countOccurrences = <T>(array: T[]): Record<T, number> => {
    return array.reduce((countMap, item) => {
      countMap[item] = (countMap[item] || 0) + 1;
      return countMap;
    }, {} as Record<T, number>);
  };
  
  // trouver la clé avec la valeur maximale dans un objet
  export const findKeyWithMaxValue = (obj: Record<string, number>): string | undefined => {
    return Object.keys(obj).reduce((maxKey, key) => 
      !maxKey || obj[key] > obj[maxKey] ? key : maxKey, 
      ""
    );
  };
  