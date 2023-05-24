import { GeneralInfoSectionProps } from "../../../stories/Organisms/GeneralInfoSection/GeneralInfoSection"
import { SideSectionFilterProps } from "../../../stories/Organisms/SideSectionFilter/SideSectionFilter"

export const methodologies = [
  {
    id: 'methodology-1',
    title: 'Valor Social Integrat',
    summary: 'La metodologia del Valor Social Integrat és una eina capaç de valorar, de manera objectiva i comparable, el valor global generat, o destruït, per qualsevol tipus d\'organització.',
    saved: false,
    ambit: 'Social',
    sectors: ["Tots"]
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
  description: [
    "Davant la falta d’estandardització en l’avaluació de l’impacte social, existeix un gran nombre de metodologies que permeten avaluar l’impacte d’una organització, projecte o programa.",
    "En el nostre cercador podràs trobar de manera senzilla les metodologies que més s'ajusten als teus interessos.",
    "Totes les metodologies han estat contrastades per centres d’investigació i experts en la matèria de mesura d’impacte."
  ],
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
  title: 'Valor Social Integrat',
  sectionInfo: [
    {
      category: 'Àmbit',
      data: 'Social'
    },
    {
      category: 'Organització impulsora',
      data: 'GEAccounting'
    },
    {
      category: 'Sectors d’aplicació',
      data: 'Tots'
    },
    {
      category: 'Complexitat d’implementació',
      data: 'Mitjana'
    },
    {
      category: 'Resultats i mètriques generades',
      data: 'Quantitatius (monetària)'
    },
    {
      category: 'Tipus de mesura',
      data: 'Retrospectiva'
    },
    {
      category: 'Aplicabilitat en funció del lucre',
      data: 'Per organitzacions sense lucre'
    },
    {
      category: 'Complexitat d’implementació',
      data: 'Alt'
    }
  ],
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
    text: 'La metodologia del Valor Social Integrat és una eina capaç de valorar, de manera objectiva i comparable, el valor global generat, o destruït, per qualsevol tipus d\'organització. Reflecteixi no sols el valor generat per als accionistes, sinó també el generat per a uns altres stakeholders o grups d\'interès com ara Proveedores, Clients, Administració, Societat, etc.',
  },
  {
    text: 'L\'eina segueix la metodologia SPOLY: tres ecosistemes de valor que la suma d’elles generen el Valor Social Integrat:',
  },
  {
    text: '- Valor social generat a través de l’activitat econòmica.',
  },
  {
    text: '- Retorn soci-econòmic generat per l’Administració.',
  },
  {
    text: '- Valor social específic generat per grups d’interès.',
  },
  {
    text: 'Fases:',
  },
  {
    text: '1. Creació de l’equip',
  },
  {
    text: '2. Identificació dels grups d’interès',
  },
  {
    text: '3. Identificació de les variables de valor',
  },
  {
    text: '4. Monetització dels outputs',
  },
  {
    text: '5. Càlcul i visualització del valor consolidat',
  },
]