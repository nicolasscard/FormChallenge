# FormChallenge
A simple form to create new bank account.

It is a challenge

You will have to create a mobile app using the React Native library, with 3 screens:

* CREATE ACCOUNT screen
The "CREATE FREE ACCOUNT" button will only be enabled if the form is valid (all 4 inputs are not empty, email address has the right format and password has at least 4 characters). If the email address is invalid or the password is invalid, the input needs to turn red when pressing outside the input.
By pressing the button, you must simulate an HTTP call to the addParent endpoint and -if the call is successful- navigate to the LINK YOUR BANK screen. If the call is not successful, nothing happens.
By pressing the "Terms of Service" button you will navigate to the TERMS OF SERVICE screen.

* TERMS OF SERVICE screen, this is a static screen with a back button that navigates back to the CREATE ACCOUNT screen.

* LINK YOUR BANK screen, this is a static screen that doesn’t allow the user to navigate back.

The application must follow all best practices.
Designs must match those delivered in Figma
https://www.figma.com/file/6ItyVYJxwI1KiA3oMupCSp/Challenges-Screens
You must use the resources that were delivered
You must use the following packages:
React Native 0.63.4 
React Navigation 4 or 5
React-Native-Linear-Gradient
The code must be delivered in a GitHub public repository.
