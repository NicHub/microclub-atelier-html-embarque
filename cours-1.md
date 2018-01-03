
**HTML EMBARQUÉ**
=================

# COURS 1


# STRUCTURE MINIMALE D’UNE PAGE HTML 1

Voici la structure minimale pour qu’un document soit considéré comme un document HTML par tous les agents utilisateurs[^AgentsUtilisateur].

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

- `<!DOCTYPE html>`
- `<html></html>`
- `<head></head>`
- `<meta charset=utf-8 />`
- `<title></title>`
- `<body></body>`

Nous aurons besoin d’autres balises pour étoffer nos documents HTML, mais les 6 ci-dessus doivent toujours être présentes.


# LES BALISES

Une balise (ou “tag” en anglais), est composée d’une balise ouvrante et d’une balise fermante.

    <p></p>

Pour la balise ouvrante, la structure est :

- Chevron ouvrant (<)
- Le nom de la balise (p)
- chevron fermant (>)

Pour la balise fermante, la structure est :

- Chevron ouvrant (<)
- Barre oblique (/)
- Le nom de la balise (p)
- chevron fermant (>)

À l’intérieur d’une balise, on peut inclure :

- rien : `<p></p>`
- du texte sans balises : `<p>du texte</p>`
- d’autres balises : `<p>du <i>texte</i></p>`
- plein d’autres balises : `<p><b>du <i>texte</i></b></p>`

Dans le cas où la balise ne contient rien, il existe une notation compacte avec la barre oblique avant le chevron fermant :

    <img />

La norme HTML définit 130 balises différentes que vous pouvez découvrire en suivant les liens ci-dessous.

## À lire

- [Les balises HTML et leur rôle][Les balises HTML et leur rôle]
- [Référence des éléments HTML][Référence des éléments HTML]
- [HTML Element Reference][HTML Element Reference]


# LES ATTRIBUTS

Toutes les balises acceptent des attributs, certains étant obligatoires d’autres optionnels.

Par exemple, la balise `<img>` a deux attributs obligatoires : `src` et `alt`. À noter que l’attribut `alt` est souvent omis dans les pages web que vous rencontrerez. Il est pourtant fortement conseillé, car il s’agit du texte qui remplacera l’image si celle-ci ne peut pas être affichée. Cet attribut est aussi utilisé par les systèmes de lectures pour les malvoyants.

    <img src="image.jpg" alt="image de démo" />

voir <https://developer.mozilla.org/fr/docs/Web/HTML/Element/Img>


# LE DOCTYPE

Exemple

    <!DOCTYPE html>
    <html>
        <head>
            <title>Exemple minimal</title>
        </head>
        <body>
            <p></p>
            <p>du texte</p>
            <p>du <i>texte</i></p>
            <p><b>du <i>texte</i></b></p>
            <img src="test.jpg" />
        </body>
    </html>



[^AgentsUtilisateur]: Un *user agent* ou *agent utilisateur* est une application cliente utilisée avec un protocole réseau particulier ; l'expression est plus généralement employée comme référence pour celles qui accèdent au World Wide Web. Les agents utilisateur du Web vont de la gamme des navigateurs jusqu'aux robots d'indexation, en passant par les lecteurs d'écran ou les navigateurs braille pour les personnes ayant une incapacité.

[Les balises HTML et leur rôle]: https://developer.mozilla.org/fr/Apprendre/HTML/Balises_HTML

[Référence des éléments HTML]: https://developer.mozilla.org/fr/docs/Web/HTML/Element

[HTML Element Reference]: https://www.w3schools.com/tags/
