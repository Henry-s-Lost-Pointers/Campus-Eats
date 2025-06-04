[![Watch the video](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/276/696/datas/original.png)](https://www.youtube.com/watch?v=VqelYIgPDbM&t=1s)

## Project Description

Campus Eats is a smart meal-planning app that recommends on-campus restaurants based on a student’s schedule, dietary preferences, and nutritional goals. By analyzing factors like calorie intake, carbs, protein, and cuisine preferences, the app helps students find meals that align with their lifestyle and fit into their schedule. Students can upload their class schedules and get meal options throughout the day in their free time slots.

## How we built it

We designed Campus Eats with a user-first approach, ensuring it is simple and intuitive to use. The development stack includes:

Frontend: React for a seamless and responsive user interface

Backend: Flask to handle user data and restaurant recommendations

Data Storage & Processing: Google Cloud Console using BigQuerry, Google Storage Bucket, where restaurant menus, user preferences, and nutritional data are stored as well as BigQuerry is used to make the custom database with all the restaurants available on UofA Campus including key metrics like protein, calories, carbs.

Machine Learning: We trained a custom machine learning model (using unsupervised learning) on our custom dataset which is then used to predict all the meals that are similar to the user's preferences (based on macros in meals). We then deployed this unsupervised machine learning model on GCP BigQuerry which is then converted to a micro-service available using an API call.

APIs: Used for fetching real-time menu updates and nutritional information along with the Google Maps API for path optimization. We built our own public accessible API for the machine learning model.
