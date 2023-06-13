import { GeneralInfoSectionProps } from "../../../stories/Organisms/GeneralInfoSection/GeneralInfoSection"
import { SideSectionFilterProps } from "../../../stories/Organisms/SideSectionFilter/SideSectionFilter"

export const news = [
  {
    id: 'news-1',
    title: 'El diàleg i la concertació social també a la responsabilitat social. Nou Marc de referència per a Catalunya',
    summary: 'La Generalitat de Catalunya ha publicat el Nou Marc de Referència per a Catalunya. Una eina amb visió estratègica que ha estat elaborada pel Consell de Relacions Laborals.',
    ambit: 'Social',
    sector: 'Tots els sectors',
    methodologyRef: '-',
    // He afegit aquestes categories per poder mostrar la info que ens donen
    date: '16/05/2023',
    article: 'No és habitual que l’Administració i les organitzacions sindicals i empresarials dialoguin i concertin matèries de responsabilitat social, però a Catalunya existeix una profunda tradició i al llarg dels anys s’ha enfortit. Des de fa més de dues dècades, Catalunya és pionera en la promoció de la responsabilitat social a les empreses. Un teixit productiu que genera valor per als treballadors i treballadores implicats, però també per a la societat en general, i que es corresponsabilitza amb el desenvolupament sostenible de l’entorn. Enguany, el compromís i la visió compartida del que ha de ser aquesta matèria es renoven i han quedat recollits en el nou Marc de referència de la responsabilitat social a Catalunya, una eina amb visió estratègica que ha estat elaborada per les tres parts que fan possible l’òrgan de diàleg i concertació en matèria laboral i representació sindical i la protecció efectiva dels drets laborals de les treballadores i treballadors aquí i al món.',
    origin: 'https://treball.gencat.cat/ca/rscat/serveis/eines-autoavaluacio/',
  },
  {
    id: 'news-2',
    title: 'Post Card 2',
    summary: 'This is a post card 2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
    ambit: 'Social',
    sector: 'Sector social',
  },
  {
    id: 'news-3',
    title: 'Post Card 3',
    summary: 'This is a post card 3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
    ambit: 'Social',
    sector: 'Sector social',
  },
  {
    id: 'news-4',
    title: 'Post Card 4',
    summary: 'This is a post card 4. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
    ambit: 'Social',
    sector: 'Sector social',
    methodologyRef: 'Metodologia 1'
  },
  {
    id: 'news-5',
    title: 'Post Card 5',
    summary: 'This is a post card 5. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
    ambit: 'Social',
    sector: 'Sector social',
    methodologyRef: 'Metodologia 1'
  },
  {
    id: 'news-6',
    title: 'Post Card 6',
    summary: 'This is a post card 6. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
    ambit: 'Social',
    sector: 'Sector social',
  },
  {
    id: 'news-7',
    title: 'Post Card 7',
    summary: 'This is a post card 7. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
    ambit: 'Social',
    sector: 'Sector social',
    methodologyRef: 'Metodologia 1'
  }
]

export const infoSideSectionFilter: SideSectionFilterProps = {
  title: "Noticies",
  description:
    "L’avaluació de l’impacte social en les organitzacions és un fet rellevant en l’actualitat, especialment pel que fa en l’àmbit normatiu. En aquest apartat publicarem les últimes notícies relacionades amb l’impacte social i ambiental, i les novetats respecte els nous canvis normatius en matèria de sostenibilitat.",
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