function UpdateTime() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const now = new Date();

    // Get month, day, hour, and minute
    const month = months[now.getMonth()];
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();

    // Format hour and minute with AM/PM
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = PadZero(hour % 12 === 0 ? 12 : hour % 12);
    const formattedMinute = minute;

    // Construct the formatted string
    const formattedDateTime =  month + ' ' + day + ' ' + formattedHour + ':' + formattedMinute + ' ' + ampm;

    document.getElementsByClassName("main-time")[0].innerText = formattedDateTime;
}

function PadZero(number) {
    return (number < 10 ? "0" : "") + number;
}

UpdateTime();

setInterval(UpdateTime, 1000);