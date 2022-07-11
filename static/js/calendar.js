// const ornellember = ornellemberBundle.default;

const gregorianMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const daysOfWeek = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su']


const calendar = document.getElementById('calendar');

const firstDay = ornellember(new Date('January 1, 2022'))
const currentYear = firstDay.year
const isLeapYear = currentYear % 4 === 0;
const yearLength = isLeapYear ? 366 : 365;

const makeHeadRow = () => {
    const headRow = document.createElement("tr");
    daysOfWeek.forEach(dayOfWeek => {
        headRow.innerHTML += `<th>${dayOfWeek}</th>`;
    })
    return headRow;
}

const makeMonthTable = () => {
    const month = document.createElement("table");
    const headRow = makeHeadRow();
    month.appendChild(headRow);
    return month;
}

const makeFirstWeek = (firstDay) => {
    let firstWeek = document.createElement("tr");

    const firstDayOfWeekIdx = firstDay.rawDate.getDay()-1;
    for (let i = 0; i < firstDayOfWeekIdx; i++) {
        let dayCell = `<td></td>`
        firstWeek.innerHTML += dayCell;
    }

    return firstWeek;
}

const makeMonthsHtml = ({calendar, yearLength}) => {
    
    let currentMonth = "A";
    let monthDiv, monthTable, weekRow;

    const initNewMonth = () => {
        monthDiv = document.createElement("div");
        monthDiv.className = "month";

        monthDiv.insertAdjacentHTML('afterbegin', `<h2>${currentMonth}</h2>`)

        monthTable = makeMonthTable();
        weekRow = makeFirstWeek(firstDay);
    }

    const finalizeMonth = () => {
        monthTable.appendChild(weekRow);
        monthDiv.appendChild(monthTable);
        calendar.appendChild(monthDiv);
    }

    const initNewWeek = () => {
        monthTable.appendChild(weekRow);
        weekRow = document.createElement("tr");
    }

    initNewMonth();

    for (let i = 0; i < yearLength; i++) {
        const day = firstDay.add(i, "days");

        const gregorianMonth = gregorianMonths[day.rawDate.getMonth()];
        const gregorianDay = day.rawDate.getDate();
        if (currentMonth !== day.month) {
            currentMonth = day.month;
            finalizeMonth();
            initNewMonth();
        }

        if (weekRow.children.length === 7) {
            initNewWeek();
        }

        weekRow.insertAdjacentHTML("beforeEnd", `<td class="${gregorianMonth.toLowerCase()}">
            <p>${day.day}</p>
            <p class="gregorian-day">${gregorianDay} ${gregorianMonth}</p>
        </td>`);

        if (i === yearLength-1) {
            finalizeMonth();
        }

    }

    return calendar;
}

const months = makeMonthsHtml({calendar, yearLength});