import * as allfunctions from "./modules/functions.js";


allfunctions.slider();
allfunctions.sliderSecond();
allfunctions.sliderRow();
allfunctions.sliderRowSecond();
allfunctions.sliderProduct();
allfunctions.sliderPopularProduct();
allfunctions.sliderSimilarProduct();
allfunctions.sliderQuickViewProduct();
allfunctions.matherialTabs();
allfunctions.openCommentTextarea();
allfunctions.getFileName();
allfunctions.productSpoiler();
allfunctions.sizeSilected();
allfunctions.hoverSearchBlock();
allfunctions.customSelect('.sort-title__text', '.sort-item__list', '.objects-sort__item', '.sort-title__text', '.sort-title__field', '.sort-list__item', '.sort-title__clear')
allfunctions.salonTab();
allfunctions.openSearchResultPanel();
allfunctions.modalTabCity();
allfunctions.searchModalcity();
allfunctions.modalQuickViewModal();
allfunctions.hoverGetImgDropDownNavigation();
allfunctions.modalRegistrationSalon('.registration-salon-btn', '.close-order-salon', '.order-salon-modal');
allfunctions.modalRegistrationSalon('.order-size', '.close-order-size', '.order-size-modal');
allfunctions.openCalendarBody();
allfunctions.select('.order-salon-modal .order-header__title', '.order-salon-modal .order-row__select');
allfunctions.select('.order-size-modal .order-header__title', '.order-size-modal .order-row__select');
allfunctions.selectedThumbImg();

if ($('#order-phone')) {
    $('#order-phone').inputmask({ "mask": "+7 (999) 999-99-99" });
}
if ($('#order-size-phone')) {
    $('#order-size-phone').inputmask({ "mask": "+7 (999) 999-99-99" });
}

allfunctions.vewiModalPageList();
allfunctions.sliderHomePage();


var Cal = function (divId) {


    this.divId = divId;


    this.DaysOfWeek = [
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб',
        'Вс'
    ];


    this.Months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];


    var d = new Date();

    this.currMonth = d.getMonth();
    this.currYear = d.getFullYear();
    this.currDay = d.getDate();

};


Cal.prototype.nextMonth = function () {
    if (this.currMonth == 11) {
        this.currMonth = 0;
        this.currYear = this.currYear + 1;
    }
    else {
        this.currMonth = this.currMonth + 1;
    }
    this.showcurr();
};


Cal.prototype.previousMonth = function () {
    if (this.currMonth == 0) {
        this.currMonth = 11;
        this.currYear = this.currYear - 1;
    }
    else {
        this.currMonth = this.currMonth - 1;
    }
    this.showcurr();
};


Cal.prototype.showcurr = function () {
    this.showMonth(this.currYear, this.currMonth);
};


Cal.prototype.showMonth = function (y, m) {

    var d = new Date()

        , firstDayOfMonth = new Date(y, m, 7).getDay()

        , lastDateOfMonth = new Date(y, m + 1, 0).getDate()

        , lastDayOfLastMonth = m == 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();


    var html = '<div class="calendar">';

    html += '<div class="calendar__header"><span>';
    html += '</span></div>';
    document.querySelector('#calendar-one .calendar-row__month').innerText = this.Months[m];
    document.querySelector('#calendar-two .calendar-row__month').innerText = this.Months[m];



    html += '<div class="days">';
    for (var i = 0; i < this.DaysOfWeek.length; i++) {
        html += '<span>' + this.DaysOfWeek[i] + '</span>';
    }
    html += '</div>';


    var i = 1;
    do {
        var dow = new Date(y, m, i).getDay();

        if (dow == 1) {
            html += '<div class="calendar_row test">';
        }

        else if (i == 1) {
            html += '<div class="calendar_row first">';
            var k = lastDayOfLastMonth - firstDayOfMonth + 1;
            for (var j = 0; j < firstDayOfMonth; j++) {
                html += '<span class="not-current">' + k + '</span>';
                k++;
            }

        }

        var chk = new Date();
        var chkY = chk.getFullYear();
        var chkM = chk.getMonth();
        if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
            html += '<span class="normal selected-day">' + i + '</span>';
            document.querySelector('.title-date').innerText = `${i} ${this.Months[m]} ${y}`
            document.querySelector('.order-header__input').value = `${i} ${this.Months[m]} ${y}`

            document.querySelector('#calendar-two').closest('.order-inner__row').querySelector('.title-date').innerText = `${i} ${this.Months[m]} ${y}`
            document.querySelector('#calendar-two').closest('.order-inner__row').querySelector('.order-header__input').value = `${i} ${this.Months[m]} ${y}`
        } else {
            html += '<span class="normal">' + (i) + '</span>';
        }


        if (dow == 0) {
            html += '</div>';
        }

        else if (i == lastDateOfMonth) {
            var k = 1;
            for (dow; dow < 7; dow++) {
                html += '<span class="not-current">' + k + '</span>';
                k++;
            }
        }

        i++;


    } while (i <= lastDateOfMonth);

    html += '</div>';

    document.getElementById(this.divId).innerHTML = html;
};

window.onload = function () {

    let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    let date = new Date();
    let day = date.getDate();
    let currMonth = months[date.getMonth()];
    if (document.querySelector('.order-btn__date')) {
        document.querySelector('.order-btn__date').innerText = `${day} ${currMonth}`
    }

    function dayNext(idCalendar, getNextBtn, getMonths, getDate, gateDay, getCurrentMonth) {
        getNextBtn.addEventListener('click', () => {
            getDate.setDate(gateDay + 1);
            var c = new Cal("divCal");
            var c2 = new Cal("divCal2");
            c.showcurr();
            c2.showcurr();
            selected('#calendar-one');
            selected('#calendar-two');
            document.querySelector(idCalendar).closest('.order-inner__row').querySelector('.order-header .order-header__date').innerText = `${getDate.getDate()} ${months[getDate.getMonth()]} ${getDate.getFullYear()}`;
            document.querySelector(idCalendar).closest('.order-inner__row').querySelector('.order-header__input').value = `${getDate.getDate()} ${months[getDate.getMonth()]} ${getDate.getFullYear()}`
            document.querySelector(idCalendar).closest('.order-inner__row').querySelector('.calendar-row__month').innerText = months[getDate.getMonth()];
            if (document.querySelector('.order-btn__date')) {
                document.querySelector('.order-btn__date').innerText = `${getDate.getDate()} ${months[getDate.getMonth()]}`
            }
            if (getCurrentMonth != getMonths[getDate.getMonth()]) {
                var c = new Cal("divCal");
                var c2 = new Cal("divCal2");
                c.nextMonth();
                c2.nextMonth();
                selected('#calendar-one');
                selected('#calendar-two');
            };

            document.querySelectorAll(`${idCalendar} .normal`).forEach(item => {
                if (getDate.getDate() == item.innerText) {
                    item.classList.add('selected-day')
                } else {
                    item.classList.remove('selected-day')
                }
            });
        })

    }
    dayNext('#calendar-one', document.querySelector('#calendar-one .calendar-inner__next'), months, date, day, currMonth)
    dayNext('#calendar-two', document.querySelector('#calendar-two .calendar-inner__next'), months, date, day, currMonth)

    function dayNextDouble(idCalendar, getNextBtn, getMonths, getDate, gateDay, getCurrentMonth) {
        getNextBtn.addEventListener('click', () => {
            getDate.setDate(gateDay + 2);

            var c = new Cal("divCal");
            var c2 = new Cal("divCal2");
            c.showcurr();
            c2.showcurr();
            selected('#calendar-one');
            selected('#calendar-two');
            console.log(document.querySelector(idCalendar));
            document.querySelector(idCalendar).closest('.order-inner__row').querySelector('.order-header__date').innerText = `${getDate.getDate()} ${months[getDate.getMonth()]} ${getDate.getFullYear()}`;
            document.querySelector(idCalendar).closest('.order-inner__row').querySelector('.order-header__input').value = `${getDate.getDate()} ${months[getDate.getMonth()]} ${getDate.getFullYear()}`
            document.querySelector(idCalendar).closest('.order-inner__row').querySelector('.calendar-row__month').innerText = months[getDate.getMonth()];
            if (document.querySelector('.order-btn__date')) {
                document.querySelector('.order-btn__date').innerText = `${getDate.getDate()} ${months[getDate.getMonth()]}`
            }
            if (getCurrentMonth != getMonths[getDate.getMonth()]) {
                var c = new Cal("divCal");
                var c2 = new Cal("divCal2");
                c.nextMonth();
                c2.nextMonth();
                selected('#calendar-one');
                selected('#calendar-two');
            };

            document.querySelectorAll(`${idCalendar} .normal`).forEach(item => {
                if (getDate.getDate() == item.innerText) {
                    item.classList.add('selected-day')
                } else {
                    item.classList.remove('selected-day')
                }
            });
        })

    }
    dayNextDouble('#calendar-one', document.querySelector('#calendar-one .calendar-inner__aftertomorrow'), months, date, day, currMonth)
    dayNextDouble('#calendar-two', document.querySelector('#calendar-two .calendar-inner__aftertomorrow'), months, date, day, currMonth)



    var c = new Cal("divCal");
    var c2 = new Cal("divCal2");
    c.showcurr();
    c2.showcurr();

    getId('btnNext').onclick = function () {
        c.nextMonth();
        selected('#calendar-one');
    };
    getId('btnPrev').onclick = function () {
        c.previousMonth();
        selected('#calendar-one');
    };

    getId('btnNext2').onclick = function () {
        c2.nextMonth();
        selected('#calendar-two');
    };
    getId('btnPrev2').onclick = function () {
        c2.previousMonth();
        selected('#calendar-two');
    };


    function selected(idCalendar) {
        let allDays = document.querySelectorAll(`${idCalendar} .normal`);

        allDays.forEach(element => {
            element.addEventListener('click', selectDay)
        });
        function selectDay() {
            allDays.forEach(element => {
                element.classList.remove('selected-day')
            });
            this.classList.add('selected-day')
            let day = this.innerText;
            let today = new Date();
            let yyyy = today.getFullYear();
            if (document.querySelector('#calendar-one')) {
                let month = document.querySelector('.calendar-row__month').innerText;
                document.querySelector('.title-date').innerText = `${day} ${month} ${yyyy}`
                document.querySelector('.order-header__input').value = `${day} ${month} ${yyyy}`
                if (document.querySelector('.order-btn__date')) {
                    document.querySelector('.order-btn__date').innerText = `${day} ${month}`
                }
            }
            if (document.querySelector('#calendar-two')) {
                let month = document.querySelector('#calendar-two .calendar-row__month').innerText;
                document.querySelector('#calendar-two').closest('.order-inner__row').querySelector('.title-date').innerText = `${day} ${month} ${yyyy}`
                document.querySelector('#calendar-two').closest('.order-inner__row').querySelector('.order-header__input').value = `${day} ${month} ${yyyy}`
            }

        }
    }
    selected('#calendar-one');
    selected('#calendar-two');


    document.querySelector('#calendar-one .calendar-controls__clear').addEventListener('click', () => {

        var c = new Cal("divCal");
        c.showcurr();

        getId('btnNext').onclick = function () {
            c.nextMonth();
            selected('#calendar-one');
        };
        getId('btnPrev').onclick = function () {
            c.previousMonth();
            selected('#calendar-one');
        };
        selected('#calendar-one');

        if (document.querySelector('.order-btn__date')) {
            document.querySelector('.order-btn__date').innerText = `${day} ${currMonth}`
        }
    })
    document.querySelector('#calendar-two .calendar-controls__clear').addEventListener('click', () => {

        var c2 = new Cal("divCal2");
        c2.showcurr();

        getId('btnNext2').onclick = function () {
            c2.nextMonth();
            selected('#calendar-two');
        };
        getId('btnPrev2').onclick = function () {
            c2.previousMonth();
            selected('#calendar-two');
        };
        selected('#calendar-two');
    })

}

function getId(id) {
    return document.getElementById(id);
}

