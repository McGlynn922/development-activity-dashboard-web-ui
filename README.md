# Development Activity Dashboard

This React application allows users to view user Commits, Pull Requests, and Pull Requests Comment metrics for a GitHub repository.

## Prerequisites

Ensure you have the latest version of Node.js installed
Ensure the development-activity-dashboard is running

## Running the application

1. `npm install` to install the project dependencies
2. `npm run dev` to start the service
3. Navigate to http://localhost:5173/ in your browser

## Using the application

1. Enter the GitHub Repository URL
2. Enter the date you want data from
3. Enter the date you want data until
4. Select either 'Commits', 'Pull Requests', 'Pull Request Comments'
    - You can view all three at the same time for any repository

## Additional Notes

This application is in the alpha phase and therefore the following limitations apply:

1. There is no validation on the GitHub URL
2. The GitHub URL must follow the 'API' format, e.g. https://api.github.com/repos/spring-projects/spring-framework
3. There is no validation on date input fields
4. The buttons are still clickable when the necessary details have not been populated by the user

## Titania Reviewer Notes

This code works - but it is not as tidy as it could/should be due to time limitations.

Areas for improvement:

1. 95% of the logic is contained within App.tsx - this should be split across different files
2. There is a lot of code duplication, namely the 'onClick' events for each button - ths should be refactored to reduce duplication
3. The styling is inconsistent, Bootstrap CSS was added to style the tables. It may have overridden some original styling. There may be CSS that is not used at all. This should be removed.
4. There are no tests to verify the functionality. These should be added.
5. The data in the tables cannot be sorted. It would be better from a UX point of view to be able to order by highest / lowest.
6. Exception handling and logging could be improved.
7. Dates are required, they should be optional.