import { SideSectionFilterProps } from "../../../stories/Organisms/SideSectionFilter/SideSectionFilter"

export const methodologies = [
  {
    id: 'methodology-1',
    title: 'Methodology Card',
    summary: 'This is a methodology card. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
    saved: false,
  },
  {
    id: 'methodology-2',
    title: 'Methodology Card 2',
    summary: 'This is a methodology card 2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
    saved: true,
  },
  {
    id: 'methodology-3',
    title: 'Methodology Card 3',
    summary: 'This is a methodology card 3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
    saved: true,
  },
  {
    id: 'methodology-4',
    title: 'Methodology Card 4',
    summary: 'This is a methodology card 4. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
    saved: false,
  },
  {
    id: 'methodology-5',
    title: 'Methodology Card 5',
    summary: 'This is a methodology card 5. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
    saved: false,
  },
  {
    id: 'methodology-6',
    title: 'Methodology Card 6',
    summary: 'This is a methodology card 6. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
    saved: false,
  },
]

export const infoSideSectionFilter: SideSectionFilterProps = {
  title: "Metodologies",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem asperiores fuga nesciunt adipisci? Neque rerum eius labore sint minus illo perspiciatis alias tempore doloremque earum. Quas ad eius ratione totam optio debitis!",
  filters: [
    {
      name: "Sector",
      value: "sector",
      options: ["Tots", "Sector 1", "Sector 2", "Sector 3"],
      color: "white",
    },
    {
      name: "Àmbit",
      value: "scope",
      options: ["Tots", "Àmbit 1", "Àmbit 2", "Àmbit 3"],
      color: "secondary",
    },
  ],
}