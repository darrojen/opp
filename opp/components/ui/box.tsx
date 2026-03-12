
import React, { ElementType, ComponentPropsWithoutRef, forwardRef } from 'react';

type BoxProps<C extends ElementType> = {
  as?: C;
  children?: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<C>, keyof { as?: C; children?: React.ReactNode }>;

const Box = forwardRef<HTMLElement, BoxProps<ElementType>>(
  ({ as: Component = 'div', children, ...props }, ref) => {
    return (
      <Component ref={ref} {...props}>
        {children}
      </Component>
    );
  }
);

Box.displayName = 'Box';
export default Box;
