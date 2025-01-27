
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

## Editable Content
```
If you have previously saved data, you can send props as data. After that, you can perform editing operations on it.
Sample Data

const data = [
  {
    id: 1729145639972,
    type: "container",
    data: [
      {
        id: 1729145639973,
        type: "column",
        content: [
          {
            type: "title",
            props: {
              level: 1,
              text: "<p>Click here to edit<strong> this title!</strong></p>",
              alignment: "center",
              classNames: "custom-title",
            },
          },
        ],
      },
      {
        id: 1729145655752,
        type: "column",
        content: [
          {
            type: "button",
            props: {
              text: "Edit Button Text",
              backgroundColor: "#b80000",
              borderRadius: "20px",
              alignment: "center",
            },
          },
          {
            type: "paragraph",
            props: { content: "<p>Click here to edit this paragraph</p>" },
          },
          {
            type: "text",
            props: {
              text: '<p>Click here<strong style="color: rgb(153, 51, 255);"> to edit this textaasdsd</strong></p>',
            },
          },
        ],
      },
    ],
  },
  {
    id: 1729145740140,
    type: "container",
    data: [
      {
        id: 1729145740141,
        type: "column",
        content: [
          {
            type: "image",
            props: {
              src: "https://sehrimbu.com/images/places_image_two-1723977907871-932935019.jpeg",
              alt: "test",
              objectFit: "fill",
              borderRadius: "20px",
              classNames: "custom-image",
            },
          },
        ],
      },
      {
        id: 1729145801028,
        type: "column",
        content: [
          {
            type: "paragraph",
            props: { content: "Click here to edit this paragraph" },
          },
        ],
      },
    ],
  },
];

 <DynamicCMSPanel handleSave={handleSave} data={data} />
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
| handleSave | func |
| data | array |

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
              "src": "https://fakeimg.pl/600x400?text=CLICK+ME!",
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


  
## Support buymeacoffee

[buymeacoffee](https://buymeacoffee.com/kahramantue)

## Demo Application

![app](https://github.com/mertkahramanturk/react-shopping-basic-app/blob/98c1102fbf6858374d8e28e85f43971d79174e3c/11.png)
![app](https://github.com/mertkahramanturk/react-shopping-basic-app/blob/98c1102fbf6858374d8e28e85f43971d79174e3c/77.png)
![app](https://github.com/mertkahramanturk/react-shopping-basic-app/blob/98c1102fbf6858374d8e28e85f43971d79174e3c/22.png)
![app](https://github.com/mertkahramanturk/react-shopping-basic-app/blob/98c1102fbf6858374d8e28e85f43971d79174e3c/33.png)
![app](https://github.com/mertkahramanturk/react-shopping-basic-app/blob/98c1102fbf6858374d8e28e85f43971d79174e3c/44.png)
![app](https://github.com/mertkahramanturk/react-shopping-basic-app/blob/98c1102fbf6858374d8e28e85f43971d79174e3c/55.png)
![app](https://github.com/mertkahramanturk/react-shopping-basic-app/blob/98c1102fbf6858374d8e28e85f43971d79174e3c/66.png)


## Related Projects
[react-dnd](https://www.npmjs.com/package/react-dnd)

## Support buymeacoffee

[buymeacoffee](https://buymeacoffee.com/kahramantue)

## Lisans

License
This project is licensed under the MIT License. See the LICENSE file for more details.


  
