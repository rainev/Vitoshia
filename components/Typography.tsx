import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline';

const variantTag: Record<Variant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'p',
  subtitle2: 'p',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
};

const variantClass: Record<Variant, string> = {
  h1: 'text-5xl font-bold tracking-tight',
  h2: 'text-4xl font-semibold tracking-tight',
  h3: 'text-3xl font-semibold',
  h4: 'text-2xl font-semibold',
  h5: 'text-xl font-medium',
  h6: 'text-lg font-medium',
  subtitle1: 'text-base font-medium',
  subtitle2: 'text-sm font-medium',
  body1: 'text-base',
  body2: 'text-sm',
  caption: 'text-xs text-muted-foreground',
  overline: 'text-xs uppercase tracking-widest',
};

type TypographyProps = {
  variant?: Variant;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<'p'>, 'className' | 'children'>;

export default function Typography({
  variant = 'body1',
  className = '',
  children,
  ...rest
}: TypographyProps) {
  const Tag = variantTag[variant];
  const classes = `${variantClass[variant]} ${className}`.trim();
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
