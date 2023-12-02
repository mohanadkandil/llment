import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white flex-col items-center justify-center p-8">
      <Card className="w-full rounded-[24px] bg-[#F1F5F9] border-0 px-8">
        <div className="flex flex-col gap-2 py-8">
          <h1 className="font-semibold text-4xl">Hello User</h1>
          <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex flex-col min-h-screen dark:bg-gray-900">
          <div className="flex flex-col w-full h-full justify-between">
            <div className="flex flex-row justify-around w-full p-6 flex-wrap overflow-auto">
              <Card className="flex flex-col w-72 h-auto rounded-xl p-6 bg-white shadow-lg dark:bg-gray-800 m-2">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                    Title of the Card
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col space-y-6 mt-6">
                  <Button className="bg-gray-100 p-4 rounded-full dark:bg-gray-700">
                    <p className="text-sm text-gray-800 dark:text-gray-300">
                      Content box 1
                    </p>
                  </Button>
                  <Button className="bg-gray-100 p-4 rounded-full dark:bg-gray-700">
                    <p className="text-sm text-gray-800 dark:text-gray-300">
                      Content box 2
                    </p>
                  </Button>
                  <Button className="bg-gray-100 p-4 rounded-full dark:bg-gray-700">
                    <p className="text-sm text-gray-800 dark:text-gray-300">
                      Content box 3
                    </p>
                  </Button>
                </CardContent>
              </Card>
              <Card className="flex flex-col w-72 h-auto rounded-xl p-6 bg-white shadow-lg dark:bg-gray-800 m-2">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                    Title of the Card
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col space-y-6 mt-6">
                  <Button className="bg-gray-100 p-4 rounded-full dark:bg-gray-700">
                    <p className="text-sm text-gray-800 dark:text-gray-300">
                      Content box 1
                    </p>
                  </Button>
                  <Button className="bg-gray-100 p-4 rounded-full dark:bg-gray-700">
                    <p className="text-sm text-gray-800 dark:text-gray-300">
                      Content box 2
                    </p>
                  </Button>
                  <Button className="bg-gray-100 p-4 rounded-full dark:bg-gray-700">
                    <p className="text-sm text-gray-800 dark:text-gray-300">
                      Content box 3
                    </p>
                  </Button>
                </CardContent>
              </Card>
              <Card className="flex flex-col w-72 h-auto rounded-xl p-6 bg-white shadow-lg dark:bg-gray-800 m-2">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                    Title of the Card
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col space-y-6 mt-6">
                  <Button className="bg-gray-100 p-4 rounded-full dark:bg-gray-700">
                    <p className="text-sm text-gray-800 dark:text-gray-300">
                      Content box 1
                    </p>
                  </Button>
                  <Button className="bg-gray-100 p-4 rounded-full dark:bg-gray-700">
                    <p className="text-sm text-gray-800 dark:text-gray-300">
                      Content box 2
                    </p>
                  </Button>
                  <Button className="bg-gray-100 p-4 rounded-full dark:bg-gray-700">
                    <p className="text-sm text-gray-800 dark:text-gray-300">
                      Content box 3
                    </p>
                  </Button>
                </CardContent>
              </Card>
              <Card className="flex flex-col w-72 h-auto rounded-xl p-6 bg-white shadow-lg dark:bg-gray-800 m-2">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                    Title of the Card
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col space-y-6 mt-6">
                  <Button className="bg-gray-100 p-4 rounded-full dark:bg-gray-700">
                    <p className="text-sm text-gray-800 dark:text-gray-300">
                      Content box 1
                    </p>
                  </Button>
                  <Button className="bg-gray-100 p-4 rounded-full dark:bg-gray-700">
                    <p className="text-sm text-gray-800 dark:text-gray-300">
                      Content box 2
                    </p>
                  </Button>
                  <Button className="bg-gray-100 p-4 rounded-full dark:bg-gray-700">
                    <p className="text-sm text-gray-800 dark:text-gray-300">
                      Content box 3
                    </p>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex justify-center py-4 dark:bg-gray-800">
            <Input
              aria-label="Search"
              className="w-1/2 px-4 py-2 rounded-full text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Search..."
              type="search"
            />
          </div>
        </div>
      </Card>
    </main>
  );
}
