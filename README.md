
# MICROCLUB — COURS HTML EMBARQUÉ SUR ESP8266

<https://nichub.github.io/microclub-atelier-html-embarque/>





# Synchronisation des fichiers du cours

> Je propose 4 méthodes différentes pour synchroniser les fichiers du cours. Choisissez celle qui vous convient.

- [Avec l’interface graphique *GitHub Desktop*][1]
- [En ligne de commande avec *Bash* sur *Linux* et *macOS*][2]
- [En ligne de commande avec *CMD* pour *Windows*][3]
- [En téléchargeant l’archive ZIP][4]

[1]: #synchronisation-des-fichiers-du-cours-avec-linterface-graphique-github-desktop
[2]: #synchronisation-des-fichiers-du-cours-en-ligne-de-commande-avec-bash-sur-linux-et-macos
[3]: #synchronisation-des-fichiers-du-cours-en-ligne-de-commande-avec-cmd-pour-windows
[4]: #synchronisation-des-fichiers-du-cours-en-téléchargeant-larchive-zip





# Synchronisation des fichiers du cours avec l’interface graphique *GitHub Desktop*

> La synchronisation en mode graphique n’est disponible que pour *Windows* et *macOS*.
> Il est nécessaire de créer un compte sur [GitHub](https://github.com/join) pour que ça fonctionne.

> Pour les utilisateurs de *Linux*, [voir ci-dessous][2].

## Pour la première synchronisation

- Se connecter à son compte GitHub <https://github.com/login>.
- Télécharger et installer l’application *GitHub Desktop* <https://desktop.github.com/>.
- Ouvrir l’application *GitHub Desktop*.
- Aller sur la page du projet dans votre navigateur <https://github.com/NicHub/microclub-atelier-html-embarque>.
- Cliquer sur le bouton vert “Clone or download” puis sur le bouton “Open in Desktop”. Votre navigateur vous demandera “Ouvrir GitHub ?”. Acceptez en cliquant sur le bouton “Ouvrir GitHub”.
- Dans l’application *GitHub Desktop* une fenêtre s’ouvre et vous permet de choisir l’emplacement des fichiers du cours. Choisissez le dossier de destination et cliquez sur “OK”.
- *GitHub Desktop* télécharge les fichiers du cours.

## Pour les synchronisations suivantes

La procédure ci-dessus ne doit être exécutée qu’une fois. Les synchronisations suivantes se font de la manière suivante :

- Ouvrir *GitHub Desktop*.
- Cliquer sur le nom du dépôt “atelier-html-embarque” dans la colonne de gauche.
- Cliquer sur le bouton “Sync” en haut à droite.





# Synchronisation des fichiers du cours en ligne de commande avec *Bash* sur *Linux* et *macOS*

> Le logiciel `git` est préinstallé sur la plupart des systèmes *Linux* et *macOS*. Pour vérifier que c’est bien le cas, il vous suffit de taper la commande suivante :

	which git

> La version de `git` n’a pas d’importance, car nous n’utiliserons que les commandes `clone` et `pull`.

## Pour la première synchronisation

	cd ~/Desktop
	git clone https://github.com/NicHub/microclub-atelier-html-embarque.git
	cd microclub-atelier-html-embarque

## Pour les synchronisations suivantes

	cd ~/Desktop/microclub-atelier-html-embarque
	git pull





# Synchronisation des fichiers du cours en ligne de commande avec *CMD* pour *Windows*

> Le logiciel `Git Shell` doit être installé au préalable en installant l’application graphique *GitHub Desktop*.

## Pour la première synchronisation

- Installer *GitHub Desktop*.
- Accepter l’installation de *Git Shell*.
- Ouvrir *Git Shell* en cliquant sur l’icône en forme de roue dentée en haut à droite de *GitHub Desktop* et en cliquant sur “Open in Git Shell”.
- Copier-coller les commandes ci-dessous dans *Git Shell* :

```
cd "%USERPROFILE%\Desktop\"
git clone https://github.com/NicHub/microclub-atelier-html-embarque.git
cd microclub-atelier-html-embarque
```

## Pour les synchronisations suivantes

	cd "%USERPROFILE%\Desktop\microclub-atelier-html-embarque"
	git pull





# Synchronisation des fichiers du cours en téléchargeant l’archive ZIP

> Cette méthode est déconseillée, car vous devrez télécharger à nouveau cette archive après chaque mise à jour des fichiers du cours ! Cependant, c’est la plus rapide et la plus facile à mettre en œuvre.

Vous pouvez télécharger les fichiers du cours dans une archive ZIP en cliquant sur ce lien :
<https://github.com/NicHub/microclub-atelier-html-embarque/archive/master.zip>




