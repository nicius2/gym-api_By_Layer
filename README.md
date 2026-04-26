In this project i was thinking:

How does API design work?

I belive it's more than just the tools and frameworks used, more than a simples CRUD or routes.
It's about the abstract thinking of how each part and business rule works.

A major difference begins when the `Layered Architecture` pattern is adopted, where each layer only communicates with the later immediately below it.

     Client (HTTP)
          |
     Routes / Middlewares
          |
     Controller
          |
     Service (business rule)
          |
     Repository (data acess)
          |
     Database

And a very important question: how can i improve application performance?
- Redis is the best option for this situation. It store data for ultra-fast access and can be reconstructed if lost. 
- being an in-memory database

functional requisites
- [ ] It should be possible to register a user;
- [ ] It should be possible to authenticate a user;
- [ ] It should be possible to retrieve the profile of a logged-in user;
- [ ] It should be possible to obtain the number of check-ins performed by the logged-in user;
- [ ] It should be possible to access the user's check-in history;
- [ ] Users should be able to search for nearby gyms (within a 10 km radius);
- [ ] It should be possible to search for gyms by name;
- [ ] It should be possible for the user to check in at a gym;
- [ ] It should be possible to validate a user's check-in;
- [ ] It should be possible to register a gym;

