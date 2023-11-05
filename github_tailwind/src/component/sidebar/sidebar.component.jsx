import React from "react";

const Sidebar = () => {
    return (
        <div className="sidebar w-full lg:w-1/4">
            <div className="about mt-4 lg:mt-0">
              <h4 className="text-base font-semibold">About</h4>
              <p className="text-base mt-4">A utility-first CSS framework for rapid UI development.</p>

              <div className="flex items-center space-x-2 mt-4">
                <svg className="w-4 fill-current" mr="2" classes="flex-shrink-0" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>
                <a href="#" className="text-blue-600 hover:underline font-semibold">tailwindcss.com/</a>
              </div>

              <div className="tags text-xs font-semibold flex items-center flex-wrap mt-2">
                <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">tailwindcss</a>
                <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">css</a>
                <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">css-framework</a>
                <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">postcss</a>
                <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">functional-css</a>
                <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">utility-classes</a>
                <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">responsive</a>
              </div>

              <a href="#" className="flex items-center space-x-2 mt-4 group">
                <svg className="w-4 fill-current text-gray-600 group-hover:text-blue-600" mr="2" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path></svg>
                <span className="text-gray-600 group-hover:text-blue-600">Readme</span>
              </a>

              <a href="#" className="flex items-center space-x-2 mt-4 group">
                <svg className="w-4 fill-current text-gray-600 group-hover:text-blue-600" mr="2" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg>
                <span className="text-gray-600 group-hover:text-blue-600">MIT License</span>
              </a>
            </div> 
            <div className="releases border-t border-gray-400 mt-6 pt-6">
              <h4 className="text-base font-semibold flex items-center">
                <span>Releases</span>
                <div className="text-xs rounded-lg bg-gray-300 px-2 ml-1">79</div>
              </h4>

              <a href="#" className="flex items-start mt-4 group">
                <svg className="fill-current mt-1 w-4 text-green-500 group-hover:text-blue-500" mt="1" classes="flex-shrink-0" color="green" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path></svg>
                <span className="ml-2">
                  <span className="font-semibold group-hover:text-blue-600">v1.5.1</span>
                  <span className="ml-1 text-xs border border-green-500 text-green-600 rounded-full font-semibold inline-block px-2">Latest</span>
                  <span className="block text-xs group-hover:text-blue-600">6 days ago</span>
                </span>
              </a>

              <div className="mt-4">
                <a href="#" className="text-blue-600 hover:underline text-xs">+ 78 releases</a>
              </div>
            </div> 

            <div className="used-by border-t border-gray-400 mt-6 pt-6">
              <h4 className="text-base font-semibold flex items-center">
                <span>Used By</span>
                <div className="text-xs rounded-lg bg-gray-300 px-2 ml-1">5,000+</div>
              </h4>

              <div className="mt-4">
                <a href="#" className="flex items-center -space-x-2">
                  <img src="https://picsum.photos/128/128/?random=1" className="w-8 border-2 border-white rounded-full" alt="avatar" />
                  <img src="https://picsum.photos/128/128/?random=2" className="w-8 rounded-full border-2 border-white" alt="avatar" />
                  <img src="https://picsum.photos/128/128/?random=3" className="w-8 rounded-full border-2 border-white" alt="avatar" />
                  <img src="https://picsum.photos/128/128/?random=4" className="w-8 rounded-full border-2 border-white" alt="avatar" />
                  <img src="https://picsum.photos/128/128/?random=5" className="w-8 rounded-full border-2 border-white" alt="avatar" />
                  <img src="https://picsum.photos/128/128/?random=6" className="w-8 rounded-full border-2 border-white" alt="avatar" />
                  <img src="https://picsum.photos/128/128/?random=7" className="w-8 rounded-full border-2 border-white" alt="avatar" />
                  <img src="https://picsum.photos/128/128/?random=8" className="w-8 rounded-full border-2 border-white" alt="avatar" />
                  <span className="text-xs text-blue-600 font-semibold" style={{ marginLeft: '0.5rem' }}>+ 58,357</span>

                </a>
              </div>
            </div> 

            <div className="contributors border-t border-gray-400 mt-6 pt-6">
              <h4 className="text-base font-semibold flex items-center">
                <span>Contributors</span>
                <div className="text-xs rounded-lg bg-gray-300 px-2 ml-1">115</div>
              </h4>

              <div className="flex items-center flex-wrap mt-2">
                <a href="#"><img src="https://picsum.photos/128/128/?random=9" alt="avatar" className="w-8 rounded-full mr-2 mt-2" /></a>
                <a href="#"><img src="https://picsum.photos/128/128/?random=10" alt="avatar" className="w-8 rounded-full mr-2 mt-2" /></ a>
                <a href="#"><img src="https://picsum.photos/128/128/?random=11" alt="avatar" className="w-8 rounded-full mr-2 mt-2" /></a>
                <a href="#"><img src="https://picsum.photos/128/128/?random=12" alt="avatar" className="w-8 rounded-full mr-2 mt-2" /></a>
                <a href="#"><img src="https://picsum.photos/128/128/?random=13" alt="avatar" className="w-8 rounded-full mr-2 mt-2" /></a>
                <a href="#"><img src="https://picsum.photos/128/128/?random=14" alt="avatar" className="w-8 rounded-full mr-2 mt-2" /></a>
                <a href="#"><img src="https://picsum.photos/128/128/?random=15" alt="avatar" className="w-8 rounded-full mr-2 mt-2" /></a>
                <a href="#"><img src="https://picsum.photos/128/128/?random=16" alt="avatar" className="w-8 rounded-full mr-2 mt-2" /></a>
                <a href="#"><img src="https://picsum.photos/128/128/?random=17" alt="avatar" className="w-8 rounded-full mr-2 mt-2" /></a>
                <a href="#"><img src="https://picsum.photos/128/128/?random=18" alt="avatar" className="w-8 rounded-full mr-2 mt-2" /></a>
              </div>

              <div className="mt-4">
                <a href="#" className="text-blue-600 hover:underline text-xs">+ 104 contributors</a>
              </div>
            </div>

            <div className="languages border-t border-gray-400 mt-6 pt-6">
              <h4 className="text-base font-semibold">Languages</h4>
              <div className="mt-4 flex">
                <div className="w-11/12 h-2 rounded-md rounded-r-none bg-purple-700"></div>
                <div className="w-1/12 h-2 rounded-md rounded-l-none bg-yellow-400"></div>
              </div>
              <ul className="mt-2 flex space-x-8 items-center text-xs">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-purple-700"></span>
                  <span className="ml-4">
                    <span className="font-semibold">CSS </span>
                    <span>93.9%</span>
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  <span className="ml-4">
                    <span className="font-semibold">JavaScript </span>
                    <span>6.1%</span>
                  </span>
                </li>
              </ul>
            </div> 
          </div>
    )
}

export default Sidebar;