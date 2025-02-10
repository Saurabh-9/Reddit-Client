# Reddit Client

## Project Overview

The Reddit Client is a browser-based application designed to provide an engaging and dynamic way to explore Reddit. Users can add customizable lanes, each representing a different subreddit, and view real-time posts including titles, authors, and vote counts. The client seamlessly integrates with the Reddit JSON API to fetch and display subreddit data.

This project demonstrates advanced frontend development skills, including API integration, asynchronous programming, and state management.
<img width="1430" alt="image" src="https://github.com/user-attachments/assets/607a2972-68fc-4e5e-92b4-8403d57f74b6" />


## Features

Customizable Subreddit Lanes: Add multiple lanes by entering subreddit names.

Real-Time Data Fetching: Display up-to-date posts from various subreddits.

Error Handling: Show error messages for invalid subreddit names or API issues.

Loading States: Smooth user experience with loading indicators.

Local Storage Support: Save and restore user-customized subreddit lanes.

Responsive Design: Dynamic layout for desktop and mobile devices.

## Tech Stack

Frontend: HTML, CSS, JavaScript

API: Reddit JSON API (https://www.reddit.com/r/{subreddit}.json)

Key Concepts:

DOM Manipulation

Asynchronous Programming (using async/await)

API Integration

State Management

## Application Usage

Add Subreddit Lanes:

Enter a subreddit name in the input field and click "Add Lane."

If the subreddit is valid, a new lane will appear displaying its posts.

View Posts:

Each lane shows the top posts, including the post title, author, and vote count.

Error Handling:

If a subreddit is invalid or an API error occurs, a user-friendly error message is displayed.

Persistent State:

Lanes are saved using local storage and restored on page reload.


## Future Enhancements

Post Sorting: Allow users to sort posts by upvotes or creation time.

Comments Display: Fetch and display comments for each post.

User Authentication: Support user login to view personalized feeds.

Dark Mode: Provide a dark theme option.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.
