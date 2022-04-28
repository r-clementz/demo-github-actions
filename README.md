# Running three types of tests with GitHub Actions
* Newman (API-tests)
* WDIO (Browser/GUI-test)
* Jest (unit testing)
* Jest (unit testing)

# Step for going live 
* Make a pull 
    git pull
* Copy db-template to db that shall run 
    cp backend/database/bookshop-template.db backend/database/bookshop.db
*Build the project (the backend will then serve the dist folder):
    npm rub build 
* Restart the app 
    pm restart main-app

Note: We make our app/backend main-app when we run it with pm2          