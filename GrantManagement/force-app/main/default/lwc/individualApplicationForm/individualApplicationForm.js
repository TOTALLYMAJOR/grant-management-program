import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import INDIVIDUAL_APPLICATION_OBJECT from '@salesforce/schema/IndividualApplication';

export default class IndividualApplicationForm extends LightningElement {
    @track applicationRecord = {};

    handleInputChange(event) {
        const field = event.target.dataset.field;
        this.applicationRecord[field] = field === "ParentalConsent__c" ? event.target.checked : event.target.value;
    }

    handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        this.validateAndSubmit();
    }

    validateAndSubmit() {
        const allValid = [...this.template.querySelectorAll('lightning-input')]
            .reduce((validSoFar, inputCmp) => {
                inputCmp.reportValidity();
                return validSoFar && inputCmp.checkValidity();
            }, true);

        if (!allValid) {
            this.dispatchEvent(new ShowToastEvent({
                title: 'Validation Error',
                message: 'Please check your input and try again.',
                variant: 'error'
            }));
            return;
        }

        // Include ZIP code validation before attempting record creation
        if (!this.validateZIPCode(this.applicationRecord.ZipCode__c)) {
            this.dispatchEvent(new ShowToastEvent({
                title: 'Validation Error',
                message: 'Invalid ZIP Code format.',
                variant: 'error'
            }));
            return;
        }

        // Create the recordInput for saving the record
        const recordInput = { apiName: INDIVIDUAL_APPLICATION_OBJECT.objectApiName, fields: this.applicationRecord };

        createRecord(recordInput)
            .then(application => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Success',
                    message: 'Application submitted successfully!',
                    variant: 'success'
                }));
                // Reset form or redirect user
                this.applicationRecord = {}; // Optional: Reset the form
            })
            .catch(error => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error'
                }));
            });
    }

    validateZIPCode(zip) {
        return /^\d{5}(-\d{4})?$/.test(zip);
    }
}
