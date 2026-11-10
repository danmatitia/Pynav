---
key: "wifi"
lang: "en"
slug: "nmea-2000-wifi"
title: "NMEA 2000 Wi-Fi gateway for iPhone and iPad"
description: "Check the gateway output format before choosing a connection profile in PyNav."
related: ["repeater", "pypilot"]
status: "protocol"
---

## Follow the data from sensor to app

The sensor sends a message onto the NMEA 2000 network. The gateway then publishes a feed over the IP network. PyNav reads the gateway output. The NMEA 2000 Wi-Fi label alone does not identify the format that reaches the app.

## Check the format and transport

Look up the network output in the manual for your exact model. Record its format, address, port and transport. A feed translated to NMEA 0183 sentences may expose different readings from a raw NMEA 2000 feed. Check which readings the gateway forwards and which ones PyNav can display.

## Compare two gateway candidates

Consult the [Yacht Devices YDWG-02 manual](https://www.yachtd.com/downloads/ydwg02.pdf) and the [Digital Yacht NavLink2 support guide](https://digitalyacht.support/product/navlink2/) for the modes offered by each device. These are candidates for testing. PyNav compatibility by model has yet to be documented here.

## Check one reading before choosing a gateway

If you already have a gateway, start with a known reading such as wind or speed. Record the model, firmware, output mode and result. Before buying a gateway, ask the manufacturer which output format and readings it supports. The repeater guide below walks through an onboard check.
