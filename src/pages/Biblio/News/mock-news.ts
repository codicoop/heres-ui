import { SideSectionFilterProps } from "../../../stories/Organisms/SideSectionFilter/SideSectionFilter"

export const news = [
  {
    id: 'news-1',
    title: 'Post Card',
    summary: 'This is a practice card. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
  },
  {
    id: 'news-2',
    title: 'Post Card 2',
    summary: 'This is a practice card 2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
  },
  {
    id: 'news-3',
    title: 'Post Card 3',
    summary: 'This is a practice card 3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
  },
  {
    id: 'news-4',
    title: 'Post Card 4',
    summary: 'This is a practice card 4. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
  },
  {
    id: 'news-5',
    title: 'Post Card 5',
    summary: 'This is a practice card 5. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
  },
  {
    id: 'news-6',
    title: 'Post Card 6',
    summary: 'This is a practice card 6. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
  },
  {
    id: 'news-7',
    title: 'Post Card 7',
    summary: 'This is a practice card 7. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
  }
]

export const infoSideSectionFilter: SideSectionFilterProps = {
  title: "Noticies",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, alias cupiditate a pariatur neque dicta quidem dolor itaque obcaecati nihil porro accusantium facilis quos ab dignissimos quod et impedit totam ad.",
  filters: [
    {
      name: "Organització",
      value: "org",
      options: ["Tots", "Org 1", "Org 2", "Org 3"],
      color: "gray",
    },
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
      name: "Mida organització",
      value: "org-size",
      options: ["Tots", "1-5", "6-10", "11-50", "51-200", "201-500", "500+"],
      color: "secondary",
    },
  ],
}