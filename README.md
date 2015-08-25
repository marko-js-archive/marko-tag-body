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
    <p tag-body="data.renderBody || data.body">
    </p>
</div>
```

NOTE: If the value of the `tag-body` is left blank then it will default to `data.renderBody`.

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