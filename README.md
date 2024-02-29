# Ocial landing page

This landing page was made using the template [Astroship](https://github.com/surjithctly/astroship)

## Despliegues configurados:

Este repositorio sigue una estructura GitFlow, donde la rama ``main`` es la de producción,
``develop`` es la de desarrollo para la siguiente versión y cada desarrollador
crea una rama por característica (*feature-based-branching*). Hay despliegues automáticos en cada rama:

* ``main``: https://ocial.es (desplegado usando GitHub Pages y GitHub Actions)
* ``develop``: https://develop.ocial.es (desplegado usando Cloudflare Pages)
* El resto de ramas tendrán despliegues bajo demanda. Al crear un Pull Request, Cloudflare Pages publicará un comentario
  con el enlace en el que se podrá visualizar el despliegue de dicha rama en cuestión.
