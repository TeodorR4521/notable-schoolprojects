#Safari

This was a three-member group project completed in one semester.

## Project Overview
Somewhere in Africa, we manage a Safari Park where tourists come to see a wide variety of fascinating animals. Our goal as the park director is to operate and maintain the park successfully until the required number of months passes.

## Game Description
The game takes place on a top-down 2D map containing bushes, trees, grassy areas, animals, and water sources.

The park director can place:
- Animals
- Rangers
- Roads
- Jeeps
- Plants
- Lakes

## Tourists
Tourists rent jeeps to go on adventurous trips through the park, where they can observe animals and gain experiences that increase their satisfaction.

The Safari Park’s income comes from:
- Animal sales
- Entrance fees (based on tourist satisfaction and visitor count)
- Jeep rental fees

A jeep can carry up to **4 passengers**.

## Animals
Animals can be:
- **Herbivores** – eat trees, bushes, and grass
- **Carnivores** – eat herbivores

Animals are capable of:
- Becoming thirsty and seeking water sources
- Becoming hungry and searching for food
- Aging (older animals consume more food)
- Forming groups by species
- Reproducing when they reach adulthood

If an animal is full, it moves to designated idle points until it becomes hungry or thirsty again.

## Poachers
Poachers enter the park with the intention of shooting or capturing animals to smuggle them out.

Poachers are only visible when tourists or rangers are nearby.

Rangers can be instructed to:
- Shoot carnivores
- Shoot poachers (done automatically if not set manually)

## Day–Night Cycle
During nighttime:
- Only areas with plants, water, roads, or moving jeeps are visible.
- Animals can only be seen if tourists or rangers are nearby, or if a tracking chip was purchased for them.
- Tourists are absent; only rangers and poachers remain active.

## Saving the Game
The game can be saved and later loaded at any time. All entities (animals, rangers, poachers) continue moving from where they left off.

## End of the Game
The game ends after the set number of months, depending on difficulty.

You **win** if:
- Visitor count, herbivores, carnivores, and capital stay above threshold values

You **lose** if:
- Thresholds are not met
- Bankruptcy occurs
- All animals die

## Functional Requirements
- From the menu, players can continue an existing game or start a new one, choosing from three difficulty levels.
- When starting a game, an initial map is generated with randomly placed animals, bushes, trees, grass, and water.

Purchasable items from the menu:
- **Animals** (2 carnivores, 2 herbivores): live in herds, eat, drink, reproduce, die
- **Plants** (3 types): food for herbivores
- **Lake**: water source for animals
- **Jeep**: max. 4 seats, starts at the entrance, drives randomly, drops passengers at exit, returns to entrance
- **Roads**: buildable between specific grid points
- **Ranger**: requires monthly salary, shoots selected carnivores, protects against poachers

Additional features:
- Selling animals
- Adjustable time speed (hour / day / week)
- Visual representation: day–night cycle, creatures with line-of-sight, free placement of objects
- Revenue calculation: entrance fee, tourist count, satisfaction

## Non-Functional Requirements
- **Reliability**: error messages shown for invalid actions
- **Security**: data stored in a database
- **Efficiency**: fast response time, minimal CPU/memory usage
- **Portability**: works on most PCs, no special installation
- **Usability**: intuitive menu, no manual needed
- **Environmental**: saving handled via file storage
- **Operational**: approx. 1–2 hours of gameplay, regular use
- **Development**: Java, JRE, IntelliJ IDE, GitLab
