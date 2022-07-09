const ornellember = ornellemberBundle.default;

const dates = document.getElementsByTagName('time');

const formatApproximateOrnellemberDate = (ornellemberDate) => {
    const { month, year } = ornellemberDate;
    return `~ ${month} ${year}`;
};

const formatApproximateGregorianDate = (date) => {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    return `~ ${month}/${year}`;

};

const formatOrnellemberDate = ({date, isApproximate}) => {
    const ornellemberDate = ornellember(date);
    return isApproximate 
        ? formatApproximateOrnellemberDate(date) 
        : ornellemberDate.format();
};

const formatGregorianDate = ({date, isApproximate}) => {
    return isApproximate
        ? formatApproximateGregorianDate(date) 
        : date.toLocaleDateString();
};

const formatDate = ({date, isOrnellember, isApproximate}) => {
    return isOrnellember
        ? formatOrnellemberDate({date, isApproximate}) 
        : formatGregorianDate({date, isApproximate});

};

Array.from(dates).forEach(time => {
    // if there is no date, set it as today
    if (!time.dateTime) {
        const today = new Date();
        time.dateTime = today.toLocaleDateString();
    }

    const date = new Date(time.dateTime);
    const isOrnellember = time.getAttribute('data-ornellember') != null;
    const isApproximate = time.getAttribute('data-date-approximate') != null;

    const result = formatDate({ date, isOrnellember, isApproximate });
    time.innerHTML = result;
});