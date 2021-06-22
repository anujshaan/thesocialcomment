let d = new Date();
let curryear = d.getFullYear();

let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let currmonth = monthNames[d.getMonth()]

let dayNames = ["Sunday","Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
let currdayString = dayNames[d.getDay()];
let currday = d.getDate();

const currDate = {
    day : currdayString,
    dayDigit: currday,
    month:currmonth,
    year : curryear
}

export default currDate;