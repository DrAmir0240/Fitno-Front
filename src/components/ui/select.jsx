"use client"
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-12 w-full items-center justify-between whitespace-nowrap rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-base text-gray-900 dark:text-white shadow-sm transition-all duration-300 ring-offset-white dark:ring-offset-gray-950 data-[placeholder]:text-gray-400 dark:data-[placeholder]:text-gray-500 focus:outline-none focus:ring-2   focus:ring-offset-2  disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 rtl:flex-row-reverse",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50 transition-colors duration-300" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1 text-gray-900 dark:text-white",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4 transition-colors duration-300" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1 text-gray-900 dark:text-white",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4 transition-colors duration-300" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg transition-all duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin] rtl:text-right",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-3 pl-8 pr-2 text-base outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-gray-900 dark:focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors duration-300 rtl:flex-row-reverse",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center rtl:left-auto rtl:right-2">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4 text-blue-500 dark:text-blue-400 transition-colors duration-300" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-right text-gray-700 dark:text-gray-300 transition-colors duration-300",
      className
    )}
    {...props}
  />
))
SelectLabel.displayName = "SelectLabel"

const Select = React.forwardRef(({
  options = [],
  value,
  onValueChange,
  placeholder = "انتخاب کنید",
  disabled = false,
  className,
  contentClassName,
  triggerClassName,
  label,
  groupLabel, 
  separator = false,
  error,
  required,
  ...props
}, ref) => {
  return (
    <div className={cn("grid w-full gap-3", className)}>
      {label && (
        <label
          className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 dark:text-gray-300 transition-colors duration-300",
            error && "text-red-500 dark:text-red-400"
          )}
        >
          {label}
          {required && <span className="text-red-500 dark:text-red-400 mr-1">*</span>}
        </label>
      )}
      
      <SelectPrimitive.Root value={value} onValueChange={onValueChange} disabled={disabled} {...props}>
        <SelectTrigger 
          ref={ref} 
          className={cn(
            triggerClassName,
            error && "border-red-500 dark:border-red-400 focus:ring-red-500 dark:focus:ring-red-400"
          )}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
        </SelectTrigger>
        
        <SelectContent className={cn(contentClassName)}>
          {groupLabel && (
            <SelectLabel>
              {groupLabel}
            </SelectLabel>
          )}
          
          {separator && groupLabel && (
            <SelectPrimitive.Sparator className="-mx-1 my-1 h-px bg-gray-200 dark:bg-gray-700 transition-colors duration-300" />
          )}
          
          {options.map((option, index) => {
            if (typeof option === 'string') {
              return (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              )
            }
            
            if (option.type === 'separator') {
              return (
                <SelectPrimitive.Separator 
                  key={index} 
                  className="-mx-1 my-1 h-px bg-gray-200 dark:bg-gray-700 transition-colors duration-300" 
                />
              )
            }
            
            if (option.type === 'label') {
              return (
                <SelectLabel key={index}>
                  {option.label}
                </SelectLabel>
              )
            }
            
            return (
              <SelectItem 
                key={option.value || index} 
                value={option.value} 
                disabled={option.disabled}
              >
                {option.label || option.text}
              </SelectItem>
            )
          })}
        </SelectContent>
      </SelectPrimitive.Root>

      {error && (
        <p className="text-sm text-red-500 dark:text-red-400 transition-colors duration-300">
          {error}
        </p>
      )}
    </div>
  )
})

Select.displayName = "Select"

export { Select }