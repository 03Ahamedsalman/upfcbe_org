import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Auth from "@/hooks/AuthHook";
import { Link } from "react-router";

const Login = ({ className, ...props }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const auth = Auth();
  const { Login } = auth;

  const handleSubmit = (e) => {
    e.preventDefault();
    Login.mutate(login, {
      onSuccess: () => {
        setLogin({ email: "", password: "" });
      },
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [id]: value,
    }));
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      value={login.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>

                    {/* uncomment it if you need Reset Password need */}

                    {/* <div className="flex items-center">
                      <Link
                        to={"/reset-password"}
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </Link>
                    </div> */}
                    
                    <Input
                      id="password"
                      type="password"
                      value={login.password}
                      placeholder="!@#$%^&*()"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
