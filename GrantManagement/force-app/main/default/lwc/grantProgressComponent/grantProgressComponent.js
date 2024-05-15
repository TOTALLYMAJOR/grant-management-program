import { LightningElement, api, track, wire } from 'lwc';
import getGrantProgress from '@salesforce/apex/GrantProgressController.getGrantProgress';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class GrantProgressComponent extends LightningElement {
    @api recordId;
    @track grantProgressSteps = [];
    @track progressValue = 0;
    @track isLoading = true; // Track loading state

    // Wire service to get grant progress from Apex controller
    @wire(getGrantProgress, { grantId: '$recordId' })
    wiredGrantProgress({ error, data }) {
        this.isLoading = false; // Update loading state
        if (data) {
            this.grantProgressSteps = data;
            this.calculateProgressValue();
        } else if (error) {
            this.handleError(error); // Handle errors properly
        }
    }

    // Calculate the average completion percentage
    calculateProgressValue() {
        let totalPercentage = 0;
        let count = this.grantProgressSteps.length;
        if (count > 0) {
            this.grantProgressSteps.forEach(step => {
                totalPercentage += step.CompletionPercentage__c;
            });
            this.progressValue = totalPercentage / count; // Avoid division by zero
        } else {
            this.progressValue = 0; // Set progress to 0 if no steps are available
        }
    }

    // Handle errors and display a user-friendly message
    handleError(error) {
        this.dispatchEvent(new ShowToastEvent({
            title: 'Error loading grant progress',
            message: 'Unable to fetch grant progress data. Please try again later.',
            variant: 'error',
            mode: 'dismissable'
        }));
        console.error('Error fetching grant progress:', error); // Also log to the console for debugging
    }
}
