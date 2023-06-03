const registrationTypeSelect = document.getElementById('registration-type');
const personalHandoverFields = document.getElementById('personal-handover-fields');
const pickupFields = document.getElementById('pickup-fields');

registrationTypeSelect.addEventListener('change', function() {
    if (this.value === 'persönliche-übergabe') {
        personalHandoverFields.style.display = 'block';
        pickupFields.style.display = 'none';
    } else if (this.value === 'abholung') {
        personalHandoverFields.style.display = 'none';
        pickupFields.style.display = 'block';
    }
});