# Lucy in the Sky menu research brief

Last researched: 2026-07-15

Purpose: website-ready menu notes for the Lucy in the Sky Liverpool demo. Instagram was inspected through an authenticated account. The May 2026 summer-menu post is current-looking and the drinks highlight is older (about 48 weeks). A recent user-uploaded in-store menu photo was used to cross-check the permanent food menu. Prices and availability should be verified with the cafe before public launch.

## Quick identity

- Name: Lucy in the Sky Liverpool
- Type: Independent family-run cafe / restaurant
- Positioning: All-day brunch, coffee, Scouse classics and playful seasonal specials
- Address: Unit 2, Imperial Court, 2 Exchange Street East, Liverpool L2 3PQ
- Phone: +44 151 236 9447
- Instagram: @lucy.intheskyliverpool
- Current website status: no confirmed independent website

## Opening hours found online

- Monday-Friday: 09:00-15:30
- Saturday-Sunday: 09:00-14:00

Hours should be checked again before launch.

## Current Instagram menu evidence

The 16 May 2026 summer-menu carousel shows four named specials with prices:

- Chicken Caesar Salad Sub — £11
- Breakfast Croissant — £11
- Birthday Cake Matcha — £5.50
- Strawberries and Cream Matcha — £5.50

The carousel text describes the Breakfast Croissant as avocado smash, two poached eggs, rocket and balsamic glaze on a croissant, served with crispy chilli oil, cucumber, radish and pomegranate. The drinks use ceremonial-grade matcha and are clearly positioned as seasonal.

The Menu 2025 highlight contains a drinks board. Readable prices include:

- Espresso £2.90; Americano £3.30; Flat White £3.60; Latte £3.80
- Cappuccino £3.60; Mocha £4.00; Cortado £3.50; Hot Chocolate £4.10
- Tea selection £2.80
- Matcha Latte £4.00; Iced Matcha Latte £4.50
- Ruby Matcha Latte £5.80; White Chocolate Matcha £5.80; Dragonfruit Latte £4.50
- Scouse Shake £5.50; Iced Latte £4.00
- Plant milk +90p; extra shot +£1; syrup +50p

Because the highlight is older, the demo must label these as sample prices.

## Recent in-store menu evidence

A user-uploaded in-store menu photo, listed as added about two months ago, supports these dine-in items and prices:

- The “Scouse” Full English Breakfast £13.50
- The Veggie £12; The Plant Based £12
- Brekkie Bagel £9.50; BLT £7.50; Cheesy Beans on Toast £6.60
- Eggs Benedict £10.50; Florentine £10.50; Royale £11.50
- Avocado Smashed £8.50; remove feta for a vegan option
- Three-egg omelette or scramble £9.50
- Choice on toast £6.60; The 1989 toastie £7.50
- Chopped Chicken, Bacon and Avocado Caesar Salad £11
- Lucy’s Club Sandwich £12; The Chicken Burger £11.50

Delivery platforms also list Margy’s Scouse, soup, pasta bake, baked potatoes, sandwiches, bagels, waffles and pancakes, but their prices conflict with the recent in-store photo. Those items may appear without a fixed price in the demo.

## Dietary and allergy wording

Confirmed public wording supports vegetarian-friendly, vegan options and gluten-free options. The latest menu explicitly identifies The Veggie, The Plant Based and a vegan adaptation for Avocado Smashed.

Recommended website wording:

> Vegetarian, vegan and gluten-free options are available. Please speak to the team about allergies and dietary requirements; ingredients and preparation may vary.

Do not infer item-level gluten-free or vegan labels from ingredients alone.

## Demo website direction

Homepage CTA:

- Label: See the full menu
- Destination: `/menu`
- Supporting copy: From the Instagram summer drop to Lucy’s all-day classics.

Full menu page:

- Lead with the four current Instagram summer specials.
- Use compact, price-aligned lists for permanent categories.
- Keep a sticky category index for long-page navigation.
- Show a visible “Sample menu — prices and availability may change” notice.
- Separate seasonal Instagram items from core dine-in items.
- Do not reuse or download Instagram photos for the demo without permission.

## Structured info for later build

```json
{
  "name": "Lucy in the Sky Liverpool",
  "business_type": "Independent cafe and restaurant",
  "address": "Unit 2, Imperial Court, 2 Exchange Street East, Liverpool L2 3PQ",
  "phone": "+44 151 236 9447",
  "instagram": "https://www.instagram.com/lucy.intheskyliverpool/",
  "core_offers": [
    "all-day breakfast",
    "brunch",
    "Scouse classics",
    "coffee",
    "matcha",
    "seasonal specials"
  ],
  "dietary_or_accessibility": [
    "vegetarian friendly",
    "vegan options",
    "gluten-free options"
  ],
  "menu_disclaimer": "Sample menu — prices and availability may change."
}
```

## Source notes

- Instagram profile and authenticated Menu 2025 highlight: official identity, drinks board and prices.
- Instagram summer-menu carousel dated 16 May 2026: four seasonal items, descriptions and prices.
- Instagram Breakfast Croissant post dated 2 June 2026: confirms it as a current summer favourite.
- Restaurant Guru user menu photo: recent-looking dine-in breakfast and brunch board.
- Deliveroo and Uber Eats: broader classic-menu coverage; prices conflict and were not treated as current dine-in prices.
- Tripadvisor claimed listing: dietary options and business positioning.

## Source links

- Instagram profile: https://www.instagram.com/lucy.intheskyliverpool/
- Instagram summer menu: https://www.instagram.com/lucy.intheskyliverpool/p/DYZVYnSjf4d/
- Instagram Breakfast Croissant: https://www.instagram.com/lucy.intheskyliverpool/p/DZFSqZ9tUB_/
- Instagram Menu 2025 highlight: https://www.instagram.com/stories/highlights/18185011861324833/
- Restaurant Guru menu: https://restaurantguru.com/Lucy-in-the-Sky-Coffee-Shop-Liverpool/menu
- Deliveroo menu: https://deliveroo.co.uk/menu/liverpool/liverpool-city-centre/lucy-in-the-sky/
- Uber Eats menu: https://www.ubereats.com/gb/store/lucy-in-the-sky/qLJSaMrZSjeeorETyPuXPA
- Tripadvisor: https://www.tripadvisor.co.uk/Restaurant_Review-g186337-d14077338-Reviews-Lucy_in_the_Sky_Liverpool-Liverpool_Merseyside_England.html
