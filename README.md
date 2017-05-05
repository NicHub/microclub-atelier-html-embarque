
# MICROCLUB — COURS HTML EMBARQUÉ SUR ESP8266

<https://nichub.github.io/microclub-atelier-html-embarque/>



# Synchronisation des fichiers du cours avec *GitHub Desktop*

> En mode graphique, pour Windows et macOS seulement.
> Pour les utilisateurs de Linux, voir ci-dessous.

## Pour la première synchronisation

- Télécharger et installer l’application *GitHub Desktop* <https://desktop.github.com/>.
- Ouvrir l’application *GitHub Desktop*.
- Aller sur la page du projet dans votre navigateur <https://github.com/NicHub/microclub-atelier-html-embarque>.
- Cliquer sur le bouton vert “Clone or download” puis sur le bouton “Open in Desktop”. Votre navigateur vous demandera “Ouvrir GitHub ?”. Acceptez en cliquant sur le bouton “Ouvrir GitHub”.
- Dans l’application *GitHub Desktop* une fenêtre s’ouvre et vous permet de choisir l’emplacement des fichiers du cours. Choisissez le dossier de destination et cliquez sur “OK”.
- *GitHub Desktop* télécharge les fichiers du cours.

## Pour les synchronisations suivantes

La procédure ci-dessus ne doit être exécutée qu’une fois. Les sychronisations suivantes se font de la manière suivante :

- Ouvrir *GitHub Desktop*.
- Cliquer sur le nom du dépôt “atelier-html-embarque” dans la colonne de gauche.
- Cliquer sur le bouton “Sync” en haut à droite.


# Synchronisation des fichiers du cours avec Bash sur Linux et macOS

## Pour la première synchronisation

	cd ~/Desktop
	git clone https://github.com/NicHub/microclub-atelier-html-embarque.git

## Pour les synchronisations suivantes

	cd ~/Desktop/microclub-atelier-html-embarque
	git pull


# Synchronisation des fichiers du cours avec CMD sur Windows

## Pour la première synchronisation

- Installer *GitHub Desktop*.
- Accepter l’installation de *Git Shell*.
- Copier-coller la commande suivante dans *Git Shell*.

	git clone https://github.com/NicHub/microclub-atelier-html-embarque.git "%USERPROFILE%\Desktop\microclub-atelier-html-embarque"

## Pour les synchronisations suivantes

	cd "%USERPROFILE%\Desktop\microclub-atelier-html-embarque"
	git pull

