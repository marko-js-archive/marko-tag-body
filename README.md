marko-tag-body
==============

# Installation

```
npm install marko-tag-body --save
```

# Usage

```xml
<div>
    <h1>Hello World</h1>
    <p tag-body=(data.renderBody || data.body)>
    </p>
</div>
```

```javascript
template.renderSync({
        body: 'My body content'
    });
```

Output:

```html
<div>
    <h1>Hello World</h1>
    <p>
        My body content
    </p>
</div>
```

A `renderBody()` function is passed as part of the input to the template: 

```javascript
template.renderSync({
        renderBody: function(out) {
            out.write('My body content')
        }
    });
```

Then the output would be the following:

```html
<div>
    <h1>Hello World</h1>
    <p>
        My body content
    </p>
</div>
```

---------

If the value of the `tag-body` is left blank then it will default to `data.renderBody`:

```xml
<div>
    <h1>Hello World</h1>
    <p tag-body>
    </p>
</div>
```

```javascript
template.renderSync({
        renderBody: function(out) {
            out.write('My body content')
        }
    });
```

Output:

```html
<div>
    <h1>Hello World</h1>
    <p>
        My body content
    </p>
</div>
```
