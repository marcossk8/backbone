This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Backbone Systems Contacts

Web application to see the list of clients of the Backbone company. New contacts can be added, updated and created.

## Demo

You can view Backbone Systems Contacts Demo [here](https://backbone-lac.vercel.app/)

## Pages 

- Contact list:
  - Route: [hostname]/
  - Description: I get the first 10 contacts from the api and display them in a table. Each row shows the contact data and two buttons to edit and delete that navigate to different pages. It contains a paginated where I get the next or previous page from the api. In the upper left part I place a search engine, in which I can search by the first name and on the right a button to navigate to the create new contact screen.
- New contact:
  - Route: [hostname]/create
  - Description: Create a screen in which you have a form, use the react-hook-form library, which all fields are required and have error handling and validations. After completing the data, the save button is enabled to add it to the api and if the contact is correct, I navigate to the main screen. Create a component to handle the successes and errors that the api might return.
- Delete contact:
  - Route: [hostname]/delete/[id]
  - Description: Create a screen in which I get the client's id, it has a form, in which I cannot edit the data. Then place a button to delete by calling the api and if the contact is correct I navigate to the main screen. I use the same component to handle errors or success.
- Update contact:
  - Route: [hostname]/update/[id]
  - Description: I created a screen in which I get the client's id and all the information about it, it has a form, in which I can edit the data. Then place a button to modify the contact by calling the api and if the contact is correct I navigate to the main screen. I use the same component to handle errors or success.

On the delete and update screen I create an html file for each contact id, using the next js features.
For a better optimization of next js resources I recommend adapting the backend to get all the contacts to generate their pre-rendered html for each one.
## Documentation

- [Backend endpoints documentation](https://bkbnchallenge.herokuapp.com/documentation/v1.0.0#/Contact)
- Main Libraries & frameworks:
    - Next js
    - Typescript
    - [React redux](https://react-redux.js.org/) / [React redux with typescript](https://react-redux.js.org/using-react-redux/usage-with-typescript)
    - [Mui (Material UI)](https://mui.com/)
    - Axios
    - [React Hooks Form](https://react-hook-form.com/)



## Getting Started

First, after cloning the repository run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Authors

- Marcos Almendros ([portfolio](https://webmarcosalmendros.firebaseapp.com/))
