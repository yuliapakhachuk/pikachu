import { PokemonList } from "components/PokemonList/PokemonList";
import { Pagination } from "components/Pagination/Pagination";


export default function PokemonListPage() {
    const pokemons = [
        {
          "id": "1",
          "name": "Bulbasaur",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          "type": "Grass/Poison",
          "abilities": [
            "Overgrow",
            "Chlorophyll"
          ],
          "level": 1,
          "evolution": [
            "2"
          ]
        },
        {
          "id": "2",
          "name": "Ivysaur",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
          "type": "Grass/Poison",
          "abilities": [
            "Overgrow",
            "Chlorophyll"
          ],
          "level": 16,
          "evolution": [
            "3"
          ]
        },
        {
          "id": "3",
          "name": "Venusaur",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
          "type": "Grass/Poison",
          "abilities": [
            "Overgrow",
            "Chlorophyll"
          ],
          "level": 32,
          "evolution": []
        },
        {
          "id": "4",
          "name": "Charmander",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
          "type": "Fire",
          "abilities": [
            "Blaze",
            "Solar Power"
          ],
          "level": 1,
          "evolution": [
            "5"
          ]
        },
        {
          "id": "5",
          "name": "Charmeleon",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
          "type": "Fire",
          "abilities": [
            "Blaze",
            "Solar Power"
          ],
          "level": 16,
          "evolution": [
            "6"
          ]
        },
        {
          "id": "6",
          "name": "Charizard",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
          "type": "Fire/Flying",
          "abilities": [
            "Blaze",
            "Solar Power"
          ],
          "level": 36,
          "evolution": []
        },
        {
          "id": "7",
          "name": "Squirtle",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
          "type": "Water",
          "abilities": [
            "Torrent",
            "Rain Dish"
          ],
          "level": 1,
          "evolution": [
            "8"
          ]
        },
        {
          "id": "8",
          "name": "Wartortle",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
          "type": "Water",
          "abilities": [
            "Torrent",
            "Rain Dish"
          ],
          "level": 16,
          "evolution": [
            "9"
          ]
        },
        {
          "id": "9",
          "name": "Blastoise",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
          "type": "Water",
          "abilities": [
            "Torrent",
            "Rain Dish"
          ],
          "level": 36,
          "evolution": []
        },
        {
          "id": "10",
          "name": "Caterpie",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
          "type": "Bug",
          "abilities": [
            "Shield Dust",
            "Run Away"
          ],
          "level": 1,
          "evolution": [
            "11"
          ]
        },
        {
          "id": "11",
          "name": "Metapod",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
          "type": "Bug",
          "abilities": [
            "Shed Skin"
          ],
          "level": 7,
          "evolution": [
            "12"
          ]
        },
        {
          "id": "12",
          "name": "Butterfree",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
          "type": "Bug/Flying",
          "abilities": [
            "Compound Eyes",
            "Tinted Lens"
          ],
          "level": 10,
          "evolution": []
        },
        {
          "id": "13",
          "name": "Weedle",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
          "type": "Bug/Poison",
          "abilities": [
            "Shield Dust",
            "Run Away"
          ],
          "level": 1,
          "evolution": [
            "14"
          ]
        },
        {
          "id": "14",
          "name": "Kakuna",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
          "type": "Bug/Poison",
          "abilities": [
            "Shed Skin"
          ],
          "level": 7,
          "evolution": [
            "15"
          ]
        },
        {
          "id": "15",
          "name": "Beedrill",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
          "type": "Bug/Poison",
          "abilities": [
            "Swarm",
            "Sniper"
          ],
          "level": 10,
          "evolution": []
        },
        {
          "id": "133",
          "name": "Eevee",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
          "type": "Normal",
          "abilities": [
            "Run Away",
            "Adaptability"
          ],
          "level": 1,
          "evolution": [
            "134",
            "135",
            "136",
            "196",
            "197",
            "470",
            "471",
            "700"
          ]
        },
        {
          "id": "134",
          "name": "Vaporeon",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
          "type": "Water",
          "abilities": [
            "Water Absorb",
            "Hydration"
          ],
          "level": 2,
          "evolution": []
        },
        {
          "id": "135",
          "name": "Jolteon",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
          "type": "Electric",
          "abilities": [
            "Volt Absorb",
            "Quick Feet"
          ],
          "level": 2,
          "evolution": []
        },
        {
          "id": "136",
          "name": "Flareon",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
          "type": "Fire",
          "abilities": [
            "Flash Fire",
            "Guts"
          ],
          "level": 2,
          "evolution": []
        },
        {
          "id": "196",
          "name": "Espeon",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
          "type": "Psychic",
          "abilities": [
            "Synchronize",
            "Magic Bounce"
          ],
          "level": 2,
          "evolution": []
        },
        {
          "id": "197",
          "name": "Umbreon",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
          "type": "Dark",
          "abilities": [
            "Synchronize",
            "Inner Focus"
          ],
          "level": 2,
          "evolution": []
        },
        {
          "id": "470",
          "name": "Leafeon",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
          "type": "Grass",
          "abilities": [
            "Leaf Guard",
            "Chlorophyll"
          ],
          "level": 2,
          "evolution": []
        },
        {
          "id": "471",
          "name": "Glaceon",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
          "type": "Ice",
          "abilities": [
            "Snow Cloak",
            "Ice Body"
          ],
          "level": 2,
          "evolution": []
        },
        {
          "id": "700",
          "name": "Sylveon",
          "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
          "type": "Fairy",
          "abilities": [
            "Cute Charm",
            "Pixilate"
          ],
          "level": 2,
          "evolution": []
        }
      ];

    return (
        <div>
            PokemonListPage
            <PokemonList pokemons={pokemons}/>
            <Pagination/>
        </div>
    )
}