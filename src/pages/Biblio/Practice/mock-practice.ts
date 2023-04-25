import { SideSectionFilterProps } from "../../../stories/Organisms/SideSectionFilter/SideSectionFilter"

export const practices = [
  {
    id: 'practice-1',
    title: 'Practice Card',
    summary: 'This is a practice card',
  },
  {
    id: 'practice-2',
    title: 'Practice Card 2',
    summary: 'This is a practice card 2',
  },
  {
    id: 'practice-3',
    title: 'Practice Card 3',
    summary: 'This is a practice card 3',
  },
  {
    id: 'practice-4',
    title: 'Practice Card 4',
    summary: 'This is a practice card 4',
  },
  {
    id: 'practice-5',
    title: 'Practice Card 5',
    summary: 'This is a practice card 5',
  },
  {
    id: 'practice-6',
    title: 'Practice Card 6',
    summary: 'This is a practice card 6',
  },
]

export const infoSideSectionFilter: SideSectionFilterProps = {
  title: "Bones pràctiques",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum beatae consequatur maxime temporibus necessitatibus enim eaque inventore, omnis, dolorum assumenda dignissimos voluptate soluta sapiente asperiores, laboriosam velit repudiandae harum architecto nisi earum!",
  filters: [
    {
      name: "Metodologia",
      value: "methodology",
      options: ["Tots", "Metodologia 1", "Metodologia 2", "Metodologia 3"],
      color: "primary",
    },
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
    {
      name: "Organització",
      value: "org",
      options: ["Tots", "Org 1", "Org 2", "Org 3"],
      color: "gray",
    },
    {
      name: "Any",
      value: "year",
      options: ["Tots", "2021", "2020", "2019"],
      color: "gray",
    },
  ],
}