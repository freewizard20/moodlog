# Mood Log

[![Netlify Status](https://api.netlify.com/api/v1/badges/e75cf473-df06-4094-8497-fb90aa2f8f73/deploy-status)](https://app.netlify.com/sites/mood-fw/deploys)

## What is it?

- A basic daily(or more frequent) log on today's mood and status. It's mainly used for self-feedback on negative mood.

## Technology stack

### Front-end

- React
- React-router
- Redux
- Material-ui
- universal cookies
- axios
- react-window
- firbase
- netlify CI/CD

### Back-end

- Nginx
- Express(cors, body-parser)
- MongoDB
- Mongoose
- Firebase FireStore
- bcrypt

## Architecture

- Firebase for Mood Information Storage
- MongoDB for authentication
- GCP Compute Engine for auth server
- Front end served by Netlify(automated deploy & continuous integration)
