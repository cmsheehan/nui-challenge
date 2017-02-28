# nui-challenge
user interface assessment  

For testing purposes, I used myjson.com to store the sample data provided in the assessment.
The link for the endpoint is "https://api.myjson.com/bins/znmid".

#Question 5.
When sending a request that gets 10,000 fields as opposed to 2, I would limit the number of fields displayed to help performance. There are several ways this can be done. One way is through pagination. 

If I were to use pagination, I would store the response in a var or cache the result some other way. Then instead of displaying the whole response, I would allow the user to navigate the result through pages. For example, the first page could display the first 50 fields; the second could deisplay the next 50; the third the next 50; and then continue this pattern. This would limit the amount of data being injected into the DOM and ultimately improve performace.

Another way to handle this would be to allow the user to load more feilds in increments, either through infinite scrolling or someother event driven response. This would work similar to pagination, expect that elements would be added instead of switched. Either solution would work for this case, the best option would depend on the user experience needs. 


