const Handlebars = require('handlebars');

const source = `
<!DOCTYPE html>
<html>
<head>
  <title>{{title}}</title>
</head>
<body>
  <h1>{{heading}}</h1>
  <p>{{content}}</p>
</body>
</html>
`;

const template = Handlebars.compile(source);
