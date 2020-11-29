# UI Luxury Auto Store

![auto_store_ss](https://user-images.githubusercontent.com/20383602/100534292-3616e100-31db-11eb-9a32-796e669a8076.jpg)

This app has been deployed to an actual website here: [Heroku](https://aqueous-chamber-10224.herokuapp.com/)

## About

This react based website emulates a car store. Users can
browse through a list of available cars and add them to
their cart.

The website is completely dynamic. Adding, removing, and filtering can be done in real-time and there is no need to refresh the page.

## Features

- Ability to add to shopping cart
- Ability to remove from shopping cart
- Ability to increment or decrement the number of instances
  of an item in the user's cart

## Application Architecture

Please take note of the following components and hierarchy

```
src/
  | - index.js [Entry point into the app]
  | - App.js   [Main Component]
          (Also holds the entire state of the application like
          cars, whether filtering is on or not, etc)
  | - layout/
    | - Header.jsx [This wraps the entire Header which is the title]
  | - assets/
    | - carList.js [This holds a single array with all necessary data
                    fields of all the cars, which can be imported
                    easily]
  | - components/
    | - CarList.jsx [Renders the prop cars in the form of a BootStrap
                     Row]
    | - Car.jsx [This handles the functionality of adding to the cart
                 and displaying each individual car card]
    | - Cart.jsx [This component is a wrapper for the whole cart,
                  which aggregates the total amount]
    | - CartItem.jsx [This component renders each cart item which
                      was added to the cart. This also handles removing
                      from the cart]
    | - Refine.jsx [This component handles all filtering and sorting
                    functionality]
public/img/
  | [This holds all the images for the various cars]
```

## Data Passage and State Changes

- All the main states are held in `App.js`. The following states are used:
  - `cars`
  - `refinedCars`
  - `brandCategory`
  - `yearCategory`
  - `priceCategory`
- Additionally, in `App.js`, I have the following methods with operate on the above states:

  - `changeBrandFilter()`
  - `changeYearFilter()`
  - `changePriceSort()`
  - `changeNumInCart()`
  - `removeFromCart()`

- I pass in each of these methods as a prop to the child method and then when the child component deems that it needs to update the state it calls `this.props.<method_name>`

An example of this is as follows:

- In my `Refine` component, I pass in the `changeBrandFilter` method.
- In the component, when the new brand button is clicked, it registers a callback to `this.props.changeBrandFilter` which changes the state of `brandCategory` to the respective brand.
- Whenever one of these methods are called, it recreates the refined car list based on the global states.

The same process is used similarly for the price sorting, and filtering by year basis.

## Node Packages Used

- react-bootstrap
