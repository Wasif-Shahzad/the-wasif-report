# Cover images

The header image on an article page comes from the `Cover:` metadata key in the post's
front matter. The value is a path relative to `content/`:

```markdown
Title: My post
Date: 2026-06-27 11:47
Cover: images/my-image.jpg
```

When `Cover:` is omitted, the article page picks one of these at random at build time:

- `content/images/programmer_image.jpg`
- `content/images/programmer-image2.jpg`
- `content/images/programmer-image3.jpg`
