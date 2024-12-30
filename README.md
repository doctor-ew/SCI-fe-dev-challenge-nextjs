# **Sports Card Investor Dev Challenge**

Welcome to the Sports Card Investor Dev Challenge! This task mimics real-world scenarios you’d tackle in our projects, focusing on creating a dynamic and user-friendly card application. Let's see how you solve problems, structure code, and think creatively.

---

## **Challenge Overview**

Your task is to enhance and fix a provided card listing application, making it more engaging and user-friendly. The application should:

1. **Work like [this example](https://jam.dev/c/5bbe3b26-56e4-4778-9f35-ed188e35f096)**:
   - A dropdown filters cards based on health points (HP).
   - Cards can be sorted dynamically using buttons.
   - Fetch card data via an API and display it attractively.

2. **Add exciting animations to the cards**:
   - Use a library like [GSAP](https://greensock.com/gsap/) or your choice of CSS animations.
   - Animations could include hover effects, transitions when cards are sorted, or loading animations.

3. **Address existing lint and test errors**:
   - You might encounter ESLint or Jest errors that prevent the application from running.
   - Fix or suppress these errors as appropriate to ensure a clean development environment.

---

## **Deliverables**

### Submit the following:

1. A link to your **GitHub repository** containing the completed project.
2. **Instructions** on how to run the application locally, included in the `README.md`.

---

## **What We're Looking For**

Your submission will be evaluated on the following criteria:

1. **Problem-Solving Approach**:
   - How do you tackle the various aspects of building and fixing this feature?

2. **Code Structure**:
   - Is your code readable, maintainable, and scalable?

3. **API Handling**:
   - Are data fetching, caching, and state updates handled efficiently?

4. **User Experience**:
   - Are dropdown interactions, data loading, and sorting operations smooth?

5. **Communication**:
   - Keep us updated on your thought process! Share any roadblocks, cool discoveries, or questions you encounter.

---

## **Extra Credit**

Go the extra mile by implementing the following:

- **Dark Mode Support**:
  - Add a toggle that switches the app to a dark theme.

- **Debounce User Input**:
  - Implement input debouncing to avoid excessive API calls when typing in a search field.

---

## **Notes**

- This challenge isn’t about perfection—we want to see how you think, solve problems, and iterate.
- Feel free to use any open-source tools or libraries.
- Have fun, and don’t hesitate to ask questions or showcase unique ideas!

---

The changes made to this challenge were:

- Fixing the test errors
- Cards can be sorted by HP.
- Cards can be sorted by a range of HP numbers.
- Removed the HP numbers that didn't render any data at all
- Updated button styling and hover effects
- Added transitions for sorting and loading
- Cards flip on click 
- Stats are revealed on the back of the cards on flip
- Added Animate.CSS to make future animation and transitions easier to scale
- Added Heroicons for future use as well as labels
- Added a toggle for light and dark mode

Ways I would continue to iterate:

- Update styling to stats
- Update styling to the card fronts to make them more animated
- Improve load time on fetch when user sets a range
- Research more transitions
- Improve colors and typography
- Add additional testing