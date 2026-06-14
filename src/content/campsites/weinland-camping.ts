import type { CampsiteConfig } from "../types";

const IMG = "/campsites/weinland-camping";

const weinlandCamping: CampsiteConfig = {
  name: "Weinland Camping",
  shortName: "Weinland",
  slug: "weinland-camping",
  ort: "Gleinstätten",
  region: "Südsteiermark",
  brandKind: "Camping am Naturbadesee",
  see: "Naturbadesee",
  regionLong: "Naturpark Südsteiermark · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Dein Süden beginnt am Naturbadesee",
  claimEmphasis: "am Naturbadesee",
  emailDetail: "euer Naturbadesee direkt am Platz",
  intro:
    "Seit 1953 liegt Weinland Camping mitten im Naturpark Südsteiermark — direkt am eigenen Naturbadesee, umgeben von Weinbergen und nur einen kurzen Weg vom Ortszentrum Gleinstätten entfernt.",

  statement: {
    text: "Die 38 Stellplätze liegen direkt am Wasser — der Badesee ist für dich als Campinggast inklusive.",
    emphasis: "direkt am Wasser",
  },

  pillars: [
    {
      title: "Direkt am Naturbadesee",
      text: "Mit 1,2 Hektar Wasserfläche und großer Liegewiese liegt der Naturbadesee unmittelbar am Platz — für Campinggäste ist der Eintritt frei.",
      image: { src: `${IMG}/gallery-4ef9be0e1b.webp`, alt: "Luftaufnahme von Weinland Camping am Naturbadesee in Gleinstätten" },
    },
    {
      title: "38 ebene Stellplätze",
      text: "Auf 15.000 m² findest du 38 großzügige Touristenstellplätze mit Stromanschluss — Raum genug für Wohnwagen, Wohnmobil und Zelt.",
      image: { src: `${IMG}/gallery-ed20a44a92.webp`, alt: "Stellplatz mit Wohnwagen und Vorzelt bei Weinland Camping" },
    },
    {
      title: "Familiär seit 1953",
      text: "Karlheinz Jammernegg und sein Team führen den Platz persönlich — vom holländischen Klub ANWB einst zum schönsten Campingplatz Europas gewählt.",
      image: { src: `${IMG}/gallery-8c2548a3bf.webp`, alt: "Empfang und Einfahrt von Weinland Camping" },
    },
  ],

  usps: ["Eigener Naturbadesee", "38 Stellplätze mit Strom", "Hundebadestrand", "E-Bikes & Radverleih", "Brötchenservice", "Familiär seit 1953"],

  trust: {
    heading: "Seit 1953 ein Stück Südsteiermark",
    headingEmphasis: "1953",
    intro:
      "Ein gewachsener Familienplatz am Ortsrand von Gleinstätten: barrierefreie Sanitäranlagen nach ADAC-5-Sterne-Standard, kurze Wege zu Lokalen und Bäcker und ein Badesee, an dem Kinder den ganzen Tag draußen sind.",
  },

  awards: [{ label: "Vom ANWB zum schönsten Campingplatz Europas gewählt" }],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-df45b7ebd2.webp`, alt: "Naturbadesee mit Steg und Liegewiese bei Weinland Camping" },
  },

  breather: {
    image: { src: `${IMG}/gallery-24f418f7d3.webp`, alt: "Herbstliche Weinberge im Naturpark Südsteiermark" },
    line: "Zwischen Weinbergen und Kürbisfeldern beginnt der Süden.",
  },

  camping: {
    heading: "Dein Platz am Naturbadesee",
    intro:
      "Vom Stellplatz direkt auf die Liegewiese: moderne Anlagen, viel Komfort und alles, was einen entspannten Campingtag in der Südsteiermark ausmacht.",
    features: [
      {
        title: "Große Liegewiese",
        text: "8.000 m² Liegewiese mit Schatten spendenden Bäumen und Sonnenschirmen — direkt am Naturbadesee, ideal zum Sonnen und Ausspannen.",
        image: { src: `${IMG}/gallery-d2600c02a3.webp`, alt: "Liegewiese und Naturbadesee von Weinland Camping im Sommer" },
      },
      {
        title: "Moderne Sanitäranlagen",
        text: "2018 neu gebaut nach ADAC-5-Sterne-Kriterien: barrierefrei, beheizt, mit Einzelwaschkabinen, Wickelraum und einem Gäste-Mietbadezimmer.",
        image: { src: `${IMG}/gallery-6ce994e19b.webp`, alt: "Barrierefreies Bad der neuen Sanitäranlagen von Weinland Camping" },
      },
      {
        title: "Stellplätze mit Strom",
        text: "38 ebene Touristenstellplätze mit 16-A-Stromanschluss und beschilderter Zufahrt — genügend Raum für dein persönliches Campingvergnügen.",
        image: { src: `${IMG}/gallery-c69d068343.webp`, alt: "Stellplatz mit Wohnmobil und Vorzelt bei Weinland Camping" },
      },
      {
        title: "Beachvolleyball & Tischtennis",
        text: "Ein gepflegter Beachvolleyballplatz, Tischtennis und viel Wiese sorgen für Bewegung und Spaß zwischen zwei Sprüngen in den See.",
        image: { src: `${IMG}/gallery-875ea83272.webp`, alt: "Beachvolleyballplatz bei Weinland Camping" },
      },
      {
        title: "E-Bike- & Radverleih",
        text: "Direkt am Sulmtalradweg R1: vier E-Räder und Trekkingbikes warten auf dich, um die Weinberge der Südsteiermark zu erkunden.",
        image: { src: `${IMG}/activity-7425f2989b.webp`, alt: "E-Bikes vor dem Empfang von Weinland Camping" },
      },
      {
        title: "Naturbadesee inklusive",
        text: "Klares Wasser bei 23 bis 25 Grad, Nichtschwimmerbereich und Floßinsel — für Campinggäste ist der Eintritt zum Badesee frei.",
        image: { src: `${IMG}/gallery-ec49d303ad.webp`, alt: "Badegäste im Naturbadesee von Weinland Camping" },
      },
    ],
  },

  kinder: {
    heading: "Hier wird Kindern nicht langweilig",
    intro:
      "Spielplatz, Kleinkinderbecken und ein seichter Einstieg in den Badesee — bei uns dürfen die Kleinen den ganzen Tag draußen sein.",
    features: [
      {
        title: "Großer Spielplatz",
        text: "Klettern, rutschen und schaukeln: Der bunte Spielplatz mit Holztürmen liegt mitten am Platz, in Sichtweite der Liegewiese.",
        image: { src: `${IMG}/kids-cedb79c051.webp`, alt: "Spielplatz mit Rutsche bei Weinland Camping" },
      },
      {
        title: "Toben & Klettern",
        text: "Auf den Klettertürmen finden Kinder den ganzen Tag Gesellschaft — hier werden aus Nachbarn schnell Urlaubsfreunde.",
        image: { src: `${IMG}/kids-c23b6453d3.webp`, alt: "Kinder auf dem Klettergerüst am Spielplatz" },
      },
      {
        title: "Spielen am Strand",
        text: "Steg, Wiese und klares Wasser: Mutiger Sprung vom Holzsteg oder Plantschen im seichten Bereich — hier verbringen Kinder den ganzen Tag am Wasser.",
        image: { src: `${IMG}/gallery-280e0e077c.webp`, alt: "Kinder springen vom Steg in den Naturbadesee bei Weinland Camping" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Dein Tag im Sulmtal-Sausal",
    intro:
      "Baden, radeln, wandern: Der Sulmtalradweg führt direkt am Platz vorbei, und die Weinberge der Südsteiermark beginnen gleich hinterm Tor.",
    items: [
      {
        title: "Baden im Naturbadesee",
        text: "Kopfüber ins klare Wasser, dann zurück auf die Liegewiese — der rund 10.000 m² große Badesee gehört für dich als Gast einfach dazu.",
        image: { src: `${IMG}/activity-ef0fccef2f.webp`, alt: "Badegäste springen in den Naturbadesee" },
      },
      {
        title: "Sprungbrett & Floßinsel",
        text: "Sprungbrett, Floßinsel und Nichtschwimmerbereich bringen Abwechslung — bei regelmäßig geprüfter Wasserqualität und 23 bis 25 Grad.",
        image: { src: `${IMG}/activity-b90a9ed53a.webp`, alt: "Familien schwimmen am Sprungbrett und Floßinsel des Naturbadesees" },
      },
      {
        title: "Radtouren im Sulmtal",
        text: "Der familienfreundliche Sulmtalradweg R1 verläuft fast autofrei durch Wälder und Weinhänge — ein E-Bike leihst du dir direkt am Platz.",
        image: { src: `${IMG}/gallery-6c4b68b8a2.webp`, alt: "Radfahrer auf E-Bikes bei Weinland Camping" },
      },
      {
        title: "Wandern im Weinland",
        text: "Zwischen Weinbergen, Kürbisfeldern und Buschenschenken führen unzählige Wege — vom Kunstwanderweg bis zum steilsten Weinberg in Kitzeck.",
        image: { src: `${IMG}/gallery-af62416908.webp`, alt: "Weinberge der Südsteiermark rund um Gleinstätten" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Gleinstätten",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A9 Richtung Slowenien, Abfahrt Hengsberg, dann über Preding nach Gleinstätten — der Platz liegt rund 40 km südlich von Graz.",
      },
      {
        title: "Mit Bahn & Gäste-Taxi",
        text: "Graz erreichst du bequem mit Bus oder Bahn; von dort bringt dich das günstige Sulmtaler Gäste-Taxi direkt bis zum Campingplatz.",
      },
    ],
  },

  galerie: {
    heading: "Sommer in der Südsteiermark",
    headingEmphasis: "Südsteiermark",
    intro:
      "Sonnenuntergänge über den Weinbergen, Morgennebel im Tal und lange Tage am Wasser — ein paar Eindrücke von Weinland Camping.",
    tag: "April bis Oktober",
    moreCount: 40,
    images: [
      { src: `${IMG}/gallery-62761b1ea6.webp`, alt: "Sonnenuntergang über den Weinbergen der Südsteiermark" },
      { src: `${IMG}/gallery-e8690c98a1.webp`, alt: "Klapotetz im Morgenlicht bei Gleinstätten" },
      { src: `${IMG}/gallery-645f03c80b.webp`, alt: "Familie am Eingang von Weinland Camping" },
      { src: `${IMG}/gallery-3b2b10e0c6.webp`, alt: "Morgennebel über den Weinbergen im Sulmtal" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am See",
    headingEmphasis: "am See",
    intro:
      "Wähle Zeitraum und Personen — wir melden uns persönlich mit deiner Verfügbarkeit für Weinland Camping.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise Nebensaison · Stellplatz und Zelt inkl. 2 Erwachsene, jede weitere Person € 9,50 · zzgl. € 2 Nächtigungsabgabe pro Person ab 16 Jahren · nur Barzahlung",
    highlight: { title: "Badesee inklusive", text: "Für Campinggäste ist der Eintritt zum Naturbadesee frei." },
    categories: [
      { id: "stellplatz", label: "Stellplatz inkl. Strom", perNight: 33, perExtraGuest: 9.5 },
      { id: "zelt", label: "Zeltplatz", perNight: 25.5, perExtraGuest: 9.5 },
      { id: "mietcaravan", label: "Mietcaravan", perNight: 72 },
    ],
  },

  kontakt: {
    tel: "+43 (0)3457 3344",
    telHref: "tel:+4334573344",
    mail: "info@weinland-camping.at",
    adresse: "Gleinstätten 230 · 8443 Gleinstätten · Steiermark",
    coords: { lat: 46.7517, lng: 15.3614 },
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Sanitär", href: "#camping" },
    ]},
    { label: "Kinder", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default weinlandCamping;
