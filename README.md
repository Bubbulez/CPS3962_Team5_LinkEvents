# CPS3962_Team5_LinkEvents

# View Website
- https://cps-3962-team5-link-events.vercel.app/

# Best Practices
- To prevent overriding someone's work, make your own branch before pushing to Github
- When you're ready to upload your work, do the following steps:
    - git checkout -b new-branch-name
        - creates and transfers to the new branch
    - git add .
        - adds all of your updated work to the new branch
    - git commit -m "commit message"
        - please make informative commit messages so we can track our updates
    - git push -u origin new-branch-name
        - this is the final push to github
- Then, we can merge branches and deploy as a group!

# Pages
- So far the website has a homepage and 3 basic pages left to implement:
    - events
    - login
    - membership
- Do not worry about the backend and full functionality yet, just the visuals

- To edit the page, go into the respective folder and edit the page.tsx file
    - Look into the basics of React Components and HTML

# CSS
- Each page is connected to the styles/main.css file for consistency
- Each page also has its own css stylesheet linked to it for individual styling
    - Ex: events/page.tsx goes with styles/events.css

# Global Components
- The globalComponents folder consists of React components that can be used on any page
- These components create consistency and prevent code reuse
- So far, there is only one global component: BigButton
    - To use BigButton:
        - First, import it at the top of your page:
            - import { BigButton } from "./globalComponents/BigButton";
        - Then to use it throughout the page, copy/paste and edit the example component:

```
<BigButton
    /* What you want the button to say */
    content={"View All Events"}

    /* Where you want the button to go */
    /* Forward slash + name of the folder containing the page.tsx file */
    link={"/events"} 
/>
```