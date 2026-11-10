---
key: "wifi"
lang: "fr"
slug: "nmea-2000-wifi"
title: "Passerelle NMEA 2000 Wi-Fi pour iPhone et iPad"
description: "Vérifiez les formats de sortie de votre passerelle avant de choisir un profil PyNav."
related: ["repeater", "pypilot"]
status: "protocol"
---

## Du capteur à l’application

Suivez le trajet de la donnée. Le capteur envoie un message au réseau NMEA 2000. La passerelle publie ensuite un flux sur le réseau IP. PyNav lit ce que la passerelle publie. La mention « NMEA 2000 Wi-Fi » sur la boîte ne suffit donc pas à identifier le flux reçu par l’app.

## Vérifier le format et le transport

Dans le manuel du modèle exact, cherchez la sortie réseau. Relevez le format, l’adresse, le port et le transport. Un flux traduit en phrases NMEA 0183 peut exposer un ensemble de données différent d’un flux NMEA 2000 brut. Vérifiez également les données que la passerelle transmet et celles que PyNav peut afficher.

## Comparer deux passerelles

Le [manuel Yacht Devices YDWG-02](https://www.yachtd.com/downloads/ydwg02.pdf) et le [guide Digital Yacht NavLink2](https://digitalyacht.support/product/navlink2/) permettent d’identifier les modes réseau de chaque modèle. Ces deux références sont des pistes d’essai. Aucune validation PyNav par modèle n’est documentée ici.

## Tester l’affichage avant de choisir une passerelle

Si vous avez déjà une passerelle, commencez avec une valeur connue comme le vent ou la vitesse. Notez le modèle, le firmware, le mode de sortie et le résultat. Si vous envisagez un achat, demandez au fabricant quel format et quelles données le modèle transmet. Le guide répétiteur ci-dessous détaille la vérification à bord.
