import { GeneralInfoSectionProps } from "../../../stories/Organisms/GeneralInfoSection/GeneralInfoSection"
import { SideSectionFilterProps } from "../../../stories/Organisms/SideSectionFilter/SideSectionFilter"

export const news = [
  {
    id: 'news-1',
    title: 'Post Card',
    summary: 'This is a post card. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
  },
  {
    id: 'news-2',
    title: 'Post Card 2',
    summary: 'This is a post card 2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
  },
  {
    id: 'news-3',
    title: 'Post Card 3',
    summary: 'This is a post card 3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
  },
  {
    id: 'news-4',
    title: 'Post Card 4',
    summary: 'This is a post card 4. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
  },
  {
    id: 'news-5',
    title: 'Post Card 5',
    summary: 'This is a post card 5. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
  },
  {
    id: 'news-6',
    title: 'Post Card 6',
    summary: 'This is a post card 6. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
  },
  {
    id: 'news-7',
    title: 'Post Card 7',
    summary: 'This is a post card 7. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
  }
]

export const infoSideSectionFilter: SideSectionFilterProps = {
  title: "Noticies",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, alias cupiditate a pariatur neque dicta quidem dolor itaque obcaecati nihil porro accusantium facilis quos ab dignissimos quod et impedit totam ad.",
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
      name: "Data",
      value: "date",
      options: ["Tots", "0 - 1 mes", "1 - 3 mesos", "3 - 6 mesos", "6 - 12 mesos", "1 any o +"],
      color: "gray",
    },
  ],
}

export const generalInfoSection: GeneralInfoSectionProps = {
  type: 'post',
  title: 'Post 1',
  sectionInfo: [
    {
      category: 'Data de publicació',
      data: 'Març 2022'
    },
    {
      category: 'Àmbit',
      data: 'Àmbit 1'
    },
    {
      category: 'Sector',
      data: 'Sector 1'
    },
  ],
  img: 'https://picsum.photos/900/600',
}

export const relatedType: 'post' | 'methodology' | 'post' | 'formation' = 'formation'

export const relatedItems: {
  id: string
  title: string
  summary?: string
  img?: string
}[] | undefined = [
  {
    id: 'formation-1',
    title: 'Formació 1',
    img: 'https://picsum.photos/900/600',
  },
]

export const postInfo = {
  generalInfoSection,
  relatedType,
  relatedItems
}

export const postContent: {
  text?: string
  img?: string
  imgSide?: 'left' | 'right'
}[] = [
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veritatis, nisi aut, earum laboriosam saepe voluptates rerum pariatur, adipisci iure id eos? Laudantium. Nostrum est iusto, aliquid tempora quis blanditiis similique excepturi debitis repudiandae fugiat! Repellat laudantium ratione deserunt, repudiandae itaque, natus incidunt officiis vitae, excepturi temporibus earum voluptates!',
  },
  {
    img: 'https://picsum.photos/350/150',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veritatis, nisi aut, earum laboriosam saepe voluptates rerum pariatur, adipisci iure id eos? Laudantium. Nostrum est iusto, aliquid tempora quis blanditiis similique excepturi debitis repudiandae fugiat! Repellat laudantium ratione deserunt, repudiandae itaque, natus incidunt officiis vitae, excepturi temporibus earum voluptates!',
    img: 'https://picsum.photos/350/150',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veritatis, nisi aut, earum laboriosam saepe voluptates rerum pariatur, adipisci iure id eos? Laudantium. Nostrum est iusto, aliquid tempora quis blanditiis similique excepturi debitis repudiandae fugiat! Repellat laudantium ratione deserunt, repudiandae itaque, natus incidunt officiis vitae, excepturi temporibus earum voluptates!',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veritatis, nisi aut, earum laboriosam saepe voluptates rerum pariatur, adipisci iure id eos? Laudantium. Nostrum est iusto, aliquid tempora quis blanditiis similique excepturi debitis repudiandae fugiat! Repellat laudantium ratione deserunt, repudiandae itaque, natus incidunt officiis vitae, excepturi temporibus earum voluptates!',
    img: 'https://picsum.photos/350/150',
    imgSide: 'left',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veritatis, nisi aut, earum laboriosam saepe voluptates rerum pariatur, adipisci iure id eos? Laudantium. Nostrum est iusto, aliquid tempora quis blanditiis similique excepturi debitis repudiandae fugiat! Repellat laudantium ratione deserunt, repudiandae itaque, natus incidunt officiis vitae, excepturi temporibus earum voluptates!',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veritatis, nisi aut, earum laboriosam saepe voluptates rerum pariatur, adipisci iure id eos? Laudantium. Nostrum est iusto, aliquid tempora quis blanditiis similique excepturi debitis repudiandae fugiat! Repellat laudantium ratione deserunt, repudiandae itaque, natus incidunt officiis vitae, excepturi temporibus earum voluptates!',
  },
  {
    img: 'https://picsum.photos/350/150',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veritatis, nisi aut, earum laboriosam saepe voluptates rerum pariatur, adipisci iure id eos? Laudantium. Nostrum est iusto, aliquid tempora quis blanditiis similique excepturi debitis repudiandae fugiat! Repellat laudantium ratione deserunt, repudiandae itaque, natus incidunt officiis vitae, excepturi temporibus earum voluptates!',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veritatis, nisi aut, earum laboriosam saepe voluptates rerum pariatur, adipisci iure id eos? Laudantium. Nostrum est iusto, aliquid tempora quis blanditiis similique excepturi debitis repudiandae fugiat! Repellat laudantium ratione deserunt, repudiandae itaque, natus incidunt officiis vitae, excepturi temporibus earum voluptates!',
    img: 'https://picsum.photos/350/150',
    imgSide: 'left',
  },
  {
    img: 'https://picsum.photos/350/150',
  },
]