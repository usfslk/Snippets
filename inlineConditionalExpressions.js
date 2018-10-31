// You can use either if statements or ternary expressionsµ§§//
// which are available from JS to conditionally render expressions. 
// Apart from these approaches, you can also embed any expressions in JSX
// by wrapping them in curly braces and then followed by JS logical operator &&.

<h1>Hello!</h1>
{
  messages.length > 0 &&
  <h2>
    You have {messages.length} unread messages.
  </h2>
}
