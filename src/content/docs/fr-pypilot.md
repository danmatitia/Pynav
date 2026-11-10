---
key: "pypilot"
lang: "fr"
slug: "telecommande-pypilot"
title: "Télécommande pypilot sur iPhone et iPad"
description: "Utilisez PyNav avec un pypilot déjà installé et vérifiez la connexion sur le réseau du bord."
related: ["connect", "repeater", "wifi"]
---

## Ce qu’il vous faut à bord

Un pypilot configuré, son accès réseau et un iPhone ou un iPad. Relevez l’adresse du pilote et le service exposé sur votre installation. Le [manuel pypilot](https://pypilot.org/doc/pypilot_user_manual/) explique comment identifier le réseau sur tinypilot et comment accéder à l’interface Web. Sur OpenPlotter, vérifiez également le mode réseau du Raspberry Pi.

## Vérifier le pilote avant de connecter PyNav

Ouvrez d’abord l’interface Web du pilote depuis un appareil sur le même réseau. Comparez le cap et l’état affichés avec votre commande habituelle. Ce contrôle permet de diagnostiquer le réseau avant de passer à l’app.

## Distinguer la commande du flux d’instruments

Une connexion qui affiche le vent ou la vitesse peut recevoir un flux NMEA sans ouvrir la connexion de commande pypilot. Dans PyNav, utilisez le profil pypilot pour la commande. Le guide de connexion ci-dessous vous permet de vérifier la lecture de l’état sans modifier la route du bateau.

## Installer PyNav

Téléchargez PyNav sur l’App Store et gardez votre commande habituelle à portée de main. Si le pilote ne s’affiche pas, reprenez le test avec son interface Web, puis vérifiez le profil sélectionné.
