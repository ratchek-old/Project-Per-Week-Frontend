export function addDays(date, numberOfDays){
    let newDate = new Date();
    newDate.setDate(date.getDate() + numberOfDays);
    return (newDate);
  }