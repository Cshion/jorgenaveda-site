import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { Slot } from "radix-ui"

/* Variantes de marca. El foco visible lo define el estilo global (:focus-visible). */
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border-2 border-transparent text-center font-display leading-tight font-semibold transition-[background-color,color,border-color,transform] duration-200 ease-out-quart select-none active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-brand-deep",
        whatsapp:
          "bg-whatsapp font-bold text-on-brand shadow-[inset_0_0_0_1px_var(--whatsapp-edge)] [text-shadow:0_1px_1px_oklch(0.3_0.09_150/0.25)] hover:bg-whatsapp-hover active:bg-whatsapp-active [&_svg]:drop-shadow-[0_1px_1px_oklch(0.3_0.09_150/0.25)]",
        leaf: "bg-leaf text-ink hover:bg-[oklch(0.82_0.17_142)]",
        outline:
          "border-brand bg-transparent text-brand hover:bg-brand-soft",
        "outline-inverse":
          "border-on-brand/70 bg-transparent text-on-brand hover:bg-on-brand/10",
        ghost: "text-brand hover:bg-brand-soft",
        link: "rounded-md text-brand underline underline-offset-4 hover:text-brand-deep",
      },
      size: {
        default: "min-h-12 px-6 py-2 text-base",
        sm: "min-h-11 px-5 py-1.5 text-base",
        lg: "min-h-14 px-6 py-2.5 text-base sm:px-8 sm:text-lg",
        icon: "size-12",
        "icon-lg": "size-14",
      },
    },
    compoundVariants: [
      { variant: "whatsapp", size: "lg", className: "text-[1.0625rem] sm:text-lg" },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
