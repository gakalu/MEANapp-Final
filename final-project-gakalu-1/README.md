# CS571 - Mobile Application Development
## Final Project - Pet Records App
### Application specifications and requirements
You will create a mobile application to help house owners to manage the smart devices in their house like Nest cameras, Google Home...
  
House owners will have to sign up for a new account (using a unique email, phone number, full name, password, address). Every time they login in successfully, the application will display 3 tabs:
1. **List of devices**
    * List of devices (name and installed date)
    * Owners is able to add/edit/delete/view a device
    * A device contains name, brand, price and installed date. For example, device = {name: 'living room camera', brand: 'Nest', price: 100, date: new Date()}
2. **Daily Notes**
   * List of notes (header, date)
   * Owner can add/view a note
   * A note includes date, header, device and details. For example, note = {date: new Date(), header: 'living room camera error', details: 'from 9 AM - 11 AM, camera did not show anything. Contacted the support team. They will come tomorrow', device: <device_id here>}
3. **Personal profile**
    * This screen shows the owner's information (email, phone number, full name, password, address)
    * Owners are able to change phone number, password, full name, and address in the screen
    * Owners can log out of the application
  
Your project must include the following:
* Implement a login based system using JSON Web Token (JWT).
* Password should be hased before saving to database
* Use UI Kit.
* Use Expo SDK.
* Use Express/MongoDB for supportive backend REST API. All Express routes should be protected from public access by JWT (except sign up and sign in routes). Persist the app state in AsyncStorage, so users don't need to login everytime they start the app.  
  
This is not a group project, students should not work in groups or share code or copy code from any source. Remember to respect the code honor submission policy. All written code must be original. Presenting something as one’s own work when it came from another source is plagiarism and is forbidden. Plagiarism is a very serious thing in all American academic institutions and is guarded against vigilantly by every professor.    
  
Project will be evaluated based on your code quality (not quantity).  

## Submission Requirements:
The project deadline is Tuesday 10:00 PM (05/17/2022). Please make sure you submit following requirements before the deadline:  
* Detailed project plan for your daily performance (day/task/time) and submit it with your code.
* Documentation file with full details about your backend API and frontend mobile app design structure.   

**We do not have any presentation.** 
  
**Good luck and happy coding!**
