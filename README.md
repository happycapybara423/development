# Development

### Link to Deployed Website
If you used the stencil code, this is `https://happycapybara423.github.io/development`

### Goal and Value of the Application
The goal of this application is to be an online market for starter Pokémon trading cards. 
Each Pokémon card displays images and descriptions of the Pokémon along with their price, 
type, and region. They can also sort the cards in alphabetical order or by price and filter
by type and region to help the find the cards they are looking for more easily and consider
their options better. Users can add cards to their cart, which displays the cards they have
added and the total price, and they can also remove them from the cart if they change their mind.

### Usability Principles Considered
I aimed to consider learnability and efficiency in this application. Off the bat, the title 
clearly defines the platform as a "shop," so users will quickly understand the context of 
the interface they are interacting with. The shop is organized similarly to most other online 
shops, so it should match the average user's mental model. All of the cards are consistent 
in style and use visual hierarchy principles to make it easier to learn the organization and 
structure of the information. The sorting, filters, and cart information are also conveniently 
and visibly placed on the left side where users can easily use the filters and see what's in their cart. 

### Organization of Components
Under the main App component is a PokemonCard component. The PokemonCard component displays
all of the details for each Pokémon card, including the name, price, description, type, region,
image, and buttons for adding to or removing the card from the cart. There are also the NavBar
and NavDropdown components imported from Bootstrap that are used to help filter and sort the 
PokemonCard components.

### How Data is Passed Down Through Components
Data is passed down through components using props. The PokemonCard component has item, onAdd,
and onRemove passed in as props. 

### How the User Triggers State Changes
The user triggers state changes by selecting different options in the NavDropdown components.
Selecting an option edits the state variables, rerendering the entire react component and
displaying the changes. For instance, when the "Water" filter is clicked, the filter transforms
from being nothing to one that only displays cards of the "Water" type. Users also trigger state
changes by adding and removing cards from the cart with the respective buttons. Not only does this
change the number of cards in the cart but it also changes the total price.
