type biblioInfoType = {
  "name": string,
  "description": string,
  "color": "white" | "primary" | "secondary" | "gray" | "tertiary",
  "link": string,
  "className"?: string
}

type iniciTextType = {
  "page": {
    "title": string,
    "description": string[]
  },
  "biblioInfo": biblioInfoType[]
}

export const biblioInfo: biblioInfoType[] = [
  {
    "name": "Bones pràctiques",
    "description": "Visita l’apartat de Bones Pràctiques per conèixer quines accions han implementat altres organitzacions.",
    "color": "white",
    "link": "/app/practiques"
  },
  {
    "name": "Metodologies",
    "description": "Visita l’apartat de Metodologies per conèixer quines metodologies existeixen i pot implementar la teva organització.",
    "color": "primary",
    "link": "/app/metodologies"
  },
  {
    "name": "Noticies",
    "description": "Visita l’apartat de notícies per estar al dia sobre tota l’actualitat en matèria d’impacte social i ambiental.",
    "color": "primary",
    "link": "/app/noticies"
  }
]

export const iniciText: iniciTextType = {
  "page": {
    "title": "Kamma",
    "description": [
      "A Kamma creiem que el primer pas per poder actuar és conèixer el teu impacte.",
      "Kamma és una plataforma especialitzada en la mesura i avaluació de l’impacte social i ambiental. On trobaràs informació rigorosa i contrastada sobre la mesura de l'impacte. Adreçada a qualsevol tipus d’organització, ja sigui a PIME, gran empresa, sense ànim de lucre o entitat pública.",
      "Oferim des d’orientació amb la nostra eina d’autodiagnosi, fins a formació o acompanyament professional a mida amb les nostres persones expertes.",
      "Amb Kamma, podràs mesurar, actuar i comunicar de forma rigorosa l’impacte de la teva organització.",
    ]
  },
  "biblioInfo": [
    ...biblioInfo,
    {
      "name": "Formació",
      "description": "Accedeix al nostre portal Edukamma per conèixer la oferta de formacions online i presencials disponibles.",
      "color": "white",
      "link": "/app/formacio"
    },
  ]
}

export const biblioText: iniciTextType = {
  "page": {
    "title": "Biblioteca",
    "description": [
      "Davant l’excés d’informació en l'àmbit de la mesura i avaluació de l’impacte social, hem classificat i organitzat la informació en aquesta Biblioteca. Per facilitar l’aprenentatge i garantir que els conceptes són clars i específics.",
      "Per mitjà del nostre cercador, podràs trobar de manera ràpida i senzilla  definicions, articles i publicacions científiques més rellevants sobre la mesura de l’impacte.",
      "Tota la informació facilitada en aquesta plataforma ha estat contrastada per centres d’investigació i experts en la matèria.",
    ]
  },
  "biblioInfo": [
    ...biblioInfo,
  ]
}