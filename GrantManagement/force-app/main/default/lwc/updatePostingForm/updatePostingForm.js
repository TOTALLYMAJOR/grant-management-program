import { LightningElement, track, api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

import Contact_OBJECT from '@salesforce/schema/cONTACT';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class UpdatePostingForm extends LightningElement {
    @api recordId;
    @track updateRecord = {};
    @track isLoading = false;
    @track errorMessage = '';

        /**
     * Handles changes to the input fields in the update posting form.
     * Updates the `updateRecord` object with the new field values and clears any existing error message.
     * @param {Event} event - The input change event.
     */
handleInputChange(event) {
        this.updateRecord[event.target.dataset.field] = event.target.value;
        this.errorMessage = ''; // Clear the error message on new input
    }

    handleSubmit() {
        if (!this.updateRecord.UpdateDetails__c) {
            this.errorMessage = 'Update details are required.';
            this.showToast('Error', this.errorMessage, 'error');
            return;
        }

        this.isLoading = true;
        const fields = {...this.updateRecord, RelatedRecordId__c: this.recordId};
        const recordInput = { apiName: CONTACT_OBJECT.objectApiName, fields };

        createRecord(recordInput)
            .then(() => {
                this.showToast('Success', 'Update posted successfully!', 'success');
                this.resetForm();
            })
            .catch(error => {
                this.showToast('Error submitting update', error.body.message, 'error');
            })
            .finally(() => {
                this.isLoading = false; // Ensure loading state is cleared
            });
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
            mode: 'dismissable'
        }));
    }

    /**
     * Resets the form fields to their initial state, clearing any entered data.
     * Also clears any error messages.
     */
    resetForm() {
        // Clear the form
        this.updateRecord = {};
        
        // Clear any error messages
        this.errorMessage = '';
    }

} // End of class UpdatePostingForm

