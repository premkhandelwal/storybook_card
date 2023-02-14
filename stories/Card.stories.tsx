import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;


export const Small = Template.bind({});
Small.args = {
  label: 'Card',
  members: [
    {
      "firstName": "Prem",
      "lastName": "Prem",
      "titlesRead": 4,
      "imageURL": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    {
      "firstName": "Karan",
      "lastName": "s",
      "titlesRead": 4,
      "imageURL": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    {
      "firstName": "Arjun",
      "lastName": "Arjun",
      "titlesRead": 4,
      "imageURL": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    {
      "firstName": "Arjun",
      "lastName": "Arjun",
      "titlesRead": 4,
      "imageURL": "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652__340.png"
    },
    {
      "firstName": "Meesha",
      "lastName": "Meesha",
      "titlesRead": 4,
      "imageURL": "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
    },
  ]
};
