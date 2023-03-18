
# Fulhaus Shopping App

This project is a front-end technical assessment for Fulhaus. The objective of this assessment is to create a web application that displays a product catalog and allows users to add and remove items to their cart. The application must be responsive, allowing for seamless viewing from desktop to mobile.

## Requirements

The assessment requirements:

- Create a layout and a cart drawer based on the design provided
- Display the product catalog using the API endpoint provided.
- Allow users to add and remove items from their cart.
- Calculate the cart total using the retail price.

## Technologies and Libraries

- React.js
- Vite
- Axios
- Tanstack/react-query
- Chakra UI
- Context API
- React Slick Carousel
- SASS/SCSS
- Javascript
- HTML
- CSS

## Getting Started

To get started with this project, follow these steps:

- Clone this repository to your local machine.
- `cd` into the project directory `fulhaus-test-FE`
- Clone this repository to your local machine
`git@github.com:NavGithub15/fulhaus-test-FE.git`
- Install the necessary dependencies using `npm install`.
- Start the development server using `npm run dev`.
### In case CORS error occurs when using the API endpoint 
#### This CORS Anywhere only be used for development purposes to test the requests
- `const PROXY_URL = "https://cors-anywhere.herokuapp.com/";`
- `const API_URL = "https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD";`
- `const url = PROXY_URL + API_URL;`


## Future Improvements

There are several areas where this application can be improved in the future, such as:

### Pagination Functionality:
- Implement pagination to display a limited number of products per page to improve the page load speed.
- Add buttons to allow the user to navigate through the pages of products.
- Display the total number of products and the current page number to provide context to the user.
### Sorting Functionality:
- Implement a sorting functionality that allows the user to sort products by price, name, or rating.
- Add buttons to allow the user to toggle between ascending and descending order.
- Highlight the current sort order to provide context to the user.
### Search Functionality:
- Add a search bar to allow the user to search for specific products by name or description.
- Implement auto-suggestion functionality to display relevant products as the user types.
- Highlight the search term in the product name and description to provide context to the user.

### Unit Testing:
- Implement unit tests for each component to ensure that they are rendering correctly and functioning as expected.
- Use a testing library such as Jest or React Testing Library to write and run tests.

### Error Handling:
- Configure the cors error and better error handling
- Use a global error boundary to catch and handle errors across the entire application.


## Conclusion
This front-end technical assessment for Fulhaus demonstrates the ability to create a responsive web application that meets the requirements of the project. By following the instructions provided and using the technologies listed, a functional and visually appealing application was developed.