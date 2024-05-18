# Grant Application System for Kids

## Overview

This repository contains the implementation of a grant application system designed for kids in Pennsylvania. The system leverages Salesforce Nonprofit Cloud with Grants Management, ensuring compliance with COPPA and other relevant regulations. The project includes a Lightning Web Component (LWC) form for applications, automated notifications, progress tracking, and a feedback mechanism, all integrated within Salesforce.

## Features

- LWC application form restricted to Pennsylvania residents
- Integration with Salesforce Nonprofit Cloud and Grants Management
- Automated notifications for grant approval
- Compliance with COPPA and relevant regulations
- Batch Apex class for updating contact/account status
- Application mapping to specific funds
- Secure login system for kids to post updates about their lemonade stands
- Grant progress component to track and display project milestones
- Admin dashboard for monitoring funded lemonade stands

## Requirements

- Salesforce Nonprofit Cloud
- Salesforce Grants Management
- Salesforce DX
- Node.js (for LWC development)

## Setup

### Prerequisites

1. **Salesforce DX**: Ensure you have Salesforce DX installed. You can follow the [official guide](https://developer.salesforce.com/tools/sfdxcli) for installation.
2. **Node.js**: Make sure Node.js is installed on your system. You can download it from [here](https://nodejs.org/).

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/grant-application-system.git
   cd grant-application-system
