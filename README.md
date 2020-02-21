# OAS UI

OpenAPI 3 Specicifation User Interface (interpreter).

OAS UI allows to visualize API resources based on the given OpenAPI specification v3.

### Main features
* supports OAS v3
* allows to search components and resources
* correctly displays inheritance and attributes ownership
* supports inheritance discriminator definition
* supports complex examples (JSON format in expandable JSON tree view)
* supports property/parameter validation description
* allows to display component detail in resource view
* usable in any language using bundled js
* responsive and user-friendly design

## CDN for bundled js
```https://unpkg.com/oas-ui@latest/dist/bundle.js```

## Current version
1.0.1

## Live demo

[https://oas-ui.herokuapp.com/](https://oas-ui.herokuapp.com/)

## Usage
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <base href="/base/href"/>

    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>

    <title>OAS UI 3 Usage demo</title>
    <script src="https://unpkg.com/oas-ui@latest/dist/bundle.js" type="text/javascript"></script>

    <script type="text/javascript">
		function initialize() {
			showOas.showOas('/base/href', null, '/spec/url', document.getElementById("content"));
		}
    </script>
</head>


<body onload="initialize()">
<div id="content"/>
</body>
</html>
```
