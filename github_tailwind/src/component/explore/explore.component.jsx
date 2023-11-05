import React from "react";

const Explore = () => {
    return (
        <div className="file-explorer-container w-full lg:w-3/4 lg:mr-8">
            <div className="branch-navigation flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button className="border border-gray-400 rounded-md px-4 py-1 hover:bg-gray-200 flex items-center space-x-2">
                  <svg className="fill-current text-gray-600 w-4" text="gray" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path></svg>
                <div className="font-semibold">master</div>
                <svg className="w-3 ml-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <a href="#" className="hidden lg:flex items-center space-x-2 py-1 group">
                  <svg className="fill-current text-gray-600 group-hover:text-blue-600 w-4" text="gray" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path></svg>
                  <span className="group-hover:text-blue-600">
                    <span className="font-semibold">25 </span>
                    <span className="text-gray-600">branches</span>
                  </span>
                </a>
                <a href="#" className="hidden py-1 lg:flex items-center space-x-2 group">
                  <svg className="fill-current text-gray-600 group-hover:text-blue-600 w-4" text="gray" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path></svg>
                  <span className="text-gray-700 group-hover:text-blue-600">
                    <span className="font-semibold">79</span>
                    <span className="text-gray-600">tags</span>
                  </span>
                </a>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <button className="border border-gray-400 rounded-md px-3 py-1 hover:bg-gray-200 flex items-center space-x-2">
                  <div className="font-semibold">Go to file</div>
                </button>
                <button className="border border-gray-400 rounded-md px-3 py-1 hover:bg-gray-200 flex items-center space-x-1">
                  <div className="font-semibold">Add file</div>
                  <svg className="w-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <button className="font-semibold border border-gray-400 rounded-md text-white bg-green-600 hover:bg-green-700 px-4 py-1 flex items-center space-x-2">
                  <svg className="w-4 fill-current text-gray-200" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path></svg>
                  <div>Code</div>
                  <svg className="w-3 ml-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"></path></svg>
                </button>
              </div>
            </div>

            <div className="commits-container bg-blue-100 rounded-md rounded-b-none border border-blue-200 border-b-0 flex items-center justify-between px-4 py-4 mt-5">
              <div className="flex items-center space-x-2">
                <a href="#"><img src="https://avatars2.githubusercontent.com/u/4323180?s=60&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4" alt="avatar" className="w-6 h-6 rounded-full" /></a>
                <a href="#" className="font-semibold hover:underline">adamwathan</a>
                <a href="#" className="hover:underline hover:text-blue-600">1.5.1</a>
              </div>
              <div className="flex items-end">
                <a href="#">
                  <svg  className="w-4 fill-current text-green-500" aria-label="3 / 3 checks OK" viewBox="0 0 16 16" role="img"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                </a>
                <a href="#" className="font-mono text-xs text-gray-600 hover:underline hover:text-blue-500 ml-2 hidden lg:block">da070bd</a>
                <a href="#" className="text-gray-600 hover:underline hover:text-blue-500 ml-2">4 days ago</a>
                <a href="#" className="flex items-center ml-3">
                  <svg className="w-4 fill-current text-gray-600" text="gray" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"></path></svg>
                  <span className="ml-1">
                    <span className="font-semibold">3,040</span>
                    <span className="hidden lg:inline">commits</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="file-explorer rounded-md rounded-t-none border border-gray-400 text-gray-700 divide-y divide-gray-400">
              <div className="flex justify-between px-4 py-2 hover:bg-gray-200">
                <div className="w-4/12 flex items-center">
                  <svg className="w-4 fill-current text-blue-400" color="blue-3" aria-label="Directory" viewBox="0 0 16 16" role="img"><path fill-rule="evenodd" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path></svg>
                  <a href="#" className="hover:underline hover:text-blue-600 ml-3">.github</a>
                </div>
                <div className="w-6/12 truncate hidden lg:block"><a href="#" className="hover:underline hover:text-blue-600">Update issues template</a></div>
                <div className="w-4/12 lg:w-2/12 text-right">11 days ago</div>
              </div>
              <div className="flex justify-between px-4 py-2 hover:bg-gray-200">
                <div className="w-4/12 flex items-center">
                  <svg className="w-4 fill-current text-blue-400" color="blue-3" aria-label="Directory" viewBox="0 0 16 16" role="img"><path fill-rule="evenodd" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path></svg>
                  <a href="#" className="hover:underline hover:text-blue-600 ml-3">__tests__</a>
                </div>
                <div className="w-6/12 truncate hidden lg:block"><a href="#" className="hover:underline hover:text-blue-600">Remove stale test</a></div>
                <div className="w-4/12 lg:w-2/12 text-right">4 days ago</div>
              </div>
              <div className="flex justify-between px-4 py-2 hover:bg-gray-200">
                <div className="w-4/12 flex items-center">
                  <svg className="w-4 fill-current text-blue-400" color="blue-3" aria-label="Directory" viewBox="0 0 16 16" role="img"><path fill-rule="evenodd" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path></svg>
                  <a href="#" className="hover:underline hover:text-blue-600 ml-3">dist</a>
                </div>
                <div className="w-6/12 truncate hidden lg:block"><a href="#" className="hover:underline hover:text-blue-600">Add empty .npmignore so dist files are distributed with releases</a></div>
                <div className="w-4/12 lg:w-2/12 text-right">3 years ago</div>
              </div>
              <div className="flex justify-between px-4 py-2 hover:bg-gray-200">
                <div className="w-4/12 flex items-center">
                  <svg className="w-4 fill-current text-blue-400" color="blue-3" aria-label="Directory" viewBox="0 0 16 16" role="img"><path fill-rule="evenodd" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path></svg>
                  <a href="#" className="hover:underline hover:text-blue-600 ml-3">jest</a>
                </div>
                <div className="w-6/12 truncate hidden lg:block"><a href="#" className="hover:underline hover:text-blue-600">Use `process.env.JEST_WORKER_ID`</a></div>
                <div className="w-4/12 lg:w-2/12 text-right">15 months ago</div>
              </div>
              <div className="flex justify-between px-4 py-2 hover:bg-gray-200">
                <div className="w-4/12 flex items-center">
                  <svg className="w-4 fill-current text-blue-400" color="blue-3" aria-label="Directory" viewBox="0 0 16 16" role="img"><path fill-rule="evenodd" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path></svg>
                  <a href="#" className="hover:underline hover:text-blue-600 ml-3">scripts</a>
                </div>
                <div className="w-6/12 truncate hidden lg:block"><a href="#" className="hover:underline hover:text-blue-600">Prevent source maps from being generated</a></div>
                <div className="w-4/12 lg:w-2/12 text-right">21 days ago</div>
              </div>
              <div className="flex justify-between px-4 py-2 hover:bg-gray-200">
                <div className="w-4/12 flex items-center">
                  <svg className="w-4 fill-current text-blue-400" color="blue-3" aria-label="Directory" viewBox="0 0 16 16" role="img"><path fill-rule="evenodd" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path></svg>
                  <a href="#" className="hover:underline hover:text-blue-600 ml-3">src</a>
                </div>
                <div className="w-6/12 truncate hidden lg:block"><a href="#" className="hover:underline hover:text-blue-600">Only wrap with variants if rules don't already contain any variants</a></div>
                <div className="w-4/12 lg:w-2/12 text-right">4 days ago</div>
              </div>
              <div className="flex justify-between px-4 py-2 hover:bg-gray-200">
                <div className="w-4/12 flex items-center">
                  <svg className="w-4 fill-current text-blue-400" color="blue-3" aria-label="Directory" viewBox="0 0 16 16" role="img"><path fill-rule="evenodd" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path></svg>
                  <a href="#" className="hover:underline hover:text-blue-600 ml-3">stubs</a>
                </div>
                <div className="w-6/12 truncate hidden lg:block"><a href="#" className="hover:underline hover:text-blue-600">Generate responsive variants for container by default</a></div>
                <div className="w-4/12 lg:w-2/12 text-right">4 days ago</div>
              </div>
              <div className="flex justify-between px-4 py-2 hover:bg-gray-200">
                <div className="w-4/12 flex items-center">
                  <svg className="w-4 fill-current text-gray-600" color="gray-light" aria-label="File" viewBox="0 0 16 16" role="img"><path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path></svg>
                  <a href="#" className="hover:underline hover:text-blue-600 ml-3">.editorconfig</a>
                </div>
                <div className="w-6/12 truncate hidden lg:block"><a href="#" className="hover:underline hover:text-blue-600">Convert new stuff to use ES6 modules</a></div>
                <div className="w-4/12 lg:w-2/12 text-right">3 years ago</div>
              </div>
              <div className="flex justify-between px-4 py-2 hover:bg-gray-200">
                <div className="w-4/12 flex items-center">
                  <svg className="w-4 fill-current text-gray-600" color="gray-light" aria-label="File" viewBox="0 0 16 16" role="img"><path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path></svg>
                  <a href="#" className="hover:underline hover:text-blue-600 ml-3">.eslintignore</a>
                </div>
                <div className="w-6/12 truncate hidden lg:block"><a href="#" className="hover:underline hover:text-blue-600">Updated CLI init commend</a></div>
                <div className="w-4/12 lg:w-2/12 text-right">16 months ago</div>
              </div>
              <div className="flex justify-between px-4 py-2 hover:bg-gray-200">
                <div className="w-4/12 flex items-center">
                  <svg className="w-4 fill-current text-gray-600" color="gray-light" aria-label="File" viewBox="0 0 16 16" role="img"><path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path></svg>
                  <a href="#" className="hover:underline hover:text-blue-600 ml-3">.eslintrc.json</a>
                </div>
                <div className="w-6/12 truncate hidden lg:block"><a href="#" className="hover:underline hover:text-blue-600">Disable lint rule for TODO comments</a></div>
                <div className="w-4/12 lg:w-2/12 text-right">3 months ago</div>
              </div>
              <div className="flex justify-between px-4 py-2 hover:bg-gray-200">
                <div className="w-4/12 flex items-center">
                  <svg className="w-4 fill-current text-gray-600" color="gray-light" aria-label="File" viewBox="0 0 16 16" role="img"><path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path></svg>
                  <a href="#" className="hover:underline hover:text-blue-600 ml-3">plugin.js</a>
                </div>
                <div className="w-6/12 truncate hidden lg:block"><a href="#" className="hover:underline hover:text-blue-600 truncate hidden lg:block">Add new `plugin` and `plugin.withOptions` functions for creating plugins</a></div>
                <div className="w-4/12 lg:w-2/12 text-right">7 months ago</div>
              </div>
              <div className="flex justify-between px-4 py-2 hover:bg-gray-200">
                <div className="w-4/12 flex items-center">
                  <svg className="w-4 fill-current text-gray-600" color="gray-light" aria-label="File" viewBox="0 0 16 16" role="img"><path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path></svg>
                  <a href="#" className="hover:underline hover:text-blue-600 ml-3">README.md</a>
                </div>
                <div className="w-6/12 truncate hidden lg:block"><a href="#" className="hover:underline hover:text-blue-600">Add alt attribute to logo</a></div>
                <div className="w-4/12 lg:w-2/12 text-right">2 months ago</div>
              </div>
              <div className="flex justify-between px-4 py-2 hover:bg-gray-200">
                <div className="w-4/12 flex items-center">
                  <svg className="w-4 fill-current text-gray-600" color="gray-light" aria-label="File" viewBox="0 0 16 16" role="img"><path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path></svg>
                  <a href="#" className="hover:underline hover:text-blue-600 ml-3">tailwind.css</a>
                </div>
                <div className="w-6/12 truncate hidden lg:block"><a href="#" className="hover:underline hover:text-blue-600">Undo accidental changes to CDN build process</a></div>
                <div className="w-4/12 lg:w-2/12 text-right">7 months ago</div>
              </div>
              <div className="flex justify-between px-4 py-2 hover:bg-gray-200">
                <div className="w-4/12 flex items-center">
                  <svg className="w-4 fill-current text-gray-600" color="gray-light" aria-label="File" viewBox="0 0 16 16" role="img"><path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path></svg>
                  <a href="#" className="hover:underline hover:text-blue-600 ml-3">utilities.css</a>
                </div>
                <div className="w-6/12 truncate hidden lg:block"><a href="#" className="hover:underline hover:text-blue-600">Move CSS files to root for easier imports</a></div>
                <div className="w-4/12 lg:w-2/12 text-right">2 years ago</div>
              </div>
            </div>

            <div className="readme-container rounded-md border border-gray-400 px-4 py-4 mt-4">
              <h4 className="font-semibold">README.md</h4>
              <div v-html="readme" className="prose max-w-none px-4"></div>
            </div>

          </div>
    )
}

export default Explore;