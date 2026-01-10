import './App.css'
import Contact from './Contact'

function FlameSvg() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" fill="none" overflow="visible">
        <path d="M 2.202 5.765 C 2.171 7.334 2.402 8.763 3.823 9.785 C 3.748 9.325 3.655 8.869 3.601 8.408 C 3.355 6.298 3.548 4.268 4.889 2.462 C 5.644 1.443 6.623 0.655 7.833 0 C 7.732 0.327 7.625 0.582 7.577 0.847 C 7.368 2.003 7.771 3.005 8.618 3.812 C 9.239 4.405 9.957 4.916 10.671 5.415 C 11.942 6.304 12.983 7.357 13.525 8.775 C 14.818 12.16 13.435 15.865 9.81 17.445 C 6.418 18.922 2.04 17.34 0.671 14.035 C -0.477 11.264 -0.178 8.585 1.774 6.15 C 1.856 6.048 1.949 5.954 2.041 5.86 C 2.064 5.835 2.101 5.822 2.202 5.765 Z M 3.493 14.381 C 4.425 15.591 6.817 16.454 9.031 15.641 C 11.311 14.804 12.617 12.535 12.134 10.249 C 11.759 8.477 10.094 6.97 8.647 6.771 C 9.558 7.904 9.94 9.15 9.71 10.548 C 9.495 11.861 8.23 13.58 7.345 13.708 C 7.788 12.808 8.04 11.885 7.811 10.881 C 7.09 12.821 5.685 14.006 3.493 14.381 Z" fill="rgb(255,255,255)">
        </path>
      </svg>
    )
}

function LinkedInSvg() {
  return (
    <svg className='w-full h-full fill-[#f46c38]' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
    </svg>
  )
}

function GithubSvg() {
  return (
    <svg className='w-full h-full fill-[#f46c38]' viewBox="0 0 20 20" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <desc>Created with Sketch.</desc>
      <defs>
      </defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#f46c38">
              <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">
                  </path>
              </g>
          </g>
      </g>
    </svg>
  )
}

function PhoneSvg() {
  return (
    <svg className='w-full h-full fill-[#f46c38]' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  fill="currentColor"
      viewBox="0 0 512 512"  xml:space="preserve">
    <g>
      <path d="M500.177,55.798c0,0-21.735-7.434-39.551-11.967C411.686,31.369,308.824,24.727,256,24.727
        S100.314,31.369,51.374,43.831c-17.816,4.534-39.551,11.967-39.551,11.967c-7.542,2.28-12.444,9.524-11.76,17.374l8.507,97.835
        c0.757,8.596,7.957,15.201,16.581,15.201h84.787c8.506,0,15.643-6.416,16.553-14.878l4.28-39.973
        c0.847-7.93,7.2-14.138,15.148-14.815c0,0,68.484-6.182,110.081-6.182c41.586,0,110.08,6.182,110.08,6.182
        c7.949,0.676,14.302,6.885,15.148,14.815l4.29,39.973c0.9,8.462,8.038,14.878,16.545,14.878h84.777
        c8.632,0,15.832-6.605,16.589-15.201l8.507-97.835C512.621,65.322,507.72,58.078,500.177,55.798z"/>
      <path d="M357.503,136.629h-55.365v46.137h-92.275v-46.137h-55.365c0,0-9.228,119.957-119.957,207.618
        c0,32.296,0,129.95,0,129.95c0,7.218,5.857,13.076,13.075,13.076h416.768c7.218,0,13.076-5.858,13.076-13.076
        c0,0,0-97.654,0-129.95C366.73,256.586,357.503,136.629,357.503,136.629z M338.768,391.42v37.406h-37.396V391.42H338.768z
        M338.768,332.27v37.406h-37.396V332.27H338.768z M301.372,310.518v-37.396h37.396v37.396H301.372z M274.698,391.42v37.406h-37.396
        V391.42H274.698z M274.698,332.27v37.406h-37.396V332.27H274.698z M274.698,273.122v37.396h-37.396v-37.396H274.698z
        M210.629,391.42v37.406h-37.397V391.42H210.629z M210.629,332.27v37.406h-37.397V332.27H210.629z M210.629,273.122v37.396h-37.397
        v-37.396H210.629z"/>
    </g>
    </svg>
  )
}

function MailSvg() {
  return (
    <svg className='w-full h-full fill-[#f46c38]' viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path stroke="#f46c38" stroke-linejoin="round" stroke-width="12" d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"/>
    </svg>
  )
}

function IdCard() {
  return (
    <div className='w-full lg:w-[344px] h-fit md:h-[540px] lg:h-[640px] lg:flex-none bg-white relative rounded-2xl overflow-hidden'>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='w-full max-w-[344px] h-full bg-transparent relative overflow-visible'>
          <div className='w-full h-full bg-transparent'>
            <div className='w-full h-full bg-transparent flex flex-col py-[30px] px-[20px] gap-[24px] items-center justify-center'>
              <div className='flex-1'>
                <div className='w-full max-w-[260px] md:w-[240px] h-[210px] md:h-[284px] rounded-2xl bg-[#f46c38] overflow-hidden'>
                  <img
                    src="https://github.com/YashGovindani/protfolio/blob/1a5d313f9d77d1cf20f986946ac2d2d9f07c9195/IMG_2012.jpeg?raw=true"
                    className="w-full"
                  />
                </div>
              </div>
              <div className='flex-1 flex flex-col justify-between items-center gap-[16px]'>
                <div className='text-black text-[36px] leading-[36px] font-bold text-center'>Yash Govindani</div>
                <div className='flex flex-col gap-[20px]'>
                  <div className='text-[18px] font-medium text-[rgb(106,107,110)] text-center leading-[18px] max-w-[300px]'>
                    A Software Engineer who has developed countless innovative solutions.
                  </div>
                  <div className='flex h-[36px] gap-[16px] justify-center items-center'>
                    <a href='https://www.linkedin.com/in/yash-govindani/' className='h-full w-fit p-1 hover:bg-black/10 rounded-sm hover:cursor-pointer'>
                      <LinkedInSvg />
                    </a>
                    <a href='https://github.com/YashGovindani' className='h-full w-fit p-1 hover:bg-black/10 rounded-sm hover:cursor-pointer'>
                      <GithubSvg />
                    </a>
                    <a href='mailto:yashgovindani222@gmail.com' className='h-full w-fit p-1 hover:bg-black/10 rounded-sm hover:cursor-pointer'>
                      <MailSvg />
                    </a>
                    <a href='call:+918878855255' className='h-full w-fit p-1 hover:bg-black/10 rounded-sm hover:cursor-pointer'>
                      <PhoneSvg />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute -top-4'>
            <div class="w-[160px] h-[80px] border-4 border-t-transparent border-[rgb(244,108,56)] border-dashed rounded-b-full"></div>
          </div>
        </div>
      </div>
      <div className='absolute top-[160px] md:top-[270px] lg:top-[370px] -translate-x-2/3 w-fit h-fit rotate-30'>
        <div className='w-full h-full relative'>
          <div class="w-[232px] h-[101px] border-4 border-t-transparent border-[rgb(244,108,56)] border-dashed rounded-b-full"></div>
          <div className='w-[34px] h-[34px] absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 -rotate-30 flex items-center justify-center rounded-full bg-[rgb(244,108,56)]'>
            <FlameSvg />
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className='w-full min-w-[100vw] h-full min-h-[100vh] bg-[rgb(21,19,18)] flex items-center justify-center poppins no-scrollbar'>
      {/* center container */}
      <div className='w-full h-fit max-w-[1140px] p-[30px] lg:p-[40px] bg-transparent flex flex-col lg:flex-row gap-[50px] bg-red-300'>
        <IdCard />
        <div className='w-full h-fit flex flex-col gap-[120px]'>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App
