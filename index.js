document.addEventListener('DOMContentLoaded', () => {
    const weddingDate = moment('2022-09-08 15:00');
    const dateContainer = document.querySelector('.countdown__date');
    const timeContainer = document.querySelector('.countdown__time');

    setInterval(() => {
        const now = moment();
    
        const dateDiff = moment.duration(weddingDate.diff(now))
        
        const months = dateDiff.months();
        const days = dateDiff.days();
        const hours = dateDiff.hours();
        const minutes = dateDiff.minutes();
        const seconds = dateDiff.seconds();


    
        let monthsLeft = '';
        if (months === 1) {
            monthsLeft = '1 month';
        } else if (months > 1) {
            monthsLeft = months + ' months';
        }
    
        let daysLeft = '';
        if (days === 1) {
            daysLeft = '1 day';
        } else if (days > 1) {
            daysLeft = days + ' days';
        }
    
        const dateLeft = monthsLeft + ' ' + daysLeft;
        const timeLeft = hours + ':' + minutes + ':' + seconds;    

        dateContainer.innerHTML = dateLeft;
        timeContainer.innerHTML = timeLeft;
    }, 1000)
});