import { GeneralInfoSectionProps } from "../../../stories/Organisms/GeneralInfoSection/GeneralInfoSection"
import { SideSectionFilterProps } from "../../../stories/Organisms/SideSectionFilter/SideSectionFilter"

export const practices = [
  {
    id: 'practice-1',
    title: 'Càlcul del Valor Social Integrat d’una consultoria estratègica d’economia social.',
    summary: 'Monetitzar el valor social generat per l’activitat empresarial i identificar indicadors de seguiment que ajudin a la gestió estratègica.',
    ambit: 'Social',
    sector: 'Sector social',
    methodologyRef: 'Metodologia 1'
  },
  {
    id: 'practice-2',
    title: 'Practice Card 2',
    summary: 'This is a practice card 2',
    ambit: 'Social',
    sector: 'Sector social',
    methodologyRef: 'Metodologia 1'
  },
  {
    id: 'practice-3',
    title: 'Practice Card 3',
    summary: 'This is a practice card 3',
    ambit: 'Social',
    sector: 'Sector social',
    methodologyRef: 'Metodologia 1'
  },
  {
    id: 'practice-4',
    title: 'Practice Card 4',
    summary: 'This is a practice card 4',
    ambit: 'Social',
    sector: 'Sector social',
    methodologyRef: 'Metodologia 1'
  },
  {
    id: 'practice-5',
    title: 'Practice Card 5',
    summary: 'This is a practice card 5',
    ambit: 'Social',
    sector: 'Sector social',
    methodologyRef: 'Metodologia 1'
  },
  {
    id: 'practice-6',
    title: 'Practice Card 6',
    summary: 'This is a practice card 6',
    ambit: 'Social',
    sector: 'Sector social',
    methodologyRef: 'Metodologia 1'
  },
]

export const infoSideSectionFilter: SideSectionFilterProps = {
  title: "Bones pràctiques",
  description: [
    "En aquest apartat podràs trobar accions que han estat dissenyades i implementades per d’altres organitzacions.",
    "El cercador de Kamma recull la informació i classifica les bones pràctiques per a que siguin buscades de manera ràpida i senzilla.",
    "La teva organització també pot compartir les seves bones pràctiques per difondre i ajudar a d’altres a millorar el seu impacte i generar possibles sinergies.",
  ],
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

export const generalInfoSection: GeneralInfoSectionProps = {
  type: 'practice',
  title: 'Càlcul del Valor Social Integrat d’una consultoria estratègica d’economia social.',
  sectionInfo: [
    {
      category: 'Data d\'inici',
      data: 'Febrer 2023'
    },
    {
      category: 'Data final',
      data: 'Juny 2023'
    },
    {
      category: 'Organització',
      data: 'Heres Social SCCL'
    },
    {
      category: 'Àmbit',
      data: 'Social'
    },
    {
      category: 'Metodologia de referència',
      data: 'VSI'
    },
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

export const practiceInfo = {
  generalInfoSection,
  relatedType,
  relatedItems
}

export const practiceContent: {
  text?: string
  img?: string
  imgSide?: 'left' | 'right'
}[] = [
  {
    text: 'Objectiu de la bona pràctica: Monetitzar el valor social generat per l’activitat empresarial i identificar indicadors de seguiment que ajudin a la gestió estratègica.',
  },
  {
    img: 'https://picsum.photos/350/150',
  },
  {
    text: `Descripció d’accions fetes:
    1. Identificació i classificació dels grups d’interès.
    2. Entrevistes amb els grups d’interès.
    3. Identificació de variables de valor.
    4. Monetització (proxies) dels indicadors de seguiment.
    5. Integració de les variables econòmiques amb les variables de valor.
    6. Comunicació dels resultats obtinguts.
    `,
  },
  {
    text: `Resultats aconseguits (Qualitatius i Quantitatius):
    1. Establiment d’indicadors de seguiment per propers anys.
    2. Mantenir un diàleg amb els diferents grups d’interès i rebre feedback.
    3. Retorn econòmic a la societat del valor social generat.
    `,
  },
]