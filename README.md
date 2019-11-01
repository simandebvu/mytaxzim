# My Tax Zimbabwe
__________________________________________
A React Based project helping one to know exactly how their tax is calculated in Zimbabwe. </br>
__________________________________________

#### Problem:
With the current Zimbabwe economy. People keep asking and wondering how much they will get paid by the end of the month, best ways to use it, and try get the USD equivalent rate.

#### Solution:
An Application that will help you get a PAYE based tax calculation. Show you value in terms of what you could use it for. And give you a few random __did you knows__

### The Initial Idea:
I'll create a simple (emphasis on __simple__ !) page that will take the user inputs and generate a tax figure. Then I intend to add more flesh to the project and have it be more insightful and thoughtful. 

# Launch Journal:
## Day One Pt. 1 (Static Webpage that will simulate the end product)
<img src="https://i.ibb.co/JpQsdrB/TC-Page-01.png" alt="TC-Page-01" border="0">

### Day Two Pt. 1
Added an simple alert dialog with the tax logic


## Site Will Be Live At : https://myzimtaxapp.herokuapp.com/
<b>Note:</b> The site will take about 5-10 seconds to load since it is running on a free Heroku Dyno. A Heroku Dyno basically follows a ServiceBus-Worker architecture where requests will be recieved by a client facing Web Role that directs them to a ServiceBus which holds a Queue of requests to be processed. 

When you have a free Heroku plan, the web dynos sleep leading to bad loading time on first request since the dyno has to "wake-up". After a period of inactivity it will sleep again. This is why the loading sucks. [More On Dynos Here](https://www.heroku.com/dynos)


## Built With
* [Reactjs](https://reactjs.org/) - A JavaScript library for building user interfaces

## The Team
* [Me](https://github.com/simakk/) - Backend  & Frontend Developer 

## Credits
* [Back to Back SWE](https://github.com/bephrem1/) - Greatest inspiration ever.

