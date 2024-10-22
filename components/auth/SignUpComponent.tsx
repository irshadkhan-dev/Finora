"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { SignUpSchema } from "@/types/authTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const SignUpComponent = () => {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      postalCode: "",
      birthDate: "",
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex flex-col space-y-4 w-full">
      <div className="flex items-center text-2xl font-bold gap-1 ">
        <img src="/icons/logo.svg" className="w-8 h-8 shrink-0" />
        <span>Finora</span>
      </div>

      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-semibold">Sign up</h1>
        <p className="text-zinc-600">Please enter your details.</p>
      </div>

      <Form {...form}>
        <form className="space-y-4">
          <div className="flex gap-x-4">
            <FormField
              name="firstName"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="lastName"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your specific address"
                    {...field}
                    className="h-10"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex space-x-4">
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input placeholder="ex: NY" {...field} className="h-10" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Postal Code</FormLabel>
                  <FormControl>
                    <Input placeholder="ex: 5600" {...field} className="h-10" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="date"
                    placeholder="dd-mm-yyyy"
                    className="h-10"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    {...field}
                    type="email"
                    className="h-10"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    {...field}
                    type="password"
                    className="h-10"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button className="w-full" size={"lg"} variant={"default"}>
            Sign up
          </Button>

          <div className="flex justify-center">
            <p>
              Already have an account?{" "}
              <span className="text-primary">
                <Link href={"/login"}>Login</Link>
              </span>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignUpComponent;
