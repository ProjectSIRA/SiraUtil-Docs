# Philosophy and Reason

When writing any code for any reason, it should be organized, logical, intuitive, and efficient. The biggest issue with traditional modding and earlier Beat Saber modding is that it quickly can become unorganized, messy, and tightly coupled as the mod grows in size.

SiraUtil aims to fix all of this by providing easy access to Zenject with a strong framework to work with it in Beat Saber as well as provide tools and services which simplify code and streamline workflows.

When used properly, the flow of your mod will be obvious. It will help prevent things like memory leaks, trying to access disposed objects, improper usage of certain APIs, and more. It will also help with people contributing to your mod since the execution of code is more obvious. The modularity of modding the SIRA way can further make game updates less painful, as anything that breaks is contained only within the system that changed.