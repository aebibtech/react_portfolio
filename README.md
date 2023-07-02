# React Portfolio for Starters
This is an app that aims to help beginning developers in creating their portfolio. This project utilizes Node.js, React, Vite, and Tailwind CSS.

## How to use
1. Make sure that you have Node.js installed.
1. Clone this repository.
1. Open the project on your terminal and run `npm install`.
1. Run the project by `npm run dev`.
1. Open `https://localhost:5173` on your browser.
1. Once you have it on your computer, on the `public` folder, open `site.config.json`.
1. Change the values based on your needs.
1. Refresh your browser to see the changes.
1. Deploy to your hosting of choice.

## Config File (public/site.config.json) Parameters
This is a JSON file. Follow JSON conventions to prevent errors.
- `site_name` - This will appear on the header, hero, and the footer.
- `job_title` - You can put here your desired role or your current job title.
- `email` - Your email address. This will be the link at the footer.
- `navlinks` - An array of links that will appear at the header. Each link is represented as an object with a **text** (the text that will appear on screen) and **href** (where will it go).
- `projects` - An array of links that will appear on the "Projects" section. Each project has a name, banner image (optional, black blank image by default), link, and description.
- `contact` - An object containing your social media links. Currently supports GitHub, GitLab, LinkedIn, YouTube, Facebook, Messenger, and Twitter.
- `about` - Information here will appear on the "About" section. Currently has your name, gender, year of birth, location, bio, and picture link.
- `year_created` - This will appear at the footer section.
- `theme` - Your preferred color scheme for the portfolio. Currently supports: `white`, `dark`, `blue`, and `system`

## Contributing
Fork the project and start contributing. Everyone is welcome to improve this project. Looking forward to work with you. 🙏

## Did you find this useful?
[![ko-fi](https://www.ko-fi.com/img/donate_sm.png)](https://ko-fi.com/aebibtech)