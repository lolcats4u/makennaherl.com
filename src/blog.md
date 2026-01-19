---
title: 'Makennas Ramblings of Various degrees of Sanity'
layout: 'layouts/feed.html'
pagination:
  data: collections.blog
  size: 5
# The reason we add /index.html to the end of our permalink string is because Eleventy can literally generate whatever file you want. So if your permalink equates to blog/1, it’ll create a plain text file called 1 inside of your blog output directory.
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---
The latest articles from around the the ether, demonstrating my hairbrained weirdness.
