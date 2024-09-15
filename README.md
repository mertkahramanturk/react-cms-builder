
# React CMS - DynamicCMSPanel

DynamicCMSPanel is a flexible drag-and-drop content management system (CMS) for React applications. It allows users to dynamically build HTML content with customizable components like text, title, paragraph, images, banner, videos, buttons, and more.

## Installation
To install this package, run the following command:

```javascript
npm install react-cms-builder

```

## Usage

```
import React from 'react';
import { DynamicCMSPanel } from 'react-cms-builder';

const handleSave = (data) => {
  console.log('Saved JSON:', data);
  // You can send the JSON to a server or store it in localStorage here
};

const MyApp = () => (
  <div>
    <h1>Dynamic CMS</h1>
    <DynamicCMSPanel handleSave={handleSave} />
  </div>
);

export default MyApp;
```

## Components Overview
DynamicCMSPanel provides the following components, which can be dragged from the sidebar and dropped into the canvas to build a page:

- Container: Main container that can hold multiple columns.
- Column: Used to layout components inside a container. You can add multiple columns within a container.
- Text: A block of text that can be customized with rich text editing features.
- Image: Add and customize images, with properties like src, alt, and objectFit.
- Button: Add buttons with customizable styles, onClick actions, and other attributes.
- Video: Embed videos from YouTube or other sources with options like controls, autoPlay, and borderRadius.
- Title: Add headings (h1, h2, etc.) to your layout.
- Paragraph: Add paragraphs with customizable text.
- Banner: Add banners with customizable text and background images or colors.

### DynamicCMSPanel props

| Props             | type                                                                |
| ----------------- | ------------------------------------------------------------------ |
| handleSave | func 

### DynamicCMSRenderer
To display the data created with DynamicCMSPanel on the screen
```
import React from 'react';
import { DynamicCMSRenderer } from 'react-cms-builder';

const MyApp = () => (
  <div>
    <h1>Dynamic CMS Render</h1>
    <DynamicCMSRenderer data={data} />
  </div>
);

export default MyApp;
```

## DynamicCMSRenderer props

| Props             | type                                                                |
| ----------------- | ------------------------------------------------------------------ |
| data | array |

## JSON Output

```
[
  {
    "id": 1,
    "type": "container",
    "data": [
      {
        "id": 2,
        "type": "column",
        "content": [
          {
            "type": "text",
            "props": {
              "text": "<p>This is a sample text</p>",
              "alignment": "center"
            }
          },
          {
            "type": "image",
            "props": {
              "src": "https://via.placeholder.com/150",
              "alt": "Sample Image",
              "objectFit": "cover"
            }
          }
        ]
      }
    ]
  }
]

```

## JSON Structure

- id: Unique identifier for each component or container.
- type: Defines the type of the component (container, column, text, image, button, etc.).
- props: Contains the properties of the component (e.g., text, src, alt, alignment...).
## Demo Application

![app]([https://sehrimbu.com/images/11.png](https://github.com/mertkahramanturk/react-cms-builder/blob/master/11.png?raw=true))

## Lisans

License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Support buymeacoffee

buymeacoffee.com/kahramantue

  
