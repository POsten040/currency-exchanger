import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

A user should be able to enter an amount(in U.S.dollars), then specify another currency(such as the South Korean won), and submit a form.The user should then see the total amount they entered in converted currency.For example, a user might enter 10 dollars and then see that amount in South Korean won.
Users should be able to convert U.S.currency into at least 5 other types of currency.
If the API call results in an error(any message not a 200 OK), the application should return a notification to the user that states what the error is. (That means the error should show up in the DOM, not in the console.)
If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist. (Note: Even if you use a dropdown menu to specify currencies instead of a form field, you'll still need to add this functionality to your code.)