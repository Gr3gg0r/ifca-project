# FULL STACK SIMPLE APPLICATION

## Technology stack
### Frontend 

On the frontend folder , the application was built using Quasar Framework. Quasar is a ui library that was built on top of vuejs.

### Backend

On the src folder, the backend Restful server was built using expressJS. The static asset is hosted inside the /src/public/spa.

## The Objective.

1. Answer all question inside the word. The answer can be find in <a href="https://github.com/Gr3gg0r/ifca-project/blob/main/answer.md" target="_blank">HERE</a>

2. Second is to build simple Login and Register page The final result of the application was hosted in <a href="https://ifca.shahfiq.xyz/" target="_blank">HERE</a>

### How to run the application
1. Clone this repository `git clone <url>`
2. For backend , run `yarn install` then `yarn start`
3. For frontend , go to frontend section.

#### Frontend section

The frontend type is SinglePageApplication , so it need a server to run. Since the `axios` is hardcoded, no choice to build the application first replace the build folder on the backend static file `src/public/spa`

To run the application, first you need to have quasar cli. 

or if you don't want to install it , you can use the binary of quasar inside the npx. 

`npx quasar build`

1. Navigate to `cd frontend` 
2. Run `yarn install`
3. To open in dev server `quasar dev` or `npx quasar dev`
4. To build , run `quasar build `or `npx quasar build`
5. The build folder will be `dist/public/spa`
6. Copy and replace at the backend static file for the api communication to work.


#### Quasar cli (Recommended)
```yarn global add @quasar/cli```


