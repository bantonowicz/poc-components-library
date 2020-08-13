// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../projects/button/src/lib/button.component';


export default {
  title: 'Example/Button',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  text: 'Button Text 1',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Button Text 2',
  disabled: true
};
