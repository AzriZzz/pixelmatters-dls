import { Story, Meta } from '@storybook/angular/types-6-0';
import PxlButtonComponent from 'projects/design-system/src/lib/components/atoms/pxl-button/pxl-button.component';

export default {
  title: 'Atom/Button',
  component: PxlButtonComponent,
} as Meta;

const Template: Story<PxlButtonComponent> = (args: PxlButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};