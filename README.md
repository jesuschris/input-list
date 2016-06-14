<h1>input-list</h1>
A super simple <strong>&lt;input-list&gt;</strong> component built from raw JS, CSS, and HTML.

Designed to be utilized within normal HTML forms with little to no additional scripting, this component provides an easy to use list interface for your users, and a POSTable, URL encoded JSON array of list elements for your server! Awesome!

After preliminary testing, this should be compatible with most modern browsers. ;)
<br>
<br>

<h2>Demo</h2>
A working demo can be found <a href='https://jsfiddle.net/0x29A/35ko84gd/'>here</a>. Thanks JSFiddle!

In this demo, two <strong>&lt;input-list&gt;</strong> components have been added to a mock-up survey form. Values can be added to these components by using the '+' buttons, and individually removed using the '-' buttons.

The user can view the serialized contents of the form's POST data by clicking the 'submit' button.
<br>
<br>

<h2>How to Use</h2>
Using the <strong>&lt;input-list&gt;</strong> component is quite simple. First import the project files...

```
<!-- input-list CSS base styles -->
<link rel="stylesheet" type="text/css" href="/css/input-list.css">

<!-- input-list javascript -->
<script type="text/javascript" src="/js/input-list.js"></script>
```

...then place the <strong>&lt;input-list&gt;</strong> component declaration in a form, or anywhere else on your page.

```
<!-- input-list declaration -->
<input-list name="simpleList">
  <input-list-header>Simple List</input-list-header>
  <input-list-comment>Feel free to enter all kinds of simple stuff into this list. Wow.</input-list-comment>
</input-list>
```

The rest of the list structure is dynamically generated using javascript.

Any values added to the list are recorded in a URL encoded JSON array on a hidden input form element. For example, if the above component were to be placed in an HTML form, the values 'Chester' and 'Lauren' added to the list, and the form were to be submitted, the following would appear in the form's serialized POST data:

```
simpleList=%255B%2522Chester%2522%252C%2522Lauren%2522%255D
```
