import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@rozel/utils';

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'ghost';
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonProps | LinkProps;

const base =
  'inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm tracking-[0.18em] uppercase transition duration-200';
const variants = {
  primary: 'border-white text-black bg-white hover:opacity-90',
  ghost: 'border-white/20 text-white hover:border-white/40 hover:bg-white/5'
};

export function Button(props: Props) {
  const variant = props.variant ?? 'primary';
  const className = cn(base, variants[variant], props.className);

  if ('href' in props && props.href) {
    const { children, href, className: _ignore, variant: _variant, ...rest } = props;
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }

  const { children, className: _ignore, variant: _variant, ...rest } = props;
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
