# OAS UI

OpenAPI 3 Specification User Interface (interpreter).

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
1.1.0

## Live demo

[https://vahanito.github.io/oas-ui-example/](https://vahanito.github.io/oas-ui-example/)

## Usage
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>

    <title>OAS UI 3 Usage demo</title>
	
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <script src="https://unpkg.com/oas-ui@latest/dist/bundle.js" type="text/javascript"></script>

    <script type="text/javascript">
		function initialize() {
			showOas.showOas('/spec/url', null , "content");
		}
    </script>
</head>

<body onload="initialize()">
<div id="content"/>
</body>
</html>
```
