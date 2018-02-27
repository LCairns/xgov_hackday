##Tasks

1. Make a single page with a title and some introductory text. Put a gov-style ‘Start’ button on it.
2. Add a page with a form asking for Name
3. Add a page with a form asking for date of birth and National Insurance number
4. Add a page with 3 radio buttons, allowing the user to choose API responses from the options:
  * Magic 8 ball answer    
  * A line from a song
  * A famous quote
5. Add some validations to the forms:
  * Check the name is not blank
  * Check the date of birth entered is a valid date and in the past
  * Check the NI number is a valid format (see regex below)
  * Show appropriate error messages if validations are not met
6. Add a summary page showing what has been entered so far
7. Add a button to the summary which posts data to a REST API endpoint and receives a JSON response with the kind of information requested (spec for API below)
8. On the next page, display the API response
9. Change the radio button page so that if the ‘Magic 8 ball’ response is chosen, a text field appears where you can add the question you want an answer to. Display that on the response page too.
10. Add a page that only appears in the sequence if you choose the ‘famous quote’ option to allow the user to choose a quote from either Oscar Wilde, Winston Churchill or Mark Twain