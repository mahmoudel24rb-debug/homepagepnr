# Déploiement du site racine pionniersdetouraine.fr

## Builds

- `npm run build` : démo GitHub Pages (basePath `/homepagepnr`, noindex, robots disallow). Se déploie automatiquement à chaque push sur main.
- `npm run build:prod` : production racine (sentinelle `NEXT_PUBLIC_BASE_PATH='/'`, indexable, canonicals et sitemap sur pionniersdetouraine.fr, post-traitement des url() CSS). Zip du contenu de `out/` à extraire dans `public_html` via cPanel.

## Checklist de bascule (jour J, dans cet ordre)

Prérequis : la boutique clonée sur shop.pionniersdetouraine.fr est validée (fait le 21/08/2026).

1. **Sauvegarde complète du WordPress racine** : cPanel → Gestionnaire de fichiers → compresser `public_html` en zip (le télécharger) ; phpMyAdmin → exporter la base `feku1846_pdt`. Ne rien supprimer côté bases.
2. **Re-synchroniser la boutique si besoin** : si des commandes ou modifications ont eu lieu sur le site racine depuis le clone du 21/08, refaire l'export/import de base vers `feku1846_shop` + `wp search-replace` (procédure du 21/08, ~10 min).
3. **Webhooks de paiement** : chez le prestataire (Stripe/PayPal/...), mettre à jour les URLs autorisées et webhooks de l'ancien domaine vers `shop.pionniersdetouraine.fr`. Vérifier une commande test sur shop après bascule.
4. **Vider `public_html`** (tout sauf `.well-known` et `cgi-bin`) puis **extraire le zip du site racine** (`pionniersdetouraine-site.zip`). Le `.htaccess` inclus porte les redirections 301 de toutes les anciennes URLs WordPress (e-commerce vers shop.*, sponsors vers /partenaires/, nous-contacter vers /contact/, adhesions vers le site recrutement, cookies vers la politique de confidentialité).
5. **Indexation de la boutique** : décider du réglage de shop.* (Réglages → Lecture dans son admin). Elle est actuellement indexable.
6. **Vérifications immédiates** : la home s'affiche, 3 à 4 anciennes URLs redirigent bien (ex. /boutique/, /sponsors/, /nous-contacter/), le formulaire /contact/ envoie, https/www redirigent.
7. **Search Console** : propriété pionniersdetouraine.fr (domaine racine), soumettre https://pionniersdetouraine.fr/sitemap.xml.
8. **Ensuite seulement, chantier recrutement** : retirer le blog du site recrutement et poser la redirection 301 `blog/* -> https://pionniersdetouraine.fr/blog/*` dans son .htaccess, rebuild + redéploiement du zip recrutement, sitemap recrutement réduit. (Ne JAMAIS faire cette étape avant que la racine soit en ligne.)
9. Quelques jours plus tard : demander l'indexation des pages principales via l'inspection d'URL, surveiller les 404 dans Search Console.

## À compléter dans le contenu (recherche « À COMPLÉTER » dans src/)

Chiffres du club, palmarès par saison, dates clés, identités de l'organigramme (page en noindex tant que non remplie), montants des formules de partenariat, SIRET/RNA et nom du président (mentions légales).
