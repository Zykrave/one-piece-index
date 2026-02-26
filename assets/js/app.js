'use strict';

// Import required modules
import { initUI } from './ui.js';
import { fetchData } from './api.js';

// Main application function
const main = async () => {
    try {
        // Initialize the UI
        initUI();

        // Fetch data from API
        const data = await fetchData();

        // Process and display the data
        console.log(data);
    } catch (error) {
        console.error('Error during application initialization:', error);
    }
};

// Execute the main function
main();