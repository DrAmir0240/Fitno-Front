import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      "md:space-x-2",
      className
    )}
    {...props} />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-3xl bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent",
  {
    variants: {
      size: {
        default: "text-xs md:text-sm h-8 md:h-9 px-3 md:px-4",
        sm: "text-xs h-7 px-2",
        lg: "text-sm md:text-base h-10 md:h-11 px-4 md:px-6",
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
)

const NavigationMenuTrigger = React.forwardRef(({ className, children, size = "default", ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle({ size }), "group", className)}
    {...props}>
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true" />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52",
      "md:absolute md:w-auto rounded-3xl",
      "min-w-[280px] md:min-w-[320px]", // افزایش عرض minimum
      className
    )}
    {...props} />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => (
  <div className={cn(
    "absolute left-0 top-full flex justify-center",
    "w-full md:w-auto"
  )}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-3xl border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90",
        "md:w-[var(--radix-navigation-menu-viewport-width)] min-w-[280px] md:min-w-[320px]", // افزایش عرض
        className
      )}
      ref={ref}
      {...props} />
  </div>
))
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}>
    <div
      className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

// Main NavigationMenu component
const NavigationMenu = React.forwardRef(({ 
  className, 
  children, 
  items = [],
  orientation = "horizontal",
  size = "default",
  ...props 
}, ref) => {
  
  const renderMenuItems = () => {
    if (items.length > 0) {
      return items.map((item, index) => (
        <NavigationMenuItem key={index}>
          {item.trigger ? (
            <>
              <NavigationMenuTrigger 
                className={item.triggerClassName}
                size={size}
              >
                {item.triggerLabel}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {item.content}
              </NavigationMenuContent>
            </>
          ) : (
            <NavigationMenuLink
              href={item.href}
              className={cn(
                navigationMenuTriggerStyle({ size }),
                "rounded-3xl"
              )}
            >
              {item.label}
            </NavigationMenuLink>
          )}
        </NavigationMenuItem>
      ))
    }
    
    return children
  }

  return (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={cn(
        "relative z-10 flex max-w-max flex-1 items-center justify-center",
        "w-full md:w-auto", // همیشه ریسپانسیو
        orientation === "vertical" && "flex-col",
        className
      )}
      {...props}>
      <NavigationMenuList className={cn(
        orientation === "vertical" ? "flex-col space-x-0 space-y-1" : "",
        "w-full justify-between md:justify-center" // همیشه ریسپانسیو
      )}>
        {renderMenuItems()}
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  )
})
NavigationMenu.displayName = "NavigationMenu"

export default NavigationMenu