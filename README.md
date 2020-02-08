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

## Screenshots
![Component example](https://github.com/vahanito/oas-ui-example/blob/master/images/component_example.png "Component example")

![Component with properties and parent](https://github.com/vahanito/oas-ui-example/blob/master/images/component_properties_and_parent.png "Component with properties and parent")

![Component with discriminator](https://github.com/vahanito/oas-ui-example/blob/master/images/component_with_disciminator.png "Component with discriminator")

![Homepage - resources search](https://github.com/vahanito/oas-ui-example/blob/master/images/homepage-resources_search.PNG "Homemapge - resources search")

![Resource with parameters, request body, examples and responses](https://github.com/vahanito/oas-ui-example/blob/master/images/resource_parameters_requestbody_examples_responses.png "Resource with parameters, request body, examples and responses")

![Resource parameters](https://github.com/vahanito/oas-ui-example/blob/master/images/resource_params.png "Resource parameters")
