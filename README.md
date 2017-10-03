# instagram-redirect
Instagram redirect generic page

## Why?

Maybe you don't know but using Instagram APIs, they don't let you to specify a custom url like myawesomeapp://auth/instagram but only an https website.


## The Idea

The idea behind the project is a page that you can use as redirect where you can specify the redirect to your app.

## How to use it

1. Add the [https://pascalbros.github.io/instagram-redirect?website=<YOUR_APP_REDIRECT>](https://pascalbros.github.io/instagram-redirect?website=<YOUR_APP_REDIRECT_URI>) to Instagram App Settings Page
2. Add the link to the supported URIs in your app (E.g. [iOS](https://developer.apple.com/library/content/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Inter-AppCommunication/Inter-AppCommunication.html)
3. Handle the link inside your app.

N.B: The page will forward all the GET parameters to the specified URI, instagram puts a token=anjanadodj.... as parameter, it will be delivered to your app as well.

## License

instagram-redirect is licensed under the terms of the *GNU General Public License*. Please see the [LICENSE](LICENSE) file for full details.

