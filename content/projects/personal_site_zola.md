+++
title = "Current Personal site: Zola"

[taxonomies]
tags = ["rust", "zola"]

[extra]
date_built = 2022-07-06
date_approximate = false
+++

## The idea
Meta: this current site is also a project! It contains basically no front-end logic except the ornellember stuff. I got the idea to build it with [getzola.org](https://www.getzola.org/) from my fellow Recurser Chris Renfrow. This is a static site rendered from Markdown files, which I saw as a good opportunity to own my own content and move away from Contentful.

## Check it out
* [Source code on Github](https://github.com/0rnella/ornezola)
* [Live](/)

## Making it
For context, I am currently learning Rust in my Recurse batch, and thought this'd be good practice. I was surprised (pleasantly, which I am ashamed to say) by how little (read: no) Rust I had to write to make this site.

The Zola docs were good up until the [Themes section](https://www.getzola.org/documentation/themes/overview/). The issue is that Themes are not just a skin: they are basically full-blown site paradigms (similar to Wordpress themes, except there's very little consistency between Zola themes), and therefore each theme is very opinionated about HTML and content structure. Unfortunately, I couldn't find any themes that follow the content structure laid out in the "Getting started" section, so I just stuck with making my own SCSS so I could have more granular control. The fact that you can't just switch from one theme to the next, and that you'd have to refactor your content and templates from what's laid out in getting started, is *not* obvious from the docs, so I'm thinking I'll propose an improvement. 

To move my content, I couldn't find a straightforward way to export markdown from Contentful, so I copied my [old site](/projects/personal-site-nextjs)'s posts' HTML to an HTML to Markdown converter, and only had to do minimal cleanup. It was smoother than expected!

I then imported my ornellember functionality the old-fashioned way, through an HTML script tag that took in a [bundled version of the library](https://unpkg.com/browse/ornellember@2.2.2/lib/bundle.js). 

## Next steps
I'm going to add more basic functionality for this site, esp. on the SEO side, but I'm pretty happy with it as-is.