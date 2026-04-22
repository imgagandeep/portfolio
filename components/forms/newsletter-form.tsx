"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { NewsletterFormSchema } from "@/lib/validations/newsletter";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const form = useForm<z.infer<typeof NewsletterFormSchema>>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof NewsletterFormSchema>) {
    form.reset();
    toast.success("You are successfully subscribe newsletter.");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-2 sm:max-w-sm"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subscribe to our newsletter</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="px-4"
                  placeholder="name@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size="sm" type="submit" variant="default" className="px-4">
          Subscribe
        </Button>
      </form>
    </Form>
  );
}
