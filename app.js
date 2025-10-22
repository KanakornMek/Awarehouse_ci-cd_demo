/**
 * Awarehouse Club - Main Application JavaScript
 * This file contains the main functionality for the Awarehouse club website.
 */

/**
 * Returns the welcome message for the Awarehouse club
 * @returns {string} The welcome message
 */
function getWelcomeMessage() {
    return "Welcome use!";
}

/**
 * Handles the click event for the "Join our Community" button
 */
function handleJoinClick() {
    const message = getWelcomeMessage();
    alert(`${message}\n\nWe're excited to have you join our community!`);
}

/**
 * Initializes the application when the DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Awarehouse website loaded successfully');

    // You can add more initialization code here
    // For example: setting up event listeners, fetching data, etc.
});

// Export the function for testing purposes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getWelcomeMessage
    };
}