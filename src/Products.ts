interface IProducts{
    type: string
    items: IItem[]
}
export interface IItem{
    name: string
    price: number
    id: string
    icons: string[]
  }
export const products: IProducts[] = [
      {
        type: "деревянные часы",
        items: [
          {
            name: "Часы красные",
            price: 20,
            id: "DW001",
            icons: ['clock_tree']
          },
          {
            name: "Часы со смолой",
            price: 30,
            id: "DW002",
            icons: ["clock_resin_icon"]
          },
          {
            name: "Часы синие",
            price: 40,
            id: "DW003",
            icons: ["clock_blue_icon"]
          },
          {
            name: "Часы желтые",
            price: 45,
            id: "DW004",
            icons: ["clock_yellow_icon"]
          },
          {
            name: "Часы зеленые",
            price: 65,
            id: "DW005",
            icons: ["clock_green_icon"]
          }
        ]
      },
      {
        type: "деревянные украшения",
        items: [
          {
            name: "Серьги из кленового листа",
            price: 30,
            id: "JW001",
            icons: ["earrings_maple_leaf_icon"]
          },
          {
            name: "Подвеска с узором",
            price: 45,
            id: "JW002",
            icons: ["pendant_pattern_icon"]
          },
          {
            name: "Браслет из веток",
            price: 40,
            id: "JW003",
            icons: ["bracelet_branches_icon"]
          },
          {
            name: "Кольцо с живым камнем",
            price: 30,
            id: "JW004",
            icons: ["ring_live_stone_icon"]
          },
          {
            name: "Кулон с ягодой",
            price: 40,
            id: "JW005",
            icons: ["pendant_berry_icon"]
          }
        ]
      },
      {
        type: "деревянные игрушки",
        items: [
          {
            name: "Пазл 'Лесные животные'",
            price: 20,
            id: "TOY001",
            icons: ["puzzle_forest_animals_icon"]
          },
          {
            name: "Набор фигурок деревенской жизни",
            price: 40,
            id: "TOY002",
            icons: ["figures_country_life_icon"]
          },
          {
            name: "Деревянный кубик 'Алфавит'",
            price: 50,
            id: "TOY003",
            icons: ["cube_alphabet_icon"]
          },
          {
            name: "Резной медвежонок",
            price: 20,
            id: "TOY004",
            icons: ["carved_bear_icon"]
          },
          {
            name: "Каталка 'Дерево с птичками'",
            price: 30,
            id: "TOY005",
            icons: ["push_along_tree_birds_icon"]
          }
        ]
      },
      {
        type: "деревянные рамки",
        items: [
          {
            name: "Рамка для фото 'Лесной уголок'",
            price: 20,
            id: "FRAME001",
            icons: ["photo_frame_forest_corner_icon"]
          },
          {
            name: "Рамка с резным узором",
            price: 40,
            id: "FRAME002",
            icons: ["photo_frame_carved_pattern_icon"]
          },
          {
            name: "Декоративная рамка 'Дерево и бабочки'",
            price: 50,
            id: "FRAME003",
            icons: ["photo_frame_tree_butterflies_icon"]
          },
          {
            name: "Рамка для зеркала 'Природная красота'",
            price: 20,
            id: "FRAME004",
            icons: ["mirror_frame_natural_beauty_icon"]
          },
          {
            name: "Овальная деревянная рамка",
            price: 30,
            id: "FRAME005",
            icons: ["oval_wooden_frame_icon"]
          }
        ]
      },
      {
        type: "деревянные аксессуары",
        items: [
          {
            name: "Зажим для бумаги 'Лесной мотив'",
            price: 25,
            id: "ACC001",
            icons: ["paper_clip_forest_motif_icon"]
          },
          {
            name: "Комплект закладок 'Дерево и листья'",
            price: 40,
            id: "ACC002",
            icons: ["bookmarks_tree_leaves_set_icon"]
          },
          {
            name: "Магниты 'Животные леса'",
            price: 50,
            id: "ACC003",
            icons: ["magnets_forest_animals_set_icon"]
          },
          {
            name: "Карманный зеркальце 'Лесный пейзаж'",
            price: 20,
            id: "ACC004",
            icons: ["pocket_mirror_forest_landscape_icon"]
          },
          {
            name: "Комплект ручек 'Дерево и ствол'",
            price: 30,
            id: "ACC005",
            icons: ["pens_tree_trunk_set_icon"]
          }
        ]
      }
]

//POPULAR
export const popularProducts: IItem[] = [
    {
        name: "Часы красные",
        price: 20,
        id: "DW001",
        icons: ["clock_red_icon"]
    },
    {
        name: "Серьги из кленового листа",
        price: 30,
        id: "JW001",
        icons: ["earrings_maple_leaf_icon"]
    },
    {
        name: "Пазл 'Лесные животные'",
        price: 25,
        id: "TOY001",
        icons: ["puzzle_forest_animals_icon"]
    },
    {
        name: "Рамка для фото 'Лесной уголок'",
        price: 25,
        id: "FRAME001",
        icons: ["photo_frame_forest_corner_icon"]
    },
    {
        name: "Зажим для бумаги 'Лесной мотив'",
        price: 25,
        id: "ACC001",
        icons: ["paper_clip_forest_motif_icon"]
    }
]
  
