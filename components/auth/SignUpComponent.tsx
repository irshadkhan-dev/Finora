"use client";

import React, { useState } from "react";
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

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { AuthFormSchema } from "@/types/authFormTypes";
import { SignInWithCredentials, SignUpWithCredentials } from "@/lib/actions";
import { useRouter } from "next/navigation";

const AuthFormComponent = ({ type }: { type: string }) => {
  const router = useRouter();

  const formSchema = AuthFormSchema(type);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      if (type === "sign-up") {
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          email: data.email!,
          password: data.password!,
          address1: data.address1!,
          state: data.state!,
          postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!,
        };

        const newUser = await SignUpWithCredentials(userData);

        setUser(newUser);
      }

      if (type === "sign-in") {
        const response = await SignInWithCredentials({
          email: data.email,
          password: data.password,
        });

        if (response) router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      <div className="flex items-center text-2xl font-bold gap-1 ">
        <img src="/icons/logo.svg" className="w-8 h-8 shrink-0" />
        <span>Finora</span>
      </div>

      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-semibold">
          {type === "sign-up" ? "Sign up" : "Sign in"}
        </h1>
        <p className="text-zinc-600">Please enter your details.</p>
      </div>

      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          {type === "sign-up" && (
            <>
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
                name="address1"
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
                        <Input
                          placeholder="ex: NY"
                          {...field}
                          className="h-10"
                        />
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
                        <Input
                          placeholder="ex: 5600"
                          {...field}
                          className="h-10"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="dateOfBirth"
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
            </>
          )}

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

          <Button
            className="w-full"
            size={"lg"}
            variant={"default"}
            type="submit"
          >
            {type === "sign-up" ? "Sign up" : "Sign in"}
          </Button>

          <div className="flex justify-center">
            <p>
              {type === "sign-up"
                ? "Already have an account?"
                : "Dont have an account?"}
              <span className="text-primary">
                <Link href={"/login"}>
                  {" "}
                  {type === "sign-up" ? "Sign in" : "Sign up"}
                </Link>
              </span>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AuthFormComponent;
