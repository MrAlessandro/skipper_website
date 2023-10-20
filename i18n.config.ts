const messages = {
    it: {
        section1: {
            title: 'Trattoria Skipper<br>Eccellenza tra<br class="hidden lg:inline"><span class="inline lg:hidden">&nbsp;</span>mare e gusto',
            body: `Scopri dove il sapore del mare si fonde con l'eccellenza gastronomica.
                    Benvenuti alla trattoria Skipper, dove l'autenticità e la freschezza sono alla base di ogni piatto.
                    Lasciati sedurre dai sapori prelibati di frutti di mare freschi, dagli aromi mediterranei e
                    dall'arte culinaria dei nostri chef esperti.`
        },
        section2: {
            title: 'Le nostre specialità',
            body: 'Esplora i nostri piatti, un viaggio di sapori unici.<br>Dal mare alla terra.',
            evidenceRecipes: [
                {
                    title: 'Risotto di mare',
                    caption: 'Risotto con frutti di mare'
                },
                {
                    title: 'Penne agli scampi',
                    caption: 'Penne con scampi e salsa di pomodoro'
                },
                {
                    title: 'Tacconi Skipper',
                    caption: 'Maccheroni con pesce sfilettato e funghi'
                },
                {
                    title: 'Mare caldo',
                    caption: 'Insalatina di molluschi e crostacei'
                },
                {
                    title: 'Polpo con patate',
                    caption: 'Insalata di polpo con patate'
                },
                {
                    title: 'Crostone skipper',
                    caption: 'Pane tostato condito con gamberoni e funghi'
                },
            ],
            actionLabel: 'Vedi il menù completo'
        },
        section4: {
            title: 'Cosa dicono di noi',
            reviews: [
                {
                    "text": "Sono rimasto colpito. Un ottimo pranzo di pesce a S. Maria del Giudice? Non avrei immaginato.",
                    "author": "Fabrizio",
                    "date": "Novembre 2022"
                },
                {
                    "text": "Eccellente cucina di pesce! I piatti erano freschi e deliziosi, il servizio cortese e l'atmosfera incantevole. Tornerò sicuramente!",
                    "author": "Alberto",
                    "date": "Aprile 2022"
                },
                {
                    "text": "Passati per caso ma ci siamo trovati benissimo. Consiglio vivamente le penne agli scampi e la grigliata mista. Da provare!",
                    "author": "Monica",
                    "date": "Agosto 2022"
                },
                {
                    "text": "Il cenone di Capodanno con il botto! Cibo e vino squisiti. Buon 2023!!",
                    "author": "Roberta",
                    "date": "Gennaio 2023"
                }
            ]

        },

    },
}


export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'it',
    fallbackLocale: 'it',
    warnHtmlInMessage: 'off', // disable of the Detected HTML in message
    messages: messages
}))
