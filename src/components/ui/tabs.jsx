"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      "relative group",
      "data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:w-2 data-[state=active]:after:h-2 data-[state=active]:after:rounded-full data-[state=active]:after:bg-blue-500 data-[state=active]:after:left-[2px] data-[state=active]:after:top-1/2 data-[state=active]:after:-translate-y-1/2",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

const ReusableTabs = React.forwardRef(
  ({ tabs, defaultValue, className, ...props }, ref) => (
    <TabsPrimitive.Root
      ref={ref}
      defaultValue={defaultValue}
      className={cn("w-full flex flex-col", className)}
      {...props}
    >
      <TabsList className="flex-row-reverse">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="cursor-pointer">
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </TabsPrimitive.Root>
  )
);
ReusableTabs.displayName = "ReusableTabs";

export { Tabs, TabsList, TabsTrigger, TabsContent, ReusableTabs };