# [Blog] IHM AngularJS de consultation des horaires du métro parisien
Application AngularJS permettant de consulter les horaires du métro parisien développée pour illustrer l'article <i><a href="http://blog.inovia-conseil.fr/?p=185">De l'intérêt de Docker Compose (ex Fig) pour le développeur AngularJS</a></i>.

![Overview](https://raw.githubusercontent.com/ksahnine/ratp-gui-angularjs/master/docs/metro-gui.png "Overview")

Ce projet s'appuie sur l'API RESTful de consultation des horaires du métro développé avec Dropwizard et dont le code est disponible dans [son propre repository](https://github.com/ksahnine/trafic-ratp-dropwizard).

## Prérequis
 - Installer [npm](https://www.npmjs.com/)
 - Installer [Bower](http://bower.io/#install-bower)
 - Installer [Grunt](http://gruntjs.com/getting-started)

## Utilisation
Construction du livrable :
```
git clone https://github.com/ksahnine/ratp-gui-angularjs.git
cd ratp-gui-angularjs
npm install
bower install
grunt all
```

## Démarrage de l'environnement avec Docker Compose
L'environnement d'exécution est construit et démarré via Docker Compose.
Il est décrit par le fichier de composition `docker-compose.yml` consultable [ici](https://github.com/ksahnine/ratp-gui-angularjs/blob/master/docker-compose.yml).
 - Pour démarrer l'environnement, utiliser la commande :
```
docker-compose up -d
```

 - Pour arrêter l'environnement, utiliser la commande :
```
docker-compose stop
```

