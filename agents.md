For building this theme for this static pelican site, we will be using this figma design as the reference: https://sable-boil-40643239.figma.site

I have created the home page myself. the style.css file already contains the colors that I am using.
I will give you reference images in the /reference_images/ folder. I will only give you the images of what is needed. For example, right now only the articles page's images are added.

I have gone artistic with my drawings so if you want some of it anytime please tell me when to do that.
If you want to ask something sometime ask me and add it to agents.md as well.
Make git commits for each small feature/fix/component that you add. I.E a page would be divided into multiple components and their commits.

Questions:
- Articles page: for the placeholder of the middle image (the photo between the article grid and the footer) I used the strong blue `rgb(0, 83, 212)`, the same as the home page's first impression (`.top-container`). Let me know if you meant the lighter `#c6dcff` instead.
- Articles page: the cards loop over the real `articles` (latest 6) instead of hardcoded placeholders, so it currently renders 2 cards because `content/` only has 2 posts. Say the word if you want literal placeholder items in the template.