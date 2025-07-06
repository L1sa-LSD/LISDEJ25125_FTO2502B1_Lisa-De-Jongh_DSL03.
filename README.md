# 🎙️ React Podcast Landing Page

This project is a responsive landing page for a podcast discovery application, built entirely with React. The application fetches a list of podcasts from an external API and displays them in a clean, modern grid layout. It is designed to be fast, user-friendly, and fully responsive across all common screen sizes.


## ✨ Features

*   **Dynamic Data Fetching**: Fetches a list of real podcasts from the [Podcast API](https://podcast-api.netlify.app/) on page load.
*   **Loading & Error States**: Displays a clear "Loading..." message while fetching data and shows a user-friendly error message if the API fails.
*   **Responsive Grid Layout**: The podcast grid automatically adjusts to look great on mobile, tablet, and desktop screens using CSS Grid.
*   **Reusable Components**: Built with modular and reusable React components, primarily a `PodcastCard` component that can be used anywhere in the app.
*   **Detailed Previews**: Each podcast card displays key information:
    *   Podcast Cover Image
    *   Title
    *   Number of Seasons
    *   Associated Genre Names
    *   Last Updated Date (formatted for human readability, e.g., "September 15, 2022").

---

## 🛠️ Technologies Used

*   **React**: Core functionality is built with React, including:
    *   Functional Components
    *   React Hooks (`useState`, `useEffect`)
*   **JavaScript (ES6+)**: Used for application logic and data handling.
*   **Fetch API**: Native browser API for making network requests to the podcast API.
*   **CSS3**: For styling and responsive design, utilizing:
    *   CSS Grid for the main layout.
    *   Flexbox for component-level alignment.
*   **date-fns**: A lightweight library for formatting the "last updated" dates.
*   **HTML5**: For the basic structure of the application.

---


