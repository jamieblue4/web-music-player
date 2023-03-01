# web-music-player
Spotify Clone

I like to listen to music so I thought it would be a fun project to build a Spotify clone using React. Most of the application is front end, but there are still some back end elements like user authentication. The app is designed to take the user's Spotify login details (the actual info one would use to sign into the official application), log them in, and show them a clone version of the desktop app where they have access to their Discover Weekly playlist. Beyond that, I attempted to make the UI as close to the original as I could using CSS for styling as well as Material UI for the icons. The app is hosted on Google Firebase to take care of the more involved back-end processes. To fetch the user's data, my clone app uses Spotify's offical API.

For this demonstration, I'm using my own account. When the user first runs the app in the terminal (because it's made with React) this is the page they see in their browser.

<img width="1439" alt="Screenshot 2023-03-01 at 5 01 42 PM" src="https://user-images.githubusercontent.com/110658282/222274978-d6be4d40-b18a-4e5d-a1f3-6ddb354dbbb6.png">

Once they input all of their credentials, it prompts them to allow my third-party app access to their Spotify account (since we're getting the data from Spotify's API)

<img width="552" alt="Screenshot 2023-03-01 at 5 03 25 PM" src="https://user-images.githubusercontent.com/110658282/222275433-6889f82d-5fe3-4a03-934c-37ef2caca5ce.png">

Once the user accepts the terms, they're brought to the application itself.

<img width="1433" alt="Screenshot 2023-03-01 at 5 05 08 PM" src="https://user-images.githubusercontent.com/110658282/222275838-3928f002-9dea-411e-bf9f-270f303a648e.png">

The player shows on the bottom and the sidebar shows the user's Spotify playlists. And of course, the Discover Weekly playlist is shown in real time.

For now this app only displays that data, but in the future I plan to make the music player functional and perhaps add a search element in order to make it more involved.
