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

       let hoursLeft = '';
       if (hours < 10) {
           hoursLeft = '0' + hours;
       }else if (hours >= 10) {
           hoursLeft = hours;
       }
       let minsLeft = '';
       if (minutes < 10) {
           minsLeft = '0' + minutes;
       }else if (minutes >= 10) {
           minsLeft = minutes;
       }
       let secLeft = '';
       if (seconds < 10) {
           secLeft = '0' + seconds;
       }else if (seconds >= 10) {
           secLeft = seconds;
       }
    
        const dateLeft = monthsLeft + ' ' + daysLeft;
        const timeLeft = hoursLeft + ':' + minsLeft + ':' + secLeft;    

        dateContainer.innerHTML = dateLeft;
        timeContainer.innerHTML = timeLeft;
    }, 1000)
});