"use client";

import { Icons } from "../shared/icons";
import { Button } from "../ui/button";

export default function WidgetProjects() {
  return (
    <div
      id="widget-projects"
      className="xl:mt-18 relative my-auto overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg shadow-slate-200 dark:border-slate-900 dark:bg-slate-800 dark:shadow-black"
    >
      <section>
        <header className="dark:highlight-white/10 flex flex-col gap-4 space-y-4 rounded-t-xl p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-slate-900 dark:text-white">
              Projects
            </h2>
            <Button className="flex gap-2 bg-blue-500">
              <Icons.add className="size-4" /> New
            </Button>
          </div>
          <div className="!mt-0 flex h-10 w-full items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2 dark:bg-background">
            <Icons.search className="size-5 shrink-0 text-muted-foreground" />

            <input
              type="text"
              placeholder="Filter projects..."
              className="ml-2 flex-1 bg-transparent p-2 outline-none placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
        </header>
        <ul className="grid grid-cols-1 gap-4 bg-slate-50 p-4 text-sm leading-6 dark:bg-slate-900/40 dark:ring-1 dark:ring-white/5 sm:grid-cols-2 sm:px-8 sm:pb-8 sm:pt-6 lg:grid-cols-1 lg:p-4 xl:grid-cols-2 xl:px-8 xl:pb-8 xl:pt-6">
          <li className="dark:highlight-white/10 group cursor-pointer rounded-md bg-white p-3 shadow-sm ring-1 ring-slate-200 hover:bg-blue-500 hover:shadow-md hover:ring-blue-500 dark:bg-slate-700 dark:ring-0 dark:hover:bg-blue-500">
            <dl className="grid grid-cols-2 grid-rows-2 items-center sm:block lg:grid xl:block">
              <div>
                <dt className="sr-only">Title</dt>
                <dd className="font-semibold text-slate-900 group-hover:text-white dark:text-slate-100">
                  API Integration
                </dd>
              </div>
              <div>
                <dt className="sr-only">Category</dt>
                <dd className="group-hover:text-blue-200 dark:text-slate-300">
                  Engineering
                </dd>
              </div>
              <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                <dt className="sr-only">Users</dt>
                <dd className="flex justify-end -space-x-1.5 sm:justify-start lg:justify-end xl:justify-start">
                  <img
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                    alt=""
                    className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                    alt=""
                    className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                    alt=""
                    className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                    alt=""
                    className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                    alt=""
                    className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                    loading="lazy"
                    decoding="async"
                  />
                </dd>
              </div>
            </dl>
          </li>
          <li className="dark:highlight-white/10 group cursor-pointer rounded-md bg-white p-3 shadow-sm ring-1 ring-slate-200 hover:bg-blue-500 hover:shadow-md hover:ring-blue-500 dark:bg-slate-700 dark:ring-0 dark:hover:bg-blue-500">
            <dl className="grid grid-cols-2 grid-rows-2 items-center sm:block lg:grid xl:block">
              <div>
                <dt className="sr-only">Title</dt>
                <dd className="font-semibold text-slate-900 group-hover:text-white dark:text-slate-100">
                  New Benefits Plan
                </dd>
              </div>
              <div>
                <dt className="sr-only">Category</dt>
                <dd className="group-hover:text-blue-200 dark:text-slate-300">
                  Human Resources
                </dd>
              </div>
              <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                <dt className="sr-only">Users</dt>
                <dd className="flex justify-end -space-x-1.5 sm:justify-start lg:justify-end xl:justify-start">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                    alt=""
                    className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                    alt=""
                    className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                    alt=""
                    className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                    alt=""
                    className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                    alt=""
                    className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                    loading="lazy"
                    decoding="async"
                  />
                </dd>
              </div>
            </dl>
          </li>
          <li className="dark:highlight-white/10 group hidden cursor-pointer rounded-md bg-white p-3 shadow-sm ring-1 ring-slate-200 hover:bg-blue-500 hover:shadow-md hover:ring-blue-500 dark:bg-slate-700 dark:ring-0 dark:hover:bg-blue-500 sm:block lg:hidden xl:block">
            <dl className="grid grid-cols-2 grid-rows-2 items-center sm:block lg:grid xl:block">
              <div>
                <dt className="sr-only">Title</dt>
                <dd className="font-semibold text-slate-900 group-hover:text-white dark:text-slate-100">
                  Onboarding Emails
                </dd>
              </div>
              <div>
                <dt className="sr-only">Category</dt>
                <dd className="group-hover:text-blue-200 dark:text-slate-300">
                  Customer Success
                </dd>
              </div>
              <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                <dt className="sr-only">Users</dt>
                <dd className="flex justify-end -space-x-1.5 sm:justify-start lg:justify-end xl:justify-start">
                  <img
                    src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                    alt=""
                    className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                    alt=""
                    className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                    alt=""
                    className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                    alt=""
                    className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                    alt=""
                    className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                    loading="lazy"
                    decoding="async"
                  />
                </dd>
              </div>
            </dl>
          </li>
          <li className="flex">
            <div className="group flex w-full cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 py-3 text-sm font-medium leading-6 text-slate-900 hover:border-solid hover:border-blue-500 hover:bg-white hover:text-blue-500 dark:border-slate-700 dark:text-slate-100 dark:hover:border-blue-500 dark:hover:bg-transparent dark:hover:text-blue-500">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mb-1 text-slate-400 group-hover:text-blue-500"
              >
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"></path>
              </svg>
              New project
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
