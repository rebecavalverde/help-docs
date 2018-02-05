---
title: Data and infrastructure
description: Information about Flat's hosting infrastructure
nav: general
pid: data-infra
permalink: en/general/data-infrastructure.html
---

Our platform uses multiple Cloud Infrastructure providers (IaaS) to run Flat. To provide the best performances, security, and service, these providers and datacenters are located in multiple countries. We also replicate data across multiple countries.

## Domain names

If you're using restrictive firewall or proxy server settings, you or your network admin will need to allow (whitelist) certain domains to ensure Flat and related services work as expected.

Allow these domains for Flat and related services:

```
https://*.flat.io
https://*.flat-cdn.com
https://*.flat-embed.com
https://flat-prod-*.s3.amazonaws.com
https://flat-prod-*.*.digitaloceanspaces.com
```

## Providers

Flat uses the following providers for its production infrastructure:

| Provider & Entity Country | Hosting Country |
|:--------------------------|:-----------------------|
| Amazon Web Services, Inc. (US) | US |
| DigitalOcean, LLC (US) | US, NL, SG[^1] |
| OVH UK Ltd. (UK) and OVH SAS (FR) | CA, FR |
| Online SAS (FR) | FR |

We also use some additional CDN providers to serve our static app content (which doesn't contain any User Information or User Content).

[^1]: Our SGP region is being decommissioned as part of our current effort to comply with the GDPR regulation in the EU.