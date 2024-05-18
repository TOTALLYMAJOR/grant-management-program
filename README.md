# Grant Application System for Kids

This project is designed to create a grant application system for kids, restricted to Pennsylvania residents, using Salesforce Nonprofit Cloud with Grants Management. The system will include a Lightning Web Component (LWC) application form, automated notifications, secure data handling compliant with COPPA, batch processing, and progress tracking.

## Table of Contents

- [Background](#background)
- [Requirements](#requirements)
- [Architecture](#architecture)
- [Implementation](#implementation)
- [Milestones](#milestones)
- [Gathering Results](#gathering-results)
- [License](#license)

## Background

The purpose of this project is to create a grant application platform for kids who wish to apply for funding to support their lemonade stands. This platform will ensure compliance with regulatory rules and provide a seamless experience for applicants and administrators.

## Requirements

1. <span style="color:blue">A form for kids to apply for grants, restricted to Pennsylvania residents, created using Lightning Web Components (LWC).</span>
2. <span style="color:blue">Using Salesforce Nonprofit Cloud with Grants Management.</span>
3. <span style="color:blue">Automated notifications sent to kids upon grant approval.</span>
4. <span style="color:blue">Compliance with any regulatory rules applicable to online interactions with children (e.g., COPPA in the U.S.).</span>
5. <span style="color:blue">A batch class scheduled in Salesforce to update the status of over 200 contacts/accounts at the end of the summer program to reflect completion.</span>
6. <span style="color:blue">Application mapping to specific fund.</span>
7. <span style="color:blue">A login system for kids to post updates about their lemonade stands, integrated into Salesforce, with enhanced security measures to protect children's privacy and data.</span>
8. <span style="color:blue">A grant progress component to track and display the status of grant usage and project milestones within Salesforce.</span>
9. <span style="color:blue">A dashboard within Salesforce for Sally and Sam to monitor the status and success of funded lemonade stands.</span>
10. <span style="color:blue">Feedback mechanism for kids to provide updates and receive guidance, fully integrated into the Salesforce system, ensuring secure and compliant data handling.</span>

## Architecture

### Component Diagram

![Component Diagram](path/to/component-diagram.png)

The system is built using Salesforce Nonprofit Cloud and includes the following components:
- **LWC Application Form**: Captures application data, performs inline validation, and handles secure data submission.
- **Grant Management Integration**: Links application data to the Grants Management module.
- **Automated Notifications**: Sends status updates to applicants.
- **Batch Apex Class**: Updates contact/account status at the end of the summer program.
- **Security and Compliance Mechanisms**: Ensures secure data handling and compliance with COPPA.
- **Feedback and Progress Tracking**: Allows kids to submit updates and track grant usage.
- **Admin Dashboard**: Provides real-time monitoring and analytics for administrators.

## Implementation

1. **Setup Salesforce Environment**
   - Configure Salesforce Nonprofit Cloud.
   - Install and configure the Grants Management module.

2. **Develop LWC Application Form**
   - Create the LWC form for grant applications.
   - Implement JavaScript validation for eligibility checks.
   - Develop Apex controllers for backend processing and data submission.

3. **Integrate Grant Management**
   - Link the application form data to the Grants Management module.
   - Ensure proper mapping of applications to specific funds.

4. **Automate Notifications**
   - Use Salesforce Process Builder or Flow to set up automated notifications for application status updates.

5. **Implement Batch Apex Class**
   - Develop a batch Apex class to update contact/account status at the end of the summer program.

6. **Enhance Security and Compliance**
   - Implement field-level security and encrypted sessions.
   - Set up secure authentication methods and compliance checks.

7. **Build Feedback and Progress Tracking Components**
   - Create components for feedback submission and progress tracking.
   - Integrate these components into the Salesforce environment.

8. **Develop Admin Dashboard**
   - Use Salesforce’s analytics tools to create a dashboard for monitoring grant status and success.

## Milestones

1. **Initial Setup and Configuration**
   - Complete Salesforce environment setup and configuration.

2. **LWC Form Development**
   - Develop and test the LWC application form.

3. **Integration and Automation**
   - Integrate with the Grants Management module and automate notifications.

4. **Security Implementation**
   - Implement security and compliance measures.

5. **Feedback and Progress Tracking**
   - Develop and test feedback and progress tracking components.

6. **Admin Dashboard**
   - Create and refine the admin dashboard.

## Gathering Results

After deployment, the system will be evaluated based on:
- Compliance with requirements.
- User feedback from applicants and administrators.
- Performance metrics such as application processing time and notification accuracy.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

