## Watch the video!⬇️
[![Watch the video](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/276/696/datas/original.png)](https://www.youtube.com/watch?v=VqelYIgPDbM&t=1s)

## Project Description🚀

Campus Eats is a smart meal-planning app that recommends on-campus restaurants based on a student’s schedule, dietary preferences, and nutritional goals. By analyzing factors like calorie intake, carbs, protein, and cuisine preferences, the app helps students find meals that align with their lifestyle and fit into their schedule. Students can upload their class schedules and get meal options throughout the day in their free time slots.

## How we built it🖥️

We designed Campus Eats with a user-first approach, ensuring it is simple and intuitive to use. The development stack includes:

Frontend: React for a seamless and responsive user interface
Backend: Flask to handle user data and restaurant recommendations
Data Storage & Processing: Google Cloud Console using BigQuerry, Google Storage Bucket, where restaurant menus, user preferences, and nutritional data are stored as well as BigQuerry is used to make the custom database with all the restaurants available on UofA Campus including key metrics like protein, calories, carbs.
Machine Learning: We trained a custom machine learning model (using unsupervised learning) on our custom dataset which is then used to predict all the meals that are similar to the user's preferences (based on macros in meals). We then deployed this unsupervised machine learning model on GCP BigQuerry which is then converted to a micro-service available using an API call.
APIs: Used for fetching real-time menu updates and nutritional information along with the Google Maps API for path optimization. We built our own public accessible API for the machine learning model.

## Features in Action💡

<img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/276/696/datas/original.png" alt="Demo"/>
<img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/276/906/datas/original.png" alt="Demo"/>
<img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/276/909/datas/original.png" alt="Demo"/>
<img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/276/914/datas/original.png" alt="Demo"/>
<img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/276/921/datas/original.png" alt="Demo"/>
<img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/276/918/datas/original.png" alt="Demo"/>
<img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/276/926/datas/original.png" alt="Demo"/>

## Challengers We Ran Into🧗‍♀️

Our biggest challenge was collecting the dataset and cleaning it for use. Building an ML-driven recommendation system on Google Cloud while ensuring real-time processing was a challenge. Integrating multiple APIs for dynamic menu updates and nutritional data required careful optimization. Additionally, making sure the UI remained user-friendly while handling complex data analysis was an important focus. Another significant challenge we faced was the CORS error that occurred when we tried connecting the React app with the Google Cloud Run function.

## What We Learned📚

Through this project, we gained experience in Google Cloud ML deployment, backend development with Flask, and real-time data processing. We also learned how to balance AI-driven recommendations with usability, ensuring an intuitive and smooth experience for students.

## What's Next?🔮
We plan to expand Campus Eats by:

Adding real-time meal availability from restaurants
Including budget-friendly meal options
Implementing a community feature where students can share their favorite meals and dining experiences
Importing the class schedule in different file formats like png, jpeg, pdf, etc.
Exporting our final schedule with the meal plans.
Campus Eats aims to make student life easier by taking the guesswork out of meal planning. With further improvements, we hope to make it an essential tool for every student on campus!

