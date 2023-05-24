type biblioInfoType = {
  "name": string,
  "description": string,
  "color": "white" | "primary" | "secondary" | "gray" | "tertiary",
  "link": string
}

type iniciTextType = {
  "page": {
    "title": string,
    "description": string[]
  },
  "biblioInfo": biblioInfoType[]
}

export const iniciText: iniciTextType = {
  "page": {
    "title": "Kamma",
    "description": [
      "A Kamma creiem que conèixer el teu impacte és el primer pas per poder actuar amb intenció.",
      "Kamma és una plataforma especialitzada en la mesura i avaluació de l’impacte social i ambiental on trobaràs informació rigorosa i contrastada sobre la mesura de l'impacte. Adreçada a qualsevol tipus d’organització, ja sigui PIME, gran, sense ànim de lucre o un organisme públic.",
      "Oferim des d’orientació amb la nostra eina d’autodiagnosi, fins a formació o acompanyament a mida amb els nostres experts.",
      "Amb Kamma, podràs mesurar, actuar i comunicar de forma rigorosa l’impacte de la teva organització a la societat.",
    ]
  },
  "biblioInfo": [
    {
      "name": "Bones pràctiques",
      "description": "Visita l’apartat de Bones Pràctiques per conèixer quines accions han implementat altres organitzacions.",
      "color": "white",
      "link": "/app/practiques"
    },
    {
      "name": "Metodologies",
      "description": "Visita l’apartat de Metodologies per conèixer quines metodologies pots implementar a la teva organització.",
      "color": "primary",
      "link": "/app/metodologies"
    },
    {
      "name": "Formació",
      "description": "Accedeix al nostre portal Edukamma per conèixer la oferta de formacions online i presencials disponibles.",
      "color": "secondary",
      "link": "/app/formacio"
    },
    {
      "name": "Noticies",
      "description": "Visita l’apartat de notícies per estar al dia sobre tota l’actualitat en matèria d’impacte social i ambiental.",
      "color": "gray",
      "link": "/app/noticies"
    }
  ]
}