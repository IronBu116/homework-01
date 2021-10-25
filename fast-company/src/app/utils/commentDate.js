function renderDate(date) {
    date = Number(date);
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();
    const day = new Date(date).getDate();
    const hours = new Date(date).getHours();
    const min = new Date(date).getMinutes();
    const difference = Date.now() - date;

    const months = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря"
    ];

    function renderBelowTen(number) {
        if (number < 10) {
            return `0${number}`;
        } else {
            return `${number}`;
        }
    }

    if (difference < 6e4) {
        return "1 минуту назад";
    } else if (difference >= 6e4 && difference < 3e5) {
        return "5 минут назад";
    } else if (difference >= 3e5 && difference < 6e5) {
        return "10 минут назад";
    } else if (difference >= 6e5 && difference < 1.8e6) {
        return "30 минут назад";
    } else if (difference >= 1.8e6 && difference < 8.64e7) {
        return `в ${renderBelowTen(hours)}:${renderBelowTen(min)}`;
    } else if (difference >= 8.64e7 && difference < 3.154e10) {
        return `${day} ${months[month]}`;
    } else {
        return `${day} ${months[month]} ${year} года`;
    }
}

export default renderDate;
