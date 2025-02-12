document.addEventListener('DOMContentLoaded', () => {
    const cantoneseInput = document.getElementById('cantoneseInput');
    const jyutpingOutput = document.getElementById('jyutpingOutput');
    const ipaOutput = document.getElementById('ipaOutput');

    cantoneseInput.addEventListener('input', () => {
        jyutpingOutput.value = ToJyutping.getJyutpingText(cantoneseInput.value);
        ipaOutput.value = ToJyutping.getIPAText(cantoneseInput.value);
    });
});
