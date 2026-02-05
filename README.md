# react-router

>Creiamo il frontend del nostro mini e-commerce e le sue pagine principali!
>Useremo [Fake Store API](https://fakestoreapi.com/) come backend fittizio per simulare i dati dei prodotti.

## PARTE 1
Installiamo React Router DOM: ==npm i react-router-dom==
Creiamo almeno 3 pagine principali:
- [x] Homepage (con un messaggio di benvenuto o immagine promozionale)
- [x] Chi siamo
- [x]Prodotti (pagina che mostrerà la lista dei prodotti prendendoli da [qui](https://fakestoreapi.com/products))
- [x]Implementiamo una Navbar visibile in tutte le pagine per navigare tra di esse

### BONUS PARTE 1
1. [x] Usiamo i layout per evitare di importare la navbar in tutte le pagine: centralizziamola in un componente <mark>Layout</mark>
    - [x] Gestiamo la classe <mark>active</mark> per i link attivi nella Navbar

2. Nella pagina Prodotti, ogni prodotto deve essere cliccabile (usa `<Link>`)
    - Aggiungiamo la pagina di dettaglio per ogni prodotto, con le informazioni prese da <mark>https://fakestoreapi.com/products/:id</mark>
    - Configuriamo il routing dinamico per leggere l’<mark>id</mark> del prodotto dalla URL

### BONUS PARTE 2
Aggiungiamo una navigazione programmatica che riporti alla pagina di listato se viene cercato un prodotto che non esiste.

Super bonus
: aggiungiamo nella pagina di dettaglio dei pulsanti per navigare al prodotto precedente o successivo (usando useNavigate() programmaticamente)

NOTE
: Aiutatevi riguardando le slide, il live coding e gli ultimi minuti del record in cui presento la traccia.