
#  Happy to see you there, recruiter! 👋🏻
## TL;DR;
I prefer pair programming for assessing developer skills over time-consuming recruitment tasks. This project is my response to a most typical recruitment task, showcasing my frontend skills.

## What's going on with this repo
To be honest with you, **I am a strong advocate for pair programming sessions as a more effective way to assess developer skills, as opposed to time-consuming and often unproductive recruitment tasks.** Having completed numerous recru tasks throughout my career, I've learned valuable lessons from some, while many ended up being a significant time sink without even minimal feedback.  
  
In this repo, I meet your expectations and aim to demonstrate my skills and knowledge in software engineering by presenting a solution to a typical recruitment task. Given the task of creating multiple pages, fetching data from an API, and making the application dynamic, **this project reflects my current software development capabilities when given a few days to complete a task.**

## Disclaimer: I'm pretty good at layouts and CSS
But not here. This project focused on delivering logic, not fancy styling. For fancy styling look for [Netguru website](https://www.netguru.com/) - that's the best showcase of my CSS (Sass) abilities. 

## What I could improve in this solution
There are always things to do better or improve. It's the same with this project - list of these things is in [Issues](https://github.com/kacperwalter/typical-recru-project/issues) tab.

## Recruitment project requirements
Create an application for exploring information about the Star Wars universe.
1.  The main screen of the app should display characters from the Star Wars universe sorted alphabetically (A-Z).
2.  For each character, the following information should be presented:
    -   Name/Full Name
    -   Avatar
    -   Clicking on a character should lead to a detailed screen for that character.
3.  Information presented on the character detail screen:
    -   Avatar
    -   Full Name
    -   Planet of Origin (or any planet the character is associated with)
    -   Any vehicle or vehicles connected to the character
    -   Race
    -   Clicking on the planet from the character detail screen should redirect the user to the selected planet's detail screen.
4.  The planet detail screen should include:
    -   Name
    -   Population count
    -   Characters connected to the planet (displaying their full names is sufficient)
    -   Picture
    -   Clicking on a character's name from the planet detail screen should redirect to the character detail screen.
5.  When on the character detail screen, clicking on a vehicle should redirect to the vehicle detail screen.
6.  The vehicle detail screen should present:
    -   Name
    -   Type (e.g., flying, wheeled, walking)
    -   Characters connected to the vehicle (displaying their full names is enough)
    -   Picture
7.  In general, when on any detail screen, information like character, vehicle, or planet should always link to another appropriate detail screen.
8.  Users should have the option to enter the app directly on a specific detail screen.
9.  The application should always display a left-side panel from which users can navigate to one of the following lists:
    -   Characters (displayed by default)
    -   Vehicles
    -   Planets
10.  Each list should present the name and picture, following the style of the main character list.
11.  Each list should allow users to enter the detail screen for its items.

### Technical requirements
-   Suggest a design and user interface for the application.
-   Implement a responsive web design (RWD) mode.
-   For styling, feel free to use your preferred approach; however, avoid using libraries like Bootstrap or Tailwind.
-   Add unit tests to ensure the application's functionality.

### Additional information:
-   Use the [https://swapi.dev/](https://swapi.dev/) API for data
-   If data cannot be fetched from the API, create a temporary data solution.
-   Focus on the architecture of the solution rather than on fancy styling or design.
-   Prepare the solution as if it will be further developed into a full-scale project.

## You can preview this app
But not yet :D gimme one second 

## How to run the project locally
```bash
npm run dev
# or
yarn dev
# or
<whatever package runner you want>
```
