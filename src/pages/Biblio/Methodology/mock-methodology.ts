import { SideSectionFilterProps } from "../../../stories/Organisms/SideSectionFilter/SideSectionFilter"

export const methodologies = [
  {
    id: 'methodology-1',
    title: 'Valor Social Integrat',
    summary: 'La metodologia del Valor Social Integrat és una eina capaç de valorar, de manera objectiva i comparable, el valor global generat, o destruït, per qualsevol tipus d\'organització. Reflecteixi no sols el valor generat per als accionistes, sinó també el generat per a uns altres stakeholders o grups d\'interès com ara Proveedores, Clients, Administració, Societat, etc.',
    saved: true,
    ambit: 'Social',
    sectors: ["Tots"],
    // Categories afegides
    logo: '',
    site: '',
    promotor: 'GEAccounting',
    promotor_logo: '',
    description: '', // Ha de ser un richtext que pugui contenir llistes i històries
    results: 'Quantitatius - unitat monetària',
    type: 'Retrospectiva',
    type_of_entity: 'Per organitzacions sense ànim de lucre',
    complexity: 'Alta'
  },
  {
    id: 'methodology-2',
    title: 'Methodology Card 2',
    summary: 'This is a methodology card 2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
    saved: true,
    ambit: 'Social',
    sectors: ["Energétic", "Equips electronics", "Telecomunicacions i tecnologies de la informació"]
  },
  {
    id: 'methodology-3',
    title: 'Methodology Card 3',
    summary: 'This is a methodology card 3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
    saved: true,
    ambit: 'Social',
    sectors: ["Equips electronics", "Telecomunicacions i tecnologies de la informació"]
  },
  {
    id: 'methodology-4',
    title: 'Methodology Card 4',
    summary: 'This is a methodology card 4. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
    saved: false,
    ambit: 'Social',
    sectors: "Telecomunicacions i tecnologies de la informació"
  },
  {
    id: 'methodology-5',
    title: 'Methodology Card 5',
    summary: 'This is a methodology card 5. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
    saved: false,
    ambit: 'Social',
    sectors: ["Energétic"]
  },
  {
    id: 'methodology-6',
    title: 'Methodology Card 6',
    summary: 'This is a methodology card 6. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique tempore iure!',
    saved: false,
    ambit: 'Social',
    sectors: ["Energétic", "Equips electronics", "Telecomunicacions i tecnologies de la informació"]
  },
]

export const infoSideSectionFilter: SideSectionFilterProps = {
  title: "Metodologies",
  description:
    "Davant la falta d’estandardització en l’avaluació de l’impacte social, existeix un gran nombre de metodologies que permeten avaluar l’impacte d’una organització, projecte o programa. En el nostre cercador podràs trobar de manera senzilla les metodologies que més s'ajusten als teus interessos. Totes les metodologies han estat contrastades per centres d’investigació i experts en la matèria de mesura d’impacte.",
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

export const generalInfoSection: GeneralInfoSectionProps = {
  type: 'methodology',
  title: 'Metodologia 1',
  sectionInfo: [
    {
      category: 'Àmbit',
      data: 'Àmbit 1'
    },
    {
      category: 'Organització impulsora',
      data: 'Organització 1'
    },
    {
      category: 'Sectors d’aplicació',
      data: 'Sector 1, Sector 2, Sector 3'
    },
    {
      category: 'Complexitat d’implementació',
      data: 'Mitjana'
    }
  ],
  img: 'https://picsum.photos/900/600',
}

export const relatedType: 'practice' | 'methodology' | 'post' | 'formation' = 'formation'

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

export const methodologyInfo = {
  generalInfoSection,
  relatedType,
  relatedItems
}

export const methodologyContent: {
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