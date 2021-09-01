## src/pages

This is a place for the VueJS "SMART" Components, in another
words, it's the place where you have the business logic, the
API calls and handle the $emit from the child components.

In addition, it's good to remember that which "Page" is related
to one "route"

Suggestions:
If you have many pages, an idea is creating folders by context:
```
src/pages
  public
     tasks
       Page1
       Page2
     category
       Page3
     project
       Page4
```

OR

```
src/pages
  public
    Auth
      Login
      Signup
    Home
      LandingPage
  private
    Company
      Page1
      Page2
    Project
      Page3
      Page4
```
