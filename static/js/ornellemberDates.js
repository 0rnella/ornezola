const ornellember = ornellemberBundle.default;

const datesToConvert = document.querySelectorAll('[data-ornellember]');

Array.from(datesToConvert).forEach(time => {
    if (!time.dateTime) {
        const today = new Date();
        time.dateTime = today.toLocaleDateString();
    }

    const date = new Date(time.dateTime);
    time.innerHTML = ornellember(date).format();
})