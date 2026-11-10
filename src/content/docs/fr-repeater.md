---
key: "repeater"
lang: "fr"
slug: "repetiteur-nmea-iphone"
title: "Répétiteur NMEA sur iPhone et iPad"
description: "Affichez vos instruments de bord sur votre téléphone en utilisant un flux réseau pris en charge par PyNav."
related: ["wifi", "pypilot"]
---

## Identifier la sortie de vos instruments

Relevez le modèle de la passerelle ou du serveur installé à bord. Dans sa documentation, cherchez le format de sortie, le transport, l’adresse et le port. Si le réseau du bateau utilise NMEA 2000, la passerelle peut exposer un flux différent sur le Wi-Fi. Vérifiez le format de sortie avant de choisir le profil PyNav.

## Commencer par une seule donnée

Connectez l’iPhone ou l’iPad au réseau du bord. Dans PyNav, configurez le profil qui correspond à la sortie de votre passerelle. Ajoutez une donnée que votre instrument affiche déjà, par exemple la vitesse ou le vent. Comparez les valeurs et les unités. Vérifiez que la source évolue avant d’interpréter une valeur figée.

## Diagnostiquer un cadran vide

Si aucun cadran ne se remplit, vérifiez d’abord le réseau, l’adresse, le port et le transport. Si un seul cadran reste vide, vérifiez que le capteur émet la donnée et que la passerelle la transmet dans le format choisi. Vérifiez aussi que vous comparez la même mesure, par exemple la vitesse sur le fond et la vitesse dans l’eau.

## Télécharger PyNav

Installez PyNav depuis l’App Store et commencez avec un instrument que vous pouvez comparer à votre écran de bord. Consultez ensuite le guide Wi-Fi pour vérifier le format de votre passerelle.
