# How to add your own project pictures

1. Place your image files in this folder (`public/images/projects/`). For example, you might add an image called `my-new-logo.png`.
2. Open `src/data/projects.ts` in your editor.
3. Find the project you want to update (or add a new one).
4. Change the `thumbnail` property to point to your new image:
   `thumbnail: "/images/projects/my-new-logo.png",`
5. You can also update the `gallery` array with multiple images for the project details page:
   ```ts
   gallery: [
     "/images/projects/my-new-logo.png",
     "/images/projects/mockup1.jpg"
   ],
   ```
6. Save the file and the site will automatically update!
