# Q3 Project: Aquarium Store
## Description
  This website will be an aquatic plant store, designed to be friendly towards indexperienced hobbyists. Inventory may be filtered by the growing requirments (and therefore difficulty) of the plants, making it easy to purchase plants that will likely thrive in a given aquarium.
  
  Similar to auto parts sites that allow filtering by specific make/model, the aquatic store will allow users to enter their relevant aquarium parameters (light, substrate, CO2 injection, fertilizer additives) and filter by compatible plants.
      
  There will also be an admin panel to allow the business owner to update stock/modify inventory descriptions without requiring knowledge of databases.

## Audience
  #### Customers
 Customers should be able to easily filter through a (potentially extensive) list of plants for compatible species. Many popular aquatic plants are considerably more difficult to grow than conventional houseplants, and introductory aquarium kits generally lack adequate equipment. Spending a significant amount of money on plants and having them die within weeks is extremely discouraging to new hobbyists, but may be avoided with well-presented store fronts.
 
#### Business Owner
  The site should be operable by someone with limited technical knowledge: given that plant stocks will vary signficantly over time, the owner must be able to update their inventory using an easy-to-understand GUI. This means an auth system, at least for an admin, must be implemented.

## Outputs
  Well-organized inventory information to help customers solve the multi-dimensional problem of assembling a well-funcitoning aquatic ecosystem. Plant recommendations should be made dependent on the quantity of light, quality of substrate (gravel, sand, soil etc), CO2 concentration, and micronutrient availability (fetilizer in substrate and/or water column).
  Customers should, of course, also be able to remove all of that filtering, or filter by plant type (fern, stem, moss, etc).
  
## Inputs
  Customers should optionally be able to input tank parameters for better suggestions.

## Technologies
  #### Frontend:
  * React
  * Redux
  * Reactstrap
  #### Backend:
  * Node
  * Express
  * PostgreSQL

## Feature List
  ### Minimum: 
   #### Customers
   * List of plants currently for sale, along with growing difficulty
   * Sort by:
        * Size (foreground, midground, background)
        * Ease of growth
        * Price
   * Input tank parameters, get appropriate plant suggestions

   #### Owner/Operator
   * Update inventory through website
   * Inventory should be automatically marked as out of stock
  
  ### Stretch:
   * Optionally create account to save and review previous orders 
      * Make personal notes on previous orders (e.g. mark a product that did well for you in the past)
   * Informational pages:
      * explain the light/CO2/micronutrient balancing act
      * overview of aleopathy*
      * diagnose common micronutrient defficencies
      * isolate likely sources of algae problems based off tank parameters*
      
*Not common knowledge; I need to review literature
   
