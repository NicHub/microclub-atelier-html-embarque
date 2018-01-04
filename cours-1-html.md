
**HTML EMBARQUÉ**
=================

# COURS 1 — HTML


# STRUCTURE MINIMALE D’UNE PAGE HTML

Voici la structure minimale pour qu’un document soit considéré comme un document HTML par tous les [agents utilisateurs][User agent].

    <!DOCTYPE html>
    <html>
        <head>
            <meta charset=utf-8 />
            <title>Structure minimale</title>
        </head>
        <body>
        </body>
    </html>


On voit dans cet exemple que le code HTML est composé de balises. Les balises absolument obligatoires pour qu’un document soit considéré comme un document HTML sont :

    1. <!DOCTYPE html>
    2. <html></html>
    3. <head></head>
    4. <meta charset=utf-8 />
    5. <title></title>
    6. <body></body>

Nous aurons besoin d’autres balises pour étoffer nos documents HTML, mais les 6 ci-dessus doivent toujours être présentes.


# LES BALISES

Une balise (ou “tag” en anglais) est composée d’une balise ouvrante et d’une balise fermante.

    <p></p>

Pour la balise ouvrante, la structure est :

- Chevron ouvrant (`<`)
- Le nom de la balise (dans l’exemple ci-dessus “`p`”)
- chevron fermant (`>`)

Pour la balise fermante, la structure est :

- Chevron ouvrant (`<`)
- Barre oblique (`/`)
- Le nom de la balise (dans l’exemple ci-dessus “`p`”)
- chevron fermant (`>`)

À l’intérieur d’une balise, on peut inclure :

- rien : `<p></p>`
- du texte sans balises : `<p>du texte</p>`
- d’autres balises : `<p>du <i>texte</i></p>`
- plein d’autres balises : `<p><b>du <i>texte</i></b></p>`

Dans le cas où la balise ne contient rien, il existe une notation compacte avec la barre oblique avant le chevron fermant, que l’on nomme “balise autofermante”, par exemple :

    <br />
    <img />
    <meta />

> Dans le cas des balises autofermantes, l’espace avant la barre oblique est optionnel.


Quelques balises intéressantes

    <p>Ceci est un paragraphe.
    Les retours à la ligne doivent y
    être explicitement indiqués avec la balise <br />
    &lt;br />
    </p>

    <p><strong>Texte en gras</strong></p>

    <p><em>Texte en italique</em></p>

    <p><strong>Texte en gras <em>avec une partie italique</em></strong></p>

    <pre>Ceci est un texte préformaté
         dans lequel les passages à la ligne
         et les espaces
         seront respectés</pre>

    <p>Le <span>est</span> utilisé pour formater différemment une partie du texte.</p>

    <div>Le div sert à regrouper des balises.
        <p>...</p>
        <p>...</p>
        <div></div>
    </div>

    <img src="http://ouilogique.com/images/site-logo.png" alt="image de démo" />



La norme HTML définit 130 balises différentes que vous pouvez découvrir en suivant les liens ci-dessous.

## À lire

- [Les balises HTML et leur rôle (MDN fr)][Les balises HTML et leur rôle]
- [Référence des éléments HTML (MDN fr)][Référence des éléments HTML]
- [HTML Element Reference (W3Schools en)][HTML Element Reference]


# LES ATTRIBUTS

Toutes les balises acceptent des attributs, certains étant obligatoires d’autres optionnels.

Par exemple, la balise `<img>` a deux attributs obligatoires : `src` et `alt`. À noter que l’attribut `alt` est souvent omis dans les pages web que vous rencontrerez. Il est pourtant fortement conseillé, car il s’agit du texte qui remplacera l’image si celle-ci ne peut pas être affichée. Cet attribut est aussi utilisé par les systèmes de lectures pour les malvoyants.

    <img src="http://ouilogique.com/images/site-logo.png" alt="image de démo" />

[Voir les attributs possibles de la balise `<img />` sur le site MDN.][img MDN]

Les attributs peuvent être mis à ligne pour faciliter la lecture

    <img
        src="http://ouilogique.com/images/site-logo.png"
        alt="image de démo" />



# LE DOCTYPE

Le doctype est une chaine de caractère présente au début du fichier et qui définit explicitement la version d’HTML utilisée dans le document. Le mot *doctype* est un mot-valise tiré de la locution anglaise *Document type declaration*. Le seul doctype que nous utiliserons dans le cadre de ce cours est le doctype HTML 5 qui se déclare de la manière suivante :

    <!DOCTYPE html>

Si on ne spécifie pas de doctype, alors les agents utilisateurs en *mode quirks*, c’est-à-dire que le moteur de disposition émule le comportement non standard de Navigator 4 et d’Internet Explorer 5. Ce mode permet de prendre en charge les sites web rédigés avant l’adoption généralisée des standards web.

Si on spécifie un doctype, alors les agents utilisateurs utilisent le mode standard total ou éventuellement le mode quasi standard.

Si vous désirez plus d’informations sur ces différents modes, vous pouvez vous référer aux liens ci-dessous. Je vous conseille de toute façon de ne pas jouer avec le feu et de toujours spécifier le doctype HTML 5 (`<!DOCTYPE html>`).

## À lire

- [Document type declaration (Wikipedia en)][Document type declaration]
- [Doctype (Wikipedia fr)][Doctype]
- [Mode quirks de Mozilla (MDN fr)][Mode quirks de Mozilla]
- [Mode presque standard de Gecko (MDN fr)][Mode presque standard de Gecko]


# ESPACE DE NOM

Certains validateurs comme celui de l’éditeur [*Oxygen XML Editor*][oxygenxml.com] imposent que l’espace de nom soit spécifié et ceci se fait dans l’attribut `xmlns` de la balise `<html>` ouvrante :

    <html xmlns="http://www.w3.org/1999/xhtml">
    ...
    </html>


# ÉDITEURS HTML

- [Brackets][brackets.io] (que nous allons utiliser pour ce cours)
- [Sublime Text 3][sublimetext.com] (que j’utilise au quotidien)
- [Atom][atom.io]
- [Oxygen XML Editor][oxygenxml.com]
- [Visual Studio Code][code.visualstudio.com]
- [Notepad++][notepad++]
- [BBEdit][bbedit]
- [Gedit][gedit]
- [Nano][nano]


# VALIDATION

À ce stade, nous pouvons commencer à vérifier que ce que nous faisons est valide avec le validateur du World Wide Web Consortium (W3C)

[W3C Markup Validation Service][validator input]


# LES ENTITÉS

Les entités servent à référencer les caractères par un code qui peut être textuel, décimal ou hexadécimal. Ceci est particulièrement utile dans les cas suivants :

- Le caractère est aussi utilisé dans la grammaire HTML comme les signes &lt;, &gt; et &amp;.
- Le caractère peut être confondu avec un autre ayant un glyphe visuellement identique, comme l’espace insécable qui est visuellement identique à l’espace simple et que l’on représentera par donc par `&nbsp;` ou le trait d’union insécable, identique au trait d’union normal et que l’on représentera par `&#8209;`.
- Le type d’encodage du fichier texte ne permet pas de représenter le caractère. Par exemple si le fichier est encodé en `windows-1257`, le caractère “ç” ne sera pas utilisable directement, mais pourra quand même être représenté avec l’entité `&ccedil;`.
- Le caractère ne s’affiche pas correctement dans votre éditeur, comme le visage cornu souriant (`&#128520;` = &#128520;).
- Le caractère est par nature invisible, comme l’espace sans chasse (`&#8203;`).

> Pour tout nouveau projet, il est important de s’assurer que tous vos fichiers sont encodés en `utf-8` qui est une norme quasi universelle aujourd’hui en occident. Le premier avantage est que vos fichiers seront lisibles par la grande majorité des agents utilisateurs et le deuxième avantage est que vous ne serez pas contraint d’utiliser plus d’entités que nécessaire.

Quelques entités

| Caractère               | Glyphe    | Entité textuelle | Entité décimale | Entité hexadécimale |
| :---                    | :---      | :---             | :---            | :---                |
| Signe inférieur à       | &lt;      | `&lt;`           | `&#60;`         | `&#x3C;`            |
| Signe supérieur à       | &gt;      | `&gt;`           | `&#62;`         | `&#x3E;`            |
| Esperluette             | &amp;     | `&amp;`          | `&#38;`         | `&#x26;`            |
| Espace insécable        | &#160;    | `&nbsp;`         | `&#160;`        | `&#xA0;`            |
| Trait d’union insécable | &#8209;   |                  | `&#8209;`       | `&#x2011;`          |
| Visage cornu souriant   | &#128520; |                  | `&#128520;`     | `&#x1F608;`         |
| Espace sans chasse      | &#8203;   |                  | `&#8203;`       | `&#x200B;`          |


Vous trouverez une liste exhaustive d’entités sur [unicode-table.com][unicode-table.com]


# HTML vs XHTML

La norme HTML 5



## Les différences principales

### Structure du document

- La Doctype `<!DOCTYPE html>` est obligatoire.
- L’attribut `xmlns="http://www.w3.org/1999/xhtml"` est obligatoire.
- Les balises `<html>`, `<head>`, `<title>`, et `<body>` sont obligatoires.

### Balises XHTML

- Les balises doivent être imbriquées correctement
- Les balises doivent être systématiquement fermées ou autofermées.
- Les balises doivent être écrites en minuscules.
- La balise racine `<html>` doit être unique.

### Attributs XHTML

- Les attributs doivent être écrits en minuscules.
- Les valeurs des attributs doivent être entourées de guillemets simples (`'`) ou doubles (`"`).
- La minimisation des attributs est interdite.<br /> `FAUX  ⇒ <input checked />`<br />`JUSTE ⇒ <input checked="checked" />`

> Note : Je préfère souvent les guillemets doubles (`"`) aux guillemets simples (`'`), parce que l’apostrophe sur un clavier standard est aussi un guillemet simple et que ça peut rendre les recherches fastidieuses, particulièrement quand on veut appliquer les règles de typographie soignées qui imposent d’utiliser l’apostrophe typographique (`’`) au lieu de l’apostrophe droite (`'`).



## À lire

[HTML and XHTML (W3Schools en)][HTML and XHTML]



[HTML and XHTML]: https://www.w3schools.com/html/html_xhtml.asp

[unicode-table.com]: https://unicode-table.com/fr/

[nano]: https://www.nano-editor.org/

[gedit]: https://doc.ubuntu-fr.org/gedit

[bbedit]: https://www.barebones.com/products/bbedit/

[notepad++]: https://notepad-plus-plus.org/fr/

[code.visualstudio.com]: https://code.visualstudio.com/

[atom.io]: https://atom.io/

[sublimetext.com]: https://www.sublimetext.com/

[brackets.io]: http://brackets.io/

[User agent]: https://fr.wikipedia.org/wiki/User_agent

[Les balises HTML et leur rôle]: https://developer.mozilla.org/fr/Apprendre/HTML/Balises_HTML

[Référence des éléments HTML]: https://developer.mozilla.org/fr/docs/Web/HTML/Element

[HTML Element Reference]: https://www.w3schools.com/tags/

[Doctype]: https://fr.wikipedia.org/wiki/Doctype

[Document type declaration]: https://en.wikipedia.org/wiki/Document_type_declaration

[Mode quirks de Mozilla]: https://developer.mozilla.org/fr/docs/Web/HTML/Quirks_Mode_and_Standards_Mode

[img MDN]: https://developer.mozilla.org/fr/docs/Web/HTML/Element/Img

[Mode presque standard de Gecko]: https://developer.mozilla.org/fr/docs/Mozilla/Mode_presque_standard_de_Gecko

[oxygenxml.com]: https://www.oxygenxml.com/

[validator.w3.org]: https://validator.w3.org/

[validator input]: https://validator.w3.org/#validate_by_input