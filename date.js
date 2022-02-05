
const dateSelect = document.getElementById('month');
const timeSelect = document.getElementById('time');
const dateHolder = document.querySelector('.date-holder');
// DATE STUFF ----------------
const date = new Date;
const year = date.getFullYear()
let month = date.getMonth();
let day = date.getDay();
let today = date.getDate();
let timeHour = date.getHours();
let timeMinutes = date.getMinutes();

// SETING CURRENT TIME ------------------------
timeMinutes = `0${timeMinutes}`

// CONVERT TIME ------------
 if (timeMinutes >= 00) 
{
    timeMinutes = '30';
}
else if (timeMinutes >= 30)
{
    timeMinutes = '00';
}

timeHour = timeHour + 2;

// SET TIME FOR NEXT DAY IF PAST OPEN TIMES
if (timeHour > 17)
{
    timeHour = 10;
    timeMinutes = '00';
    today = today + 1;
} 
//SET TIME FOR BEFORE OPEN
if (timeHour < 10) {
    timeHour = 10
}

const time = `${timeHour}:${timeMinutes}`
timeSelect.value = time;

// START OF CALENDAR ON LOAD ----------------------------
startMonthDay(month, year, getCalendar)

// CLICK TO SELECT/SWITCH DATE -------------------------
dateSelect.addEventListener('change', () => {
    
    month = dateSelect.value;

    startMonthDay(month, year, getCalendar);
    reserveDate();
    })
// FIND FIRST DAY OF THE MONTH ------------------------
function startMonthDay(m, y, callback) {
    // START OF YEAR DAY
    let startWeekDay = 6;
    // MONTH DAYS SUM
    const monthDayArr = [31,28,31,30,31,30,31,31,30,31,30,31];
    // LEAP YEAR CHECK
    if (y % 4 == 0) 
    {
        monthDayArr[1] = 29;
    }
    // SLICE AND ADD MONTH 
    if (m > 1) {

        let compileMonthLength = monthDayArr.slice(0, m).reduce((a,b) => a + b);
     // RUN THROUGH MONTHS TO  GET FIRST DAY OF SELECTED MONTH -------------
        for (let i = 0; i < compileMonthLength; i++ )
        {
            startWeekDay++
            if (startWeekDay > 6) 
            {
                startWeekDay = 0
            }
            
        }

    } 
    callback(m, y, startWeekDay);
}

// SET CALENDAR LENGTHS
function getCalendar(m, y, d)
{

   // TRACKS BLANK DAYS TO PUT AT END OF CALENDAR
   let dPlus = d;
    // MONTHS NUM TO FILL CALENDAR
   let monthDays = 0;
   let priorMonthDays = 0;
    // FIX STRING NUM INPUT
   m = parseInt(m)

 
// GET CORRECT MONTH DAY NUMBER
    switch (m) 
    {
        case 0:
        monthDays = 31;
        priorMonthDays = 31;
        dateSelect.value = '0';
        break;
        case 1:
        monthDays = 28;
        priorMonthDays = 31;
        dateSelect.value = '1';
        break;
        case 2:
        monthDays = 31;
        priorMonthDays = 28;
        dateSelect.value = '2';
        break;
        case 3:
        monthDays = 30;
        priorMonthDays = 31;
        dateSelect.value = '3';
        break;
        case 4:
        monthDays = 31;
        priorMonthDays = 30;
        dateSelect.value = '4';
        break;
        case 5:
        monthDays = 30;
        priorMonthDays = 31;
        dateSelect.value = '5';
        break;
        case 6:
        monthDays = 31;
        priorMonthDays = 30;
        dateSelect.value = '6';
        break;
        case 7:
        monthDays = 31;
        priorMonthDays = 31;
        dateSelect.value = '7';
        break;
        case 8:
        monthDays = 30;
        priorMonthDays = 31;
        dateSelect.value = '8';
        break;
        case 9:
        monthDays = 31;
        priorMonthDays = 30;
        dateSelect.value = '9';
        break;
        case 10:
        monthDays = 30;
        priorMonthDays = 31;
        dateSelect.value = '10';
        break;
        case 11:
        monthDays = 31;
        priorMonthDays = 30;
        dateSelect.value = '11';
        break;
        default:
            console.log('failed month switch');
            break;
    }

// LEAP YEAR CHECK ----------------
   if (y % 4 == 0 && m == 1) 
   {
        monthDays = 29;
        priorMonthDays = 29;
   }
// MINUES DATE WITH DAY TO GET DAY MONTH STARTED ON

let dTrack = monthDays;

   while (dTrack > 0)
    {
        dTrack--;
        dPlus++;

        if (dPlus > 6)
        {
            dPlus = 0;
        }

    }
    // FOR END UNSELECTABLE DAYS
    if (dPlus > 0)
    {
        dPlus = 7 - dPlus;

    }

    // KEEP TRACK OF PRIOR MONTH DAY
    
    makeCalendar(d, dPlus, monthDays, priorMonthDays)
    
}
// BUILD OUT CALENDAR
function makeCalendar(dayNum, dayNumPlus, monNum, pMonNum) 
{
    // CLEAR HTML FOR NEW MONTH
    dateHolder.innerText = '';
    // MAKE CALENDAR
    if (dayNum == 0) 
    {
        for (let i = 1; i <= monNum; i++) 
            {
            const day = document.createElement('div');
            const dayDate = document.createElement('p');
            dayDate.innerHTML = i
            day.classList.add('day-cont');
            day.appendChild(dayDate);
            dateHolder.appendChild(day)
            }

            let i = 1

            while (dayNumPlus > 0)
            {
                const dayBlank = document.createElement('div');
                dayBlank.classList.add('day-pre-cont');
                dayBlank.innerHTML = i++
                dateHolder.appendChild(dayBlank);
                dayNumPlus--
            }
    }
    else 
    {
            while (dayNum > 0)
            {
                const dayBlank = document.createElement('div');
                dayBlank.classList.add('day-pre-cont');
                dayBlank.innerHTML = pMonNum + 1 - dayNum
                dateHolder.appendChild(dayBlank);
                dayNum--;
            }

            for (let i = 1; i <= monNum; i++) 
            {
            const day = document.createElement('div');
            const dayDate = document.createElement('p');
            dayDate.innerHTML = i
            day.classList.add('day-cont');
            day.appendChild(dayDate);
            dateHolder.appendChild(day)
            }
            
            let i = 1;
            while (dayNumPlus > 0)
            {

                const dayBlank = document.createElement('div');
                dayBlank.classList.add('day-pre-cont');
                dayBlank.innerHTML = i
                dateHolder.appendChild(dayBlank);
                dayNumPlus--
                i++
            }
        
    }
}

// SELECT TIME AND HOLD DATE



async function reserveDate() {

    await makeCalendar

    const daySelect = document.querySelectorAll('.day-cont');

    function addCurrentDate() {
        daySelect.forEach(day => {
                if (day.innerText == today && dateSelect.value == month) 
                {
                day.classList.add('active-date-reserve');
                }
                // find way to start at the first of new month
            })    
    } 

    addCurrentDate();

    // FUNCTION FOR REMOVING CLASS
    function removeClassDate() {
        daySelect.forEach(day => {
                day.classList.remove('active-date-reserve');
            })      
    } 
    // SELECT AND RESERVE DATE
    daySelect.forEach(day => {

        day.addEventListener('click',() => {
            removeClassDate();
            day.classList.add('active-date-reserve');

    })
});

}

    

reserveDate();

