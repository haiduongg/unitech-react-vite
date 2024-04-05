import { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@ultils/cn";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-[0.375rem] whitespace-nowrap rounded-xl text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground shadow hover:bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				outline:
					"border border-primary bg-background shadow-sm hover:bg-[#ebebeb] hover:shadow-md",
				secondary:
					"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-12 px-4 py-[0.78125rem]",
				sm: "h-9 px-3 py-[0.40625rem]",
				lg: "h-14 px-12 py-[1.03125rem]",
				icon: "h-9 w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { }

const Button: FC<ButtonProps> = ({ className, size, variant, ...props }) => {
	return <button className={cn(buttonVariants({ variant, size, className }))} {...props} ></button>
}

export { Button }