const $ = (selector) => document.querySelector(selector);

const hour = $('.hour');
const dot = $('.dot');
const min = $('.min');
const week = $('.week');
const locationInfo = $('.location-info'); 

let showDot = true;

function update() {
    showDot = !showDot;
    const now = new Date();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    const options = { weekday: 'short' };
    const localeTime = new Date(now.toLocaleString("en-US", { timeZone }));

    dot.classList.toggle('invisible', showDot);
    hour.textContent = String(localeTime.getHours()).padStart(2, '0');
    min.textContent = String(localeTime.getMinutes()).padStart(2, '0');

    Array.from(week.children).forEach(ele => ele.classList.remove('active'));
    week.children[localeTime.getDay()].classList.add('active');

    locationInfo.textContent = `${timeZone} [GMT ${localeTime.getTimezoneOffset() / -60}]`;
}

setInterval(update, 500);
update();
