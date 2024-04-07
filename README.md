# Ocial landing page

[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=ispp-2324-ocial_landing-page&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=ispp-2324-ocial_landing-page)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=ispp-2324-ocial_landing-page&metric=bugs)](https://sonarcloud.io/summary/new_code?id=ispp-2324-ocial_landing-page)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ispp-2324-ocial_landing-page&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=ispp-2324-ocial_landing-page)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=ispp-2324-ocial_landing-page&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=ispp-2324-ocial_landing-page)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=ispp-2324-ocial_landing-page&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=ispp-2324-ocial_landing-page)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ispp-2324-ocial_landing-page&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ispp-2324-ocial_landing-page)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=ispp-2324-ocial_landing-page&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=ispp-2324-ocial_landing-page)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ispp-2324-ocial_landing-page&metric=coverage)](https://sonarcloud.io/summary/new_code?id=ispp-2324-ocial_landing-page)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=ispp-2324-ocial_landing-page&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=ispp-2324-ocial_landing-page)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=ispp-2324-ocial_landing-page&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=ispp-2324-ocial_landing-page)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=ispp-2324-ocial_landing-page&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=ispp-2324-ocial_landing-page)

This landing page was made using the template [Astroship](https://github.com/surjithctly/astroship)

## Despliegues configurados:

Este repositorio sigue una estructura GitFlow, donde la rama ``main`` es la de producción,
``develop`` es la de desarrollo para la siguiente versión y cada desarrollador
crea una rama por característica (*feature-based-branching*). Hay despliegues automáticos en cada rama:

* ``main``: https://ocial.es (desplegado usando GitHub Pages y GitHub Actions)
* ``develop``: https://develop.ocial.es (desplegado usando Cloudflare Pages)
* El resto de ramas tendrán despliegues bajo demanda. Al crear un Pull Request, Cloudflare Pages publicará un comentario
  con el enlace en el que se podrá visualizar el despliegue de dicha rama en cuestión.
