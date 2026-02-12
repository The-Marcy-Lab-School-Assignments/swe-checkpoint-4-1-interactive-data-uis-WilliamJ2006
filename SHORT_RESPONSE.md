# Short Response Questions

Answer each of these questions completely but concisely. Use the proper technical terminology. You may refer to the [Marcy Lab School Docs](https://marcylabschool.gitbook.io/marcy-lab-school-docs) or Google but do NOT copy and paste definitions or explanations verbatim.

You can earn up to 6 points for each response (3 points for writing quality, 3 points for technical content).

Before submitting your responses, use a spell checker / AI to ensure that you have no grammar or spelling mistakes.

## Question 1: Asynchronous Code

Functions like `fetch()` are "asynchronous". Explain what that means and why it is so important to be able to execute code asynchronously?

**Your Answer:**
Asynchronous means the code starts running but doesn't block later code from running at the same time. It's important to execute code asynchronously because it allows us to run code that takes a long time without waiting for it to finish before running other code. This allows a webpage to load multiple things at once, preventing a function that takes a long time to complete from freezing the rest of the webpage.

## Question 2: GET vs. POST

What is the difference between a `GET` request and a `POST` request? Provide examples in real world applications where each might be used under the hood?

**Your Answer:**
A `GET` request means we're reading data from an API or URL, while `POST` means we're creating or sending data to an API or URL. An example of a `GET` request is using a random image generation API. Since fetch has a default request type of `GET`, when we fetch from the API, we're reading the data and storing it. An example of a `POST` request is a form. When a user submits information on a form, they create data and then send it to the server to store.

## Question 3: What is Vite and Why Use It?

What is Vite? What problem does it solve? And are there alternatives?

**Your Answer:**

Vite is a development server that we use to simulate the HTTP protocol. This is important because of the differences in `File://` and `HTTP://`, those being importing and exporting modules between files, and fetching data from API's over the internet. Both of which will fail and cause a Cross-Origin Resource Sharing error when using `File://`.
