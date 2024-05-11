
const Calendar = () =>{
    return(<h1>hi</h1>)
}


var d = new Date()
var month = d.getMonth() + 1;
var year = d.getFullYear()
var firstDayOfNextMonth = new Date(year, month, 1)
var lastDayOfMonth = new Date(firstDayOfNextMonth - 1)
var lastDay = lastDayOfMonth.getDate();
var dayOfWeek = lastDayOfMonth.getDay();

var days = [7, 1, 2, 3, 4, 5, 6];
dayOfWeek = days[dayOfWeek] 

let row1 = []
let row2 = []
let row3 = []
let row4 = []
let row5 = []
let row6 = []
let rows = [row1, row2, row3, row4, row5, row6]

var rows_index = 0
while (lastDay > 0){
    let n = rows[rows_index]
    n.push(lastDay)
    lastDay -= 1
    dayOfWeek -= 1
    if (dayOfWeek < 1){
        rows_index+=1
        dayOfWeek = 7
    }
}

console.log(row1)
console.log(row2)
console.log(row3)
console.log(row4)
console.log(row5)
console.log(row6)
export default Calendar