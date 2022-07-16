export function addDays(date, numberOfDays){
    let newDate = new Date();
    newDate.setDate(date.getDate() + numberOfDays);
    return (newDate);
  }

export function addWeeks(date, numberOfWeeks){
let newDate = new Date();
newDate.setDate(date.getDate() + 7 * numberOfWeeks);
return (newDate);
}

