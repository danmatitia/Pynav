---
key: "pypilot"
lang: "en"
slug: "pypilot-remote"
title: "pypilot remote for iPhone and iPad"
description: "Use PyNav with an existing pypilot installation and check that the pilot is reachable on the boat network."
related: ["connect", "repeater", "wifi"]
---

## What you need on board

You need a configured pypilot, access to its network and an iPhone or iPad. Note the pilot address and the service available on your installation. The [pypilot manual](https://pypilot.org/doc/pypilot_user_manual/) explains how to identify the tinypilot network and open the web interface. If you use OpenPlotter, check the Raspberry Pi network mode as well.

## Check the pilot before connecting PyNav

Open the pilot web interface from a device on the same network. Compare its heading and status with your usual controller. This checks the network independently of PyNav.

## Identify the control connection

A connection that shows wind or speed may be receiving NMEA instrument data. Choose the pypilot profile in PyNav to connect to the pilot. The connection guide below shows how to read its status without changing the boat’s course.

## Install PyNav

Download PyNav from the App Store and keep your usual controller within reach. If the pilot does not appear, test the web interface again and check the selected profile.
