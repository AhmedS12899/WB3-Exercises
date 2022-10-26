function display(date){
    let m = date.getMonth();
    let y = date.getFullYear();
    let d = date.getDay();

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log(`${date.getDate()}-${month[m]}-${y} (${days[d]})`);
}
let date = new Date();
display(date);