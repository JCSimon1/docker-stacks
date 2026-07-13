export function formatDuration(start) {

    if (!start) {
        return "";
    }

    const seconds = Math.floor(
        (Date.now() - new Date(start)) / 1000
    );

    const minutes = Math.floor(seconds / 60);

    if (minutes < 1) {
        return "seit weniger als einer Minute";
    }

    if (minutes < 60) {
        return `seit ${minutes} Min.`;
    }

    const hours = Math.floor(minutes / 60);

    const remainingMinutes = minutes % 60;

    return `seit ${hours} Std. ${remainingMinutes} Min.`;

}

export function startRelativeTimer(selector, startTime) {

    if (!startTime) {
        return;
    }

    const element = document.querySelector(selector);

    if (!element) {
        return;
    }

    const update = () => {
        element.textContent = formatDuration(startTime);
    };

    update();

    setInterval(update, 1000);
}